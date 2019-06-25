import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";

export const Container = styled.TouchableOpacity`
  flex-direction: ${props => (props.type === "cart" ? "row" : "column")};
  justify-content: space-between;
  align-items: center;
  padding: ${metrics.padding};
  margin-bottom: ${metrics.bigPadding};
  border-radius: ${metrics.radius};
  background-color: ${colors.white};
  border: solid 1px ${colors.gray};
  width: ${props => (props.type === "cart" ? "100%" : "45%")};
`;

export const Content = styled.View`
  width: 150px;
  padding: ${metrics.padding};
`;

export const ContentIcon = styled.View`
  width: 50px;
  align-items: center;
  padding: ${metrics.padding};
`;

export const Text = styled.Text`
  text-align: ${props => (props.type === "cart" ? "left" : "center")};
  font-size: ${props =>
    props.type === "cart" ? metrics.fontSmall : metrics.fontSize};
  font-weight: bold;
  color: ${props => (props.color === "gray" ? colors.gray : colors.blue)};
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  flex: 1;
  align-self: center;
`;

export const ButtonsContainer = styled.View`
  width: 90px;
  flex-direction: row;
  margin-top: 5px;
  justify-content: space-between;
`;

export const ButtonIcon = styled.TouchableOpacity`
  border-radius: ${metrics.radius};
  background-color: ${colors.blue};
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
