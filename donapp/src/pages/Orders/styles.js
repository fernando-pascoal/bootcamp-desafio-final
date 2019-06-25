import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: ${metrics.margin};
  margin-bottom: ${metrics.margin};
  padding: ${metrics.bigPadding};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
`;
export const Text = styled.Text`
  font-size: ${metrics.fontSize};
  color: ${colors.blue};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const VazioText = styled.Text`
  text-align: center;
  padding: ${metrics.padding};
  margin: ${metrics.margin};
  text-transform: uppercase;
  color: ${colors.gray};
  font-weight: bold;
`;
