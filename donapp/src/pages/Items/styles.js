import styled from "styled-components/native";
import { metrics, colors } from "~/src/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.gray,
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  bBlue: {
    color: colors.white,
    backgroundColor: colors.blue
  }
});

export const Container = styled.ScrollView`
  margin-top: ${metrics.margin};
  flex: 1;
  padding: ${metrics.padding};
`;

export const ItemsContainer = styled.ScrollView``;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: ${metrics.padding};
`;

export const ButtonOrder = styled.TouchableOpacity`
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

export const VazioText = styled.Text`
  text-align: center;
  padding: ${metrics.padding};
  margin: ${metrics.margin};
  text-transform: uppercase;
  color: ${colors.gray};
  font-weight: bold;
`;
