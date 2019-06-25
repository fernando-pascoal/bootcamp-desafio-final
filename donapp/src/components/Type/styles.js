import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";

export const Container = styled.TouchableOpacity`
  padding: ${metrics.padding};
  margin-bottom: ${metrics.bigPadding};
  background-color: ${colors.white};
  border-radius: ${metrics.radius};
  border: solid 1px ${colors.gray};
  align-items: center;
  width: 45%;
`;

export const Text = styled.Text`
  font-size: ${metrics.fontSize};
  font-weight: bold;
  margin-top: ${metrics.margin};
  color: ${colors.blue};
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: ${metrics.radius};
`;
