import styled from "styled-components";
import { colors, metrics } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${metrics.bigPadding};
  background-color: ${colors.blue};
`;

export const Title = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  p {
    padding: ${metrics.padding};
    font-size: 1.3em;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div.username {
    font-weight: 100;
    font-size: 1.2em;
    color: ${colors.white};
    border-right: solid 1px ${colors.whiteTransparent};
    padding-right: ${metrics.padding};
    margin-right: ${metrics.padding};
    p {
      font-weight: 100;
      color: ${colors.whiteTransparent};
      cursor: pointer;
      font-size: 0.8em;
    }
  }
  div.alert {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${colors.red};
    i {
      margin-left: -2px;
      color: ${colors.white};
    }
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 800px;
  flex-direction: column;
  align-self: center;
  padding: ${metrics.padding};
  margin-top: ${metrics.margin};
  i {
    width: 15px;
    align-self: center;
  }
  h1 {
    font-size: 1.2em;
    color: ${colors.black};
    font-weight: 900;
    margin-bottom: ${metrics.margin};
  }
`;

export const MoreOrders = styled.button`
  height: 40px;
  text-align: center;
  color: ${colors.blue};
  text-transform: uppercase;
  background-color: ${colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 0px 0px ${metrics.radius} ${metrics.radius};
`;
