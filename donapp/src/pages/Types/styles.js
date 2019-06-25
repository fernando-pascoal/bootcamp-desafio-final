import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
})`
  margin-bottom: ${metrics.margin};
  margin-top: ${metrics.margin};
  padding: ${metrics.bigPadding};
`;
