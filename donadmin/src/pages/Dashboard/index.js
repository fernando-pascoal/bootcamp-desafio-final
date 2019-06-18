import React, { Component, Fragment } from "react";
import api from "../../services/api";
import {
  Container,
  Header,
  Title,
  Logo,
  InfoContainer,
  OrdersContainer,
  MoreOrders
} from "./styles";

import OrderComponent from "../../components/Order";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PropTypes from "prop-types";

class Dashboard extends Component {
  state = {
    username: "",
    orders: [],
    loading: true,
    page: 1,
    lastPage: 1
  };

  async componentDidMount() {
    this.loadOrders();
  }
  loadMoreOrders = async () => {
    const { page, lastPage } = this.state;
    if (page === lastPage) return;
    if (page < lastPage) {
      this.loadOrders(page + 1);
    }
  };

  loadOrders = async (page = 1) => {
    try {
      const { orders } = this.state;
      const { data } = await api.get(`/orders?page=${page}`);
      const username = await sessionStorage.getItem("@app:username");
      this.setState({
        orders: [...orders, ...data.data],
        page: data.page,
        lastPage: data.lastPage,
        loading: false,
        username
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast("Não consegui ti autenticar");
        this.removeStorage();
        this.goToLogin();
        return;
      }
      if (error.response && error.response.data.lenght > 0) {
        error.response.data.forEach(data => {
          toast(`${data.field} - ${data.message}`);
        });
        return;
      } else if (error.response && error.response.data.message) {
        return toast(error.response.data.message);
      } else {
        toast("Ops! Algum problema aconteceu");
      }
      this.setState({
        loading: false
      });
    }
  };

  handlerExit = () => {
    this.removeStorage();
    this.goToLogin();
  };

  goToLogin = () => {
    const { history } = this.props;
    return history.push("/login");
  };

  removeStorage = async () => {
    await sessionStorage.removeItem("@app:token");
    await sessionStorage.removeItem("@app:username");
  };

  render() {
    const { username, loading, orders, page, lastPage } = this.state;
    return (
      <Container>
        <ToastContainer hideProgressBar={true} />
        <Header>
          <Title>
            <Logo src="assets/logo.svg" />
            <p>Pizzaria do Don Juan</p>
          </Title>
          <InfoContainer>
            <div className="username">
              {username}
              <p onClick={() => this.handlerExit()}>Sair do app</p>
            </div>
            <div className="alert">
              <i className="fa fa-shopping-bag" />
            </div>
          </InfoContainer>
        </Header>
        <OrdersContainer>
          <h1>Últimos Pedidos</h1>
          {loading ? (
            <i className="fa fa-spinner fa-spin" />
          ) : (
            <Fragment>
              {orders.map(order => (
                <OrderComponent key={order.id} order={order} />
              ))}
            </Fragment>
          )}
          {page < lastPage && (
            <MoreOrders onClick={() => this.loadMoreOrders()}>
              {loading ? (
                <i className="fa fa-spinner fa-spin" />
              ) : (
                "Mais pedidos"
              )}
            </MoreOrders>
          )}
        </OrdersContainer>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default Dashboard;
