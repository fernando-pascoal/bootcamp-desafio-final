import styled from "styled-components";
import { colors, metrics } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.9)
  );
`;

export const Image = styled.img`
  position: fixed;
  top: 0;
  z-index: -1 !important;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  align-self: center;
  margin: ${metrics.margin};
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  color: ${colors.black};
  padding: ${metrics.padding};
  margin-bottom: ${metrics.margin};
  border-radius: ${metrics.radius};
  border: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Button = styled.button`
  background-color: ${props => colors[`${props.bg}`]};
  padding: ${metrics.padding};
  margin-bottom: ${metrics.margin};
  border: none;
  border-radius: ${metrics.radius};
  color: ${colors.white};
`;
