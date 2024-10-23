import React from "react";
import Header from "../../components/header/header";
import { PageCnt } from "../main/styled";

const ShopPage = () => {
  return (
    <PageCnt>
      <Header />
      <h1>ShopPage сторінка</h1>
      <p>Це ваша головна сторінка.</p>
    </PageCnt>
  );
};

export default ShopPage;
