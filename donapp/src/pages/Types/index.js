import React, { Fragment, Component } from "react";

import Header from "~/src/components/Header";
import Type from "~/src/components/Type";

import { Container } from "./styles";

class Types extends Component {
  state = {
    types: []
  };
  componentDidMount() {
    this.getTypes();
  }
  getTypes = () => {
    const { navigation } = this.props;
    const types = navigation.getParam("types");
    if (!types) return;
    this.setState({ types });
  };
  render() {
    const { navigation } = this.props;
    const { types } = this.state;
    return (
      <Fragment>
        <Header title="Selecione um tipo" back="Home" />
        <Container>
          {types.map(type => (
            <Type
              navigate={() =>
                navigation.navigate("Sizes", { sizes: type.sizes })
              }
              key={type.id}
              type={type}
            />
          ))}
        </Container>
      </Fragment>
    );
  }
}

export default Types;
