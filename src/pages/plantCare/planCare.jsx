import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import CardComponent from "../../components/flowerCard/flowerCard";
import { Wrapper, ContentWrapper } from "./styled";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import useScreenSize, { DEVICE } from "../../utils/useScreenSizeContext";

const PlantCarePage = () => {
  const [shopItems, setShopItems] = useState([]);

  const screen = useScreenSize();

  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "shops_items"));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setShopItems(items);
      } catch (error) {
        console.error("Error fetching shop items:", error);
      }
    };

    fetchShopItems();
  }, []);

  if (screen === DEVICE.MOBILE) {
    return (
      <Wrapper>
        <Header />
        <ContentWrapper data-testid="kjllj">
          <div className="block">
            {shopItems.slice(0, 7).map((item) => {
              return <CardComponent title={item.name} imgUrl={item.url} />;
            })}
          </div>

          <div className="block">
            {shopItems.slice(8, 14).map((item) => {
              return <CardComponent title={item.name} imgUrl={item.url} />;
            })}
          </div>
        </ContentWrapper>
        <Footer isMainPage={false} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper data-testid="kjllj">
        <div className="block">
          {shopItems.slice(0, 3).map((item) => {
            return <CardComponent title={item.name} imgUrl={item.url} />;
          })}
        </div>
        <div className="block">
          {shopItems.slice(4, 7).map((item) => {
            return <CardComponent title={item.name} imgUrl={item.url} />;
          })}
        </div>
        <div className="block">
          {shopItems.slice(8, 11).map((item) => {
            return <CardComponent title={item.name} imgUrl={item.url} />;
          })}
        </div>
        <div className="block">
          {shopItems.slice(11, 14).map((item) => {
            return <CardComponent title={item.name} imgUrl={item.url} />;
          })}
        </div>
      </ContentWrapper>
      <Footer isMainPage={false} />
    </Wrapper>
  );
};

export default PlantCarePage;
