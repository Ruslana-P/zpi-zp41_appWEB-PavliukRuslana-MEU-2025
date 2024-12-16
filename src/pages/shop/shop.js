import React, { useEffect, useState, useRef } from "react";
import FilterComponent from "../../components/ShopFilters/ShopFilters";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import ShopItem from "../../components/ShopItem/ShopItem";
import { ShopItemsWrapper } from "./styled";
import { Wrapper, StyledMobileWrapper } from "./styled";
import Header from "../../components/header/header";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import useScreenSize, { DEVICE } from "../../utils/useScreenSizeContext";

const shownItems = {
  1: [0, 6],
  2: [6, 12],
};

const ShopPage = () => {
  const [shopItems, setShopItems] = useState([]);
  const [bookItems, setBookItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const screen = useScreenSize();

  const originalShopItemsRef = useRef([]);

  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "shops_items"));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        originalShopItemsRef.current = items;
        setShopItems(items);
      } catch (error) {
        console.error("Error fetching shop items:", error);
      }
    };

    fetchShopItems();
  }, []);

  useEffect(() => {
    const fetchBookItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setBookItems(items);
      } catch (error) {
        console.error("Error fetching shop items:", error);
      }
    };

    fetchBookItems();
  }, []);

  if (screen === DEVICE.MOBILE) {
    return (
      <Wrapper>
        <Header />
        <StyledMobileWrapper>
          <ShopItemsWrapper>
            {shopItems &&
              shopItems
                .slice(shownItems[currentPage][0], shownItems[currentPage][1])
                .map((item) => (
                  <ShopItem
                    key={item.id}
                    price={item.price}
                    category={item.category}
                    name={item.name}
                    place={item.place}
                    url={item.url}
                  />
                ))}
          </ShopItemsWrapper>
          {shopItems.length > 6 && (
            <Pagination
              totalItems={shopItems.length}
              itemsPerPage={6}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </StyledMobileWrapper>
        <Footer isMainPage={false} />=
      </Wrapper>
    );
  }

  if (screen === DEVICE.TABLET) {
    return (
      <Wrapper>
        <table>
          <tr>
            <td colspan="3" class="block-1">
              <Header />
            </td>
          </tr>
          <tr>
            <td class="block-2">
              <FilterComponent
                setShopItems={setShopItems}
                allItems={originalShopItemsRef.current}
              />
            </td>
            <td class="block-3-4">
              <table class="inner-table">
                <tr>
                  <td class="block-3">
                    <ShopItemsWrapper>
                      {shopItems &&
                        shopItems
                          .slice(
                            shownItems[currentPage][0],
                            shownItems[currentPage][1]
                          )
                          .map((item) => (
                            <ShopItem
                              key={item.id}
                              price={item.price}
                              category={item.category}
                              name={item.name}
                              place={item.place}
                              url={item.url}
                            />
                          ))}
                    </ShopItemsWrapper>
                    {shopItems.length > 6 && (
                      <Pagination
                        totalItems={shopItems.length}
                        itemsPerPage={6}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                      />
                    )}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="block-5">
              <Footer isMainPage={false} />
            </td>
          </tr>
        </table>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <table>
        <tr>
          <td colspan="3" class="block-1">
            <Header />
          </td>
        </tr>
        <tr>
          <td class="block-2">
            <FilterComponent
              setShopItems={setShopItems}
              allItems={originalShopItemsRef.current}
            />
          </td>
          <td class="block-3-4">
            <table class="inner-table">
              <tr>
                <td class="block-3">
                  <ShopItemsWrapper>
                    {shopItems &&
                      shopItems
                        .slice(
                          shownItems[currentPage][0],
                          shownItems[currentPage][1]
                        )
                        .map((item) => (
                          <ShopItem
                            key={item.id}
                            price={item.price}
                            category={item.category}
                            name={item.name}
                            place={item.place}
                            url={item.url}
                          />
                        ))}
                  </ShopItemsWrapper>
                  {shopItems.length > 6 && (
                    <Pagination
                      totalItems={shopItems.length}
                      itemsPerPage={6}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                </td>
                <td class="block-4">
                  <ShopItemsWrapper>
                    {bookItems &&
                      bookItems.map((item) => (
                        <ShopItem
                          key={item.id}
                          price={item.price}
                          category={item.category}
                          name={item.name}
                          place={item.place}
                          url={item.url}
                        />
                      ))}
                  </ShopItemsWrapper>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="3" class="block-5">
            <Footer isMainPage={false} />
          </td>
        </tr>
      </table>
    </Wrapper>
  );
};

export default ShopPage;
