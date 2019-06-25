import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";

export const Container = styled.TouchableOpacity.attrs({})`
  padding: ${metrics.padding};
  margin-bottom: ${metrics.bigPadding};
  background-color: ${colors.white};
  flex-direction: row;
  border-radius: ${metrics.radius};
  border: solid 1px ${colors.gray};
`;

export const Content = styled.View`
  flex: 1;
  padding-left: ${metrics.padding};
  padding-right: ${metrics.padding};
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${metrics.fontSize};
  color: ${colors.blue};
`;

export const DescriptionText = styled.Text.attrs({
  numberOfLines: 3
})``;

export const Image = styled.Image`
  width: 100;
  height: 100;
  border-radius: ${metrics.radius};
`;
