import React, { Component, Fragment } from "react";
import { ActivityIndicator } from "react-native";
import {
  styles,
  Logo,
  Container,
  Image,
  Form,
  Input,
  Button,
  ButtonText
} from "./styles";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import Toast from "@rimiti/react-native-toastify";
import api from "~/src/services/api";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    loading: false,
    type: "signin"
  };

  componentDidMount() {
    this.message();
  }

  message = () => {
    const { navigation } = this.props;
    const message = navigation.getParam("message");
    if (!!message) {
      return this.toastify.show(message);
    }
  };

  changeForm = type => {
    this.setState({ type });
  };

  handlerSend = async e => {
    const { navigation } = this.props;
    this.setState({ loading: true });
    const {
      username,
      email,
      password,
      password_confirmation,
      type
    } = this.state;
    try {
      if (type === "signin") {
        const { data } = await api.post("/session", { email, password });
        if (data.admin) {
          this.setState({ loading: false });
          return this.toastify.show(
            "Você é um administrador, tente acessar pelo navegador."
          );
        }
        await AsyncStorage.setItem("@app:token", data.token);
        await AsyncStorage.setItem("@app:username", data.username);
        return navigation.navigate("Home");
      }
      if (type === "signup") {
        await api.post("/user", {
          username,
          email,
          password,
          password_confirmation
        });
        this.setState({
          type: "signin",
          password: "",
          password_confirmation: ""
        });
        this.toastify.show("Usuário cadastrado");
        this.setState({ loading: false });
      }
    } catch (error) {
      if (!!error.response) {
        if (error.response.status === 401) {
          this.toastify.show("Não consegui ti autenticar");
        }
        if (error.response.data.length > 0) {
          let message = "";
          error.response.data.forEach(data => {
            message += `${data.field} - ${data.message}\n`;
          });
          this.toastify.show(message);
        } else if (error.response.data.message) {
          this.toastify.show(error.response.data.message);
        }
      } else {
        this.toastify.show("Ops! Algum problema aconteceu");
      }
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const {
      username,
      email,
      password,
      password_confirmation,
      loading,
      type
    } = this.state;
    return (
      <Fragment>
        <Container>
          <Toast
            ref={c => (this.toastify = c)}
            position="center"
            durationShort={1000}
          />
          <Image source={require("./fundo.jpg")} />
          <LinearGradient
            colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}
            style={styles.form}
          >
            <Form>
              <Logo source={require("./img/logo.png")} />
              {type === "signup" && (
                <Input
                  placeholder="Seu nome"
                  value={username}
                  onChangeText={username => this.setState({ username })}
                />
              )}
              <Input
                autoCapitalize="none"
                placeholder="Seu e-mail"
                value={email}
                onChangeText={email => this.setState({ email })}
              />
              <Input
                secureTextEntry={true}
                placeholder="Senha secreta"
                value={password}
                onChangeText={password => this.setState({ password })}
              />
              {type === "signup" && (
                <Input
                  secureTextEntry={true}
                  placeholder="Confirme a secreta"
                  value={password_confirmation}
                  onChangeText={password_confirmation =>
                    this.setState({ password_confirmation })
                  }
                />
              )}
              <Button onPress={e => this.handlerSend(e)} bg="red">
                {loading ? (
                  <ActivityIndicator size={30} color="#FFF" />
                ) : (
                  <ButtonText>Entrar</ButtonText>
                )}
              </Button>
              <Button onPress={e => this.handlerSend(e)} bg="transparent">
                {type === "signin" ? (
                  <ButtonText onPress={() => this.changeForm("signup")}>
                    Criar conta gratuita
                  </ButtonText>
                ) : (
                  <ButtonText onPress={() => this.changeForm("signin")}>
                    Ja tenho conta
                  </ButtonText>
                )}
              </Button>
            </Form>
          </LinearGradient>
        </Container>
      </Fragment>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default Login;
