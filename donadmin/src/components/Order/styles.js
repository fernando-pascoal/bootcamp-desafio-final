import styled from "styled-components";
import { colors, metrics } from "../../styles";

export const OrderContainer = styled.div`
  color: ${colors.blue};
  margin-bottom: ${metrics.margin};
  padding: ${metrics.padding};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  .order-title {
    padding: ${metrics.padding};
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    h2 {
      font-size: 1.2em;
    }
    small {
      font-size: 0.9em;
      color: ${colors.gray};
    }
    p {
      font-size: 1.3em;
      font-weight: bold !important;
    }
  }
  .order-items {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: ${metrics.padding};
    padding-bottom: ${metrics.padding};
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    .item {
      display: flex;
      flex: 1;
      min-width: 250px;
      margin: ${metrics.margin};
      margin-left: 0;
      justify-content: space-between;
      flex-direction: row;
      padding: ${metrics.padding};
      border: solid 1px rgba(0, 0, 0, 0.1);
      border-radius: ${metrics.radius};

      img {
        width: 70px;
        height: 70px;
      }
      .item-info {
        margin-left: ${metrics.margin};
        h3 {
          font-size: 1em;
        }
        p {
          font-size: 0.8em;
        }
      }
    }
  }
  .order-remarks {
    padding: ${metrics.padding};
    color: ${colors.blue};
  }
`;
