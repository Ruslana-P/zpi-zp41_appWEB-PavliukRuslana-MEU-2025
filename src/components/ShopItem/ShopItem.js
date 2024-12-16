import React from "react";
import { Card, ImageWrapper, ItemDetails, IconWrapper } from "./styled";
import ShoppingCard from "../../images/ShoppingCard";

const ShopItem = ({ url, name, price, category, place }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={url} alt={name} />
      </ImageWrapper>
      <ItemDetails>
        <div>
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
        <IconWrapper>
          <ShoppingCard color={"#46A358"} />
        </IconWrapper>
      </ItemDetails>
    </Card>
  );
};

export default ShopItem;
