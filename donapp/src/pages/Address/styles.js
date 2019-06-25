import styled from "styled-components/native";
import { colors, metrics } from "~/src/styles";

export const Container = styled.ScrollView`
  margin-top: ${metrics.margin};
  padding: ${metrics.padding};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  background-color: ${colors.white};
  font-size: ${metrics.fontSize};
  border: solid 1px rgba(0, 0, 0, 0.2);
  margin-bottom: ${metrics.margin};
  margin-right: ${props => (props.marginRight ? "5%" : "0")};
  border-radius: ${metrics.radius};
  padding: ${metrics.padding};
  width: ${props => (props.width ? props.width : "100%")};
`;

export const ButtonOrder = styled.TouchableOpacity`
  align-self: flex-end;
  padding: ${metrics.padding};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.red};
  width: 200px;
  border-radius: ${metrics.bigRadius};
`;

export const TextButton = styled.Text`
  text-transform: uppercase;
  color: ${colors.white};
  font-weight: bold;
`;
