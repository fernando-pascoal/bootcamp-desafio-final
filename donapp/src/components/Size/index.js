import React, { Fragment, Component } from "react";
import Store from "~/src/services/store";
import {
  Container,
  Content,
  ContentIcon,
  Text,
  ImageContainer,
  ButtonsContainer,
  ButtonIcon
} from "./styles";

import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Size extends Component {
  state = {
    count: 1,
    width: 50,
    height: 50
  };

  componentDidMount() {
    const { size } = this.props;
    Image.getSize(size.url, (width, height) => {
      this.setState({ width, height });
    });
    this.setState({ count: size.count });
  }

  setItemIntoOrder = async () => {
    const { count } = this.state;
    const { size, navigate, type } = this.props;
    if (count < 1) return;
    if (type === "cart") return;
    size.count = 1;
    await Store.setItem(size);
    navigate();
  };

  setCount = async count => {
    const { size, loadItems } = this.props;
    if (count < 1) return;
    await Store.setCount(size, count);
    loadItems();
    this.setState({ count });
  };

  removeItem = async () => {
    const { size, loadItems } = this.props;
    await Store.removeItem(size.id);
    loadItems();
  };
  render() {
    const { size, type } = this.props;
    const { count, width, height } = this.state;
    return (
      <Container type={type} onPress={() => this.setItemIntoOrder()}>
        <ImageContainer>
          <Image
            resizeMethod="scale"
            resizeMode="contain"
            style={{
              width,
              height,
              maxWidth: 80,
              maxHeight: 80,
              borderRadius: 4
            }}
            source={{ uri: type === "cart" ? size.type.url : size.url }}
          />
        </ImageContainer>

        {type === "cart" ? (
          <Fragment>
            <Content>
              <Text
                type={type}
              >{`${size.type.product.name}: ${size.type.name}`}</Text>
              <Text type={type}>Tamanho: {size.name}</Text>
              <Text type={type}>R$ {size.price.toFixed(2)}</Text>
              <ButtonsContainer>
                <ButtonIcon onPress={() => this.setCount(count - 1)}>
                  <Icon name="minus" size={20} color="#fff" />
                </ButtonIcon>
                <Text>{count}</Text>
                <ButtonIcon onPress={() => this.setCount(count + 1)}>
                  <Icon name="plus" size={20} color="#fff" />
                </ButtonIcon>
              </ButtonsContainer>
            </Content>
          </Fragment>
        ) : (
          <Content>
            <Text>{size.name}</Text>
            <Text color="gray">R$ {size.price.toFixed(2)}</Text>
          </Content>
        )}

        {type === "cart" && (
          <ContentIcon>
            <Icon
              onPress={this.removeItem}
              name="trash"
              size={20}
              color="red"
            />
          </ContentIcon>
        )}
      </Container>
    );
  }
}
export default Size;
