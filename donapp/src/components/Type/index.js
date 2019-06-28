import React from "react";

import { Container, Text, Image } from "./styles";

const Type = ({ navigate, type }) => {
  return (
    <Container
      style={{
        elevation: 8
      }}
      onPress={() => navigate()}
    >
      <Image source={{ uri: type.url }} />
      <Text>{type.name}</Text>
    </Container>
  );
};

export default Type;
