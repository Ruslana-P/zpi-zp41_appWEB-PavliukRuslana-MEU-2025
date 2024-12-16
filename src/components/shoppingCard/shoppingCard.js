import React from "react";
import { Bucket, Badge } from "./styled";
import ShoppingCard from "../../images/ShoppingCard";

const ShoppingCart = () => {
  return (
    <Bucket data-testid="jfdhkfhdsk">
      <ShoppingCard />
      <Badge>6</Badge>
      {/* // later add here logic for counting added products  */}
    </Bucket>
  );
};

export default ShoppingCart;
