import React, { Component, Fragment } from "react";
import api from "~/src/services/api";
import { ActivityIndicator } from "react-native";
import Header from "~/src/components/Header";
import Product from "~/src/components/Product";
import { Container } from "./styles";
import Toast from "@rimiti/react-native-toastify";

class Home extends Component {
  state = {
    products: [],
    loading: true
  };
  async componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    try {
      const { data } = await api.get("/products");
      this.setState({ products: data });
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false });
      let message = "Opa! Algum problema aconteceu ao recuperar os produtos";
      if (error.response) {
        if (!!error.response.data.message) {
          message = error.data.message;
        }
      }
      this.toastify.show(message);
    }
  };

  render() {
    const { products, loading } = this.state;
    const { navigation } = this.props;
    return (
      <Fragment>
        <Toast
          ref={c => (this.toastify = c)}
          position="center"
          durationShort={1000}
        />
        <Header type="home" title="Pizzaria Don Ruan" />
        <Container>
          {loading ? (
            <ActivityIndicator size={30} color="#FFF" />
          ) : (
            <Fragment>
              {products.map(product => (
                <Product
                  key={product.id}
                  navigate={() =>
                    navigation.navigate("Types", { types: product.types })
                  }
                  product={product}
                />
              ))}
            </Fragment>
          )}
        </Container>
      </Fragment>
    );
  }
}

export default Home;
