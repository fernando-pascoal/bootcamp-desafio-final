import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";

export const Container = styled.TouchableOpacity`
  padding: ${metrics.padding};
  margin-bottom: ${metrics.bigPadding};
  border: solid 1px rgba(0, 0, 0, 0.3);
  background-color: ${colors.white};
  flex-direction: row;
  border-radius: ${metrics.radius};
`;

export const Content = styled.View`
  flex: 1;
  padding-left: ${metrics.padding};
  padding-right: ${metrics.padding};
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${metrics.fontSize};
  font-weight: bold;
  color: ${colors.blue};
`;

export const DescriptionText = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: ${metrics.fontSmall};
`;

export const TotalText = styled.Text`
  font-size: ${metrics.fontBig};
  font-weight: bold;
  color: ${colors.blue};
`;
