import React, { Component, Fragment } from "react";
import createRoutes from "./routes";
import AsyncStorage from "@react-native-community/async-storage";
import "./config/reactotron";

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("@app:token");
    this.setState({ userChecked: true, userLogged: !!token });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createRoutes(userLogged);

    return (
      <Fragment>
        <Routes />
      </Fragment>
    );
  }
}
