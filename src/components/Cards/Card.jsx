import React from "react";
import "./Card.css";

const Card = ({data, handler}) => {



  return (
    <div>
      <div className="product-card-wrapper">
        <div className="p-img">
          <img
            src={data.img}
            alt=""
          />
        </div>
        <div className="p-info">
          <div className="info-wrap">
            <h3>{data.name}</h3>
            <p>
              Price : <span>${data.price}</span>
            </p>
            <p>
              Shipping Charge : <span>${data.shipping}</span>
            </p>
          </div>
          <div className="p-btn" onClick={() => handler(data.id)}>
            <span>X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
