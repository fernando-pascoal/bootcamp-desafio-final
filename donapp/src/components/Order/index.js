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
    <Container>
      <Content>
        <Title>Pedido #{order.id}</Title>
        <DescriptionText>{order.moment}</DescriptionText>
        <TotalText>R$ {order.total.toFixed(2)}</TotalText>
      </Content>
    </Container>
  );
};

export default Order;
