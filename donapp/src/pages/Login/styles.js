import styled from "styled-components/native";
import { colors, metrics } from "../../styles";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  flex: 1;
`;

export const Logo = styled.Image`
  width: 70px;
  height: 70px;
  align-self: center;
  margin: ${metrics.margin};
`;

export const styles = StyleSheet.create({
  form: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1, justifyContent: "center" }
})`
  flex: 1;
  padding: ${metrics.padding};
  width: 100%;
  flex-direction: column;
`;

export const Input = styled.TextInput`
  font-size: ${metrics.fontSize};
  color: ${colors.black};
  padding: ${metrics.padding};
  margin-bottom: ${metrics.margin};
  border-radius: ${metrics.radius};
  width: 100%;
  background-color: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => colors[`${props.bg}`]};
  margin-bottom: ${metrics.margin};
  border: none;
  border-radius: ${metrics.radius};
  width: 100%;
  height: 50px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: ${metrics.fontSize};
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`;
