import React, { Component, Fragment } from "react";

import { ActivityIndicator } from "react-native";
import Order from "~/src/components/Order";
import Header from "~/src/components/Header";
import api from "~/src/services/api";
import Toast from "@rimiti/react-native-toastify";
import { Container, Button, Text, VazioText } from "./styles";

class Orders extends Component {
  state = {
    loading: true,
    orders: [],
    page: 1,
    lastPage: 99
  };
  componentDidMount() {
    this.loadOrders();
  }
  loadOrders = async (page = 1) => {
    const { navigation } = this.props;
    const { orders } = this.state;
    try {
      const { data } = await api.get(`/orders?page=${page}`);
      orders.push(...data.data);
      this.setState({
        orders,
        page: page,
        lastPage: data.lastPage,
        loading: false
      });
    } catch (error) {
      if (error.response && error.response.status === 401)
        return navigation.navigate("Login", {
          message: "Faça o login novamente para continuar"
        });
      this.toastify.show(
        error.response.message || "Ops! algum problema aconteceu"
      );
      this.setState({ loading: false });
    }
  };
  render() {
    const { loading, orders, page, lastPage } = this.state;
    return (
      <Fragment>
        <Toast
          ref={c => (this.toastify = c)}
          position="center"
          durationShort={1000}
        />
        <Header title="Meus Pedidos" />
        <Container>
          {loading ? (
            <ActivityIndicator size={30} color="#FFF" />
          ) : (
            <Fragment>
              {!orders.length && <VazioText>Nenhum pedido</VazioText>}
              {orders.map(order => (
                <Order key={order.id} order={order} />
              ))}
              {page < lastPage && (
                <Button onPress={() => this.loadOrders(page + 1)}>
                  <Text>Mais</Text>
                </Button>
              )}
            </Fragment>
          )}
        </Container>
      </Fragment>
    );
  }
}
export default Orders;
