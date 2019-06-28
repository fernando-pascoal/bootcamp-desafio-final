import React from "react";
import {
  Container,
  Content,
  Title,
  DescriptionText,
  TotalText
} from "./styles";

const Order = props => {
  const { order } = props;
  return (
    <Container
      style={{
        elevation: 8
      }}
    >
      <Content>
        <Title>Pedido #{order.id}</Title>
        <DescriptionText>{order.moment}</DescriptionText>
        <TotalText>R$ {order.total.toFixed(2)}</TotalText>
      </Content>
    </Container>
  );
};

export default Order;
