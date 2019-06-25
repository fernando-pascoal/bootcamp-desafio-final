import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  width: 100%;
  padding: ${metrics.padding};
  z-index: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: colors.blue,
  backgroundColor: colors.blue
})``;

export const Title = styled.Text`
  flex: 1;
  font-size: ${metrics.fontBig};
  color: ${colors.white};
  font-weight: bold;
  text-align: ${props => (props.type === "total" ? "right" : "left")};
`;
export const HomeTitle = styled.Text`
  flex: 1;
  font-size: ${metrics.fontBig};
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`;

export const ImageContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Image = styled.Image`
  width: 100%;
  margin-top: -5px;
`;

export const StoreContainer = styled.TouchableOpacity``;
export const LogoutContainer = styled.TouchableOpacity``;
export const Circle = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${colors.yellow};
`;

export const styles = StyleSheet.create({
  icon: {
    color: colors.white,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.red,
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});
