import React, { Component, Fragment } from "react";
import Header from "~/src/components/Header";
import Size from "~/src/components/Size";
import {
  Container,
  ItemsContainer,
  ButtonOrder,
  ButtonsContainer,
  TextButton,
  VazioText,
  styles
} from "./styles";
import { ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Store from "~/src/services/store";
class Items extends Component {
  state = {
    sizes: [],
    total: 0,
    loading: true
  };

  componentDidMount() {
    this.loadItems();
  }

  redirect = to => {
    const { navigation } = this.props;
    navigation.navigate(to);
  };

  loadItems = async () => {
    const items = await Store.getItems();
    this.setState({ sizes: items.items, total: items.total, loading: false });
  };

  render() {
    const { sizes, total, loading } = this.state;
    return (
      <Fragment>
        <Header title="Carrinho" back="Home" total={total} />
        <Container>
          {loading ? (
            <ActivityIndicator size={30} color="#fff" />
          ) : (
            <ItemsContainer>
              {sizes.length ? (
                sizes.map(size => (
                  <Size
                    loadItems={this.loadItems}
                    type="cart"
                    key={size.id}
                    size={size}
                  />
                ))
              ) : (
                <VazioText>Seu carrinho esta vazio</VazioText>
              )}
            </ItemsContainer>
          )}
        </Container>
        <ButtonsContainer>
          <Icon
            onPress={() => this.redirect("Home")}
            name="cart-plus"
            size={20}
            style={styles.icon}
          />
          <Icon
            onPress={() => this.redirect("Orders")}
            name="list"
            size={20}
            style={styles.icon}
          />
          {!!sizes.length && (
            <ButtonOrder onPress={() => this.redirect("Address")}>
              <TextButton>realizar pedido</TextButton>
              <Icon name="angle-right" color="#FFF" size={15} />
            </ButtonOrder>
          )}
        </ButtonsContainer>
      </Fragment>
    );
  }
}

export default Items;
