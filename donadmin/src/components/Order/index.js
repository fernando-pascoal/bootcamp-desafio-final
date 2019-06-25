import React from "react";
import PropTypes from "prop-types";
import { OrderContainer } from "./styles";

const Order = props => {
  const { order } = props;
  return (
    <OrderContainer>
      <div className="order-title">
        <h2>
          Pedido #{order.id} - {order.user.username}
        </h2>
        <small>{order.moment}</small>
        <p>R$ {order.total.toFixed(2)}</p>
      </div>
      <div className="order-items">
        {order.items.map(item => (
          <div key={item.id} className="item">
            <img src={item.size.url} alt={`Uma produto do cardapio`} />
            <div className="item-info">
              <h3>
                {item.count}x - {item.size.type.name}
              </h3>
              <p>Tamanho: {item.size.name}</p>
              <p>Preço: R$ {item.size.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-remarks">
        <p>
          <strong>Observações: </strong>
          {order.remarks}
        </p>
      </div>
    </OrderContainer>
  );
};

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.shape({
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          type: PropTypes.shape({
            name: PropTypes.string.isRequired
          })
        })
      })
    ),
    total: PropTypes.number.isRequired,
    updated_at: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Order;
