import React, { Component, Fragment } from "react";
import { Container, Image, Form, Input, Button, Logo } from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";

import PropTypes from "prop-types";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  componentDidMount() {
    this.checkToken();
  }

  checkToken = async () => {
    const { history } = this.props;
    const authorized = await api.post("/checksession").then(res => res.data);
    if (authorized) {
      return history.push("/");
    }
  };

  changeForm = (type, e) => {
    e.preventDefault();
    this.setState({ type });
  };

  handlerSend = async e => {
    e.preventDefault();
    const { history } = this.props;

    this.setState({ loading: true });
    const { email, password } = this.state;
    try {
      const { data } = await api.post("/session", { email, password });
      if (!data.admin) {
        this.setState({ loading: false });
        return toast("Você não é um administrador, tente acessar pelo app.");
      }
      await sessionStorage.setItem("@app:token", data.token);
      await sessionStorage.setItem("@app:username", data.username);
      history.push("/");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          return toast("Não consegui ti autenticar");
        }
        if (error.response.data.lenght > 0) {
          error.response.data.forEach(data => {
            toast(`${data.field} - ${data.message}`);
          });
          return;
        } else if (error.response.data.message) {
          toast(error.response.data.message);
        } else {
          toast("Ops! Algum problema aconteceu");
        }
      } else {
        toast("Ops! Algum problema aconteceu");
      }

      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { email, password, loading } = this.state;
    return (
      <Fragment>
        <Container>
          <ToastContainer hideProgressBar={true} />
          <Form>
            <Logo src="assets/logo.svg" />

            <Input
              placeholder="Seu e-mail"
              type="email"
              defaultValue={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Input
              placeholder="Senha secreta"
              type="password"
              defaultValue={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Button onClick={e => this.handlerSend(e)} bg="red">
              {loading ? <i className="fa fa-spinner fa-spin" /> : "Entrar"}
            </Button>
          </Form>
        </Container>
        <Image src="assets/fundo.jpg" />
      </Fragment>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default Login;
