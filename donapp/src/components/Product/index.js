import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, Content, Image, Title, DescriptionText } from "./styles";

const Product = ({ product, navigate }) => (
  <Container
    onPress={() => navigate()}
    style={{
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 10,
        width: 10
      }
    }}
  >
    <Image source={{ uri: product.url }} />
    <Content>
      <Title>{product.name}</Title>
      <DescriptionText>{product.description}</DescriptionText>
      <DescriptionText>
        <Icon name="hourglass-half" />
        {` ${product.delivery || ""}`}
      </DescriptionText>
    </Content>
  </Container>
);

export default Product;
