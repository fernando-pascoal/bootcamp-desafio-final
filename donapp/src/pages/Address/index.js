import React, { Component } from "react";
import axios from "axios";
import api from "~/src/services/api";
import { View } from "react-native";
import Header from "~/src/components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";
import Toast from "@rimiti/react-native-toastify";
import Store from "~/src/services/store";
import { ActivityIndicator } from "react-native";

import {
  Container,
  Input,
  InputContainer,
  ButtonOrder,
  TextButton
} from "./styles";

class Adress extends Component {
  state = {
    remarks: "",
    cep: "",
    logradouro: "",
    bairro: "",
    numero: "",
    loading: false,
    total: 0,
    loadingTotal: true
  };

  componentDidMount() {
    this.loadTotal();
  }

  loadTotal = async () => {
    const items = await Store.getItems();
    this.setState({ total: items.total, loadingTotal: false });
  };

  loadByCep = async () => {
    let { cep } = this.state;
    const address = await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.data)
      .catch(error =>
        this.toastify.show("Não consegui obter o endereço pelo cep")
      );
    if (address.erro) {
      this.toastify.show("Não consegui obter o endereço pelo cep");
    } else {
      this.setState({ ...address, cep });
    }
  };

  validate = () => {
    const { cep, logradouro, bairro, numero } = this.state;
    let success = true;
    let message = "";
    if (!cep || !logradouro || !bairro || !numero) {
      message = "Preencha os campos corretamente";
      success = false;
    }
    let x = numero.split(",");
    let y = numero.split(".");
    if (x.length > 1 || y.length > 1) {
      message = "O numero da casa é inválido";
      success = false;
    }

    if (!success) {
      this.setState({ loading: false });
      this.toastify.show(message);
    }
    return success;
  };

  handlerSend = async () => {
    const { remarks, cep, logradouro, bairro, numero } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });

    if (!this.validate()) return;

    const items = await Store.getItems();
    const address = { cep, logradouro, bairro, numero };
    try {
      await api.post("/orders", { items: items.items, remarks, address });
      await AsyncStorage.removeItem("@app:items");
      this.toastify.show("Pedido enviado, agora é só aguardar :)");
      setTimeout(() => {
        navigation.navigate("Items");
      }, 2000);
    } catch (error) {
      let message =
        "Opa! Algum problema aconteceu ao enviar o pedido, por favor tentar mais tarde";
      if (error.data && error.data.message) {
        message = error.data.message;
      }
      this.toastify.show(message);
    }
  };
  render() {
    const {
      remarks,
      cep,
      logradouro,
      bairro,
      numero,
      total,
      loading
    } = this.state;
    return (
      <View>
        <Header title="Realizar pedido" total={total} />
        <Toast
          ref={c => (this.toastify = c)}
          position="center"
          durationShort={1000}
        />
        <Container>
          <Input
            defaultValue={remarks}
            placeholder="Alguma observação?"
            numberOfLines={5}
            multiline={true}
            onChangeText={remarks => this.setState({ remarks })}
          />
          <Input
            defaultValue={cep}
            placeholder="Qual o seu cep? Ex.: 63123123"
            keyboardType="numeric"
            maxLength={8}
            onBlur={this.loadByCep}
            onChangeText={cep => this.setState({ cep })}
          />
          <InputContainer>
            <Input
              defaultValue={logradouro}
              placeholder="Rua"
              width="70%"
              onChangeText={logradouro => this.setState({ logradouro })}
            />
            <Input
              defaultValue={numero}
              placeholder="N°"
              width="25%"
              keyboardType="number-pad"
              onChangeText={numero => this.setState({ numero })}
            />
          </InputContainer>
          <Input
            defaultValue={bairro}
            placeholder="Bairro"
            onChangeText={bairro => this.setState({ bairro })}
          />
          <ButtonOrder onPress={this.handlerSend}>
            {loading ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <TextButton>finalizar</TextButton>
            )}
            <Icon name="angle-right" color="#FFF" size={15} />
          </ButtonOrder>
        </Container>
      </View>
    );
  }
}

export default Adress;
