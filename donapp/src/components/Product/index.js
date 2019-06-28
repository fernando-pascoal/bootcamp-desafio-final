import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container, Content, Image, Title, DescriptionText } from "./styles";

const Product = ({ product, navigate }) => (
  <Container
    onPress={() => navigate()}
    style={{
      elevation: 8
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
