import React, { Component, Fragment } from "react";
import { BackHandler, Dimensions } from "react-native";
import { withNavigation } from "react-navigation";
import Store from "~/src/services/store";

/** HOME */
import {
  styles,
  Container,
  Image,
  StatusBar,
  Title,
  HomeTitle,
  StoreContainer,
  Circle,
  ImageContainer,
  LogoutContainer
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

class Header extends Component {
  state = {
    haveItems: false,
    showTotal: false,
    loading: true
  };
  componentWillUnmount() {
    this.backHandler.remove();
  }

  componentDidMount() {
    const { state } = this.props.navigation;
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.goback
    );
    if (state.routeName === "Address" || state.routeName === "Items") {
      this.setState({ showTotal: true });
    }
    this.haveItems();
  }

  haveItems = async () => {
    const items = await Store.getItems();
    this.setState({ haveItems: !!items.items[0], loading: false });
  };

  goback = async () => {
    const { navigation } = this.props;
    navigation.goBack(null);
    return true;
  };

  logout = async () => {
    await Store.clear();
    const { navigation } = this.props;
    navigation.navigate("Login");
  };

  navigateToItems = () => {
    const { navigation } = this.props;
    return navigation.navigate("Items");
  };

  render() {
    const { haveItems, showTotal } = this.state;
    const { type, title, total } = this.props;
    return (
      <Container>
        <StatusBar />
        <ImageContainer>
          <Image
            resizeMethod="resize"
            resizeMode="stretch"
            source={require("./img/header-background.png")}
          ></Image>
        </ImageContainer>
        {type === "home" ? (
          <Fragment>
            <LogoutContainer onPress={this.logout}>
              <Icon
                name="undo"
                size={20}
                style={{ ...styles.icon, backgroundColor: "transparent" }}
              />
            </LogoutContainer>
            <HomeTitle>{title}</HomeTitle>
            <StoreContainer onPress={this.navigateToItems}>
              <Icon name="shopping-bag" size={15} style={styles.icon} />
              {haveItems && <Circle />}
            </StoreContainer>
          </Fragment>
        ) : (
          <Fragment>
            <Icon
              onPress={this.goback}
              style={{ ...styles.icon, backgroundColor: "transparent" }}
              name="angle-left"
              size={20}
              color="#FFF"
            />
            <Title>{title}</Title>
            {showTotal && <Title type="total">R$ {total.toFixed(2)}</Title>}
          </Fragment>
        )}
      </Container>
    );
  }
}

export default withNavigation(Header);
