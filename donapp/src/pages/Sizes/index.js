import React, { Fragment } from "react";

import Header from "~/src/components/Header";
import Size from "~/src/components/Size";

import { Container } from "./styles";

const Sizes = ({ navigation }) => {
  const sizes = navigation.getParam("sizes");
  return (
    <Fragment>
      <Header title="Selecione um tamanho" />
      <Container>
        {sizes.map(size => (
          <Size
            key={size.id}
            size={size}
            navigate={() => navigation.navigate("Items")}
          />
        ))}
      </Container>
    </Fragment>
  );
};

export default Sizes;
