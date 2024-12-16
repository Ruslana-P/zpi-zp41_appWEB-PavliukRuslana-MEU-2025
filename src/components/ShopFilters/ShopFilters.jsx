import React, { useState } from "react";
import {
  FilterWrapper,
  Section,
  PriceInputWrapper,
  Label,
  Button,
  ButtonsWrapper,
} from "./styled";

const FilterComponent = ({ setShopItems, allItems }) => {
  const [filters, setFilters] = useState({
    priceRange: { from: "", until: "" },
    size: "",
  });

  const handleSizeChange = (e) => {
    setFilters({
      ...filters,
      size: e.target.value,
    });
  };

  const handlePriceChange = (e) => {
    setFilters({
      ...filters,
      priceRange: { ...filters.priceRange, [e.target.name]: e.target.value },
    });
  };

  const handleReset = () => {
    setFilters({
      priceRange: { from: "", until: "" },
      size: "",
    });
    setShopItems(allItems);
  };

  const handleFilter = () => {
    const newItems = allItems.filter((item) => {
      const matchesSize = !filters.size || item.size === filters.size;

      const matchesPrice =
        (!filters.priceRange.from || item.price >= filters.priceRange.from) &&
        (!filters.priceRange.until || item.price <= filters.priceRange.until);

      return matchesSize && matchesPrice;
    });

    setShopItems(newItems);
  };

  return (
    <FilterWrapper>
      <Section>
        <h3>Price range</h3>
        <PriceInputWrapper>
          <span>From</span>
          <input
            type="number"
            name="from"
            value={filters.priceRange.from}
            onChange={handlePriceChange}
          />
          <span>Until</span>
          <input
            type="number"
            name="until"
            value={filters.priceRange.until}
            onChange={handlePriceChange}
          />
        </PriceInputWrapper>
      </Section>

      <Section>
        <h3>Size</h3>
        <Label>
          <span>Big</span>
          <input
            type="radio"
            name="size"
            value="Big"
            checked={filters.size === "Big"}
            onChange={handleSizeChange}
          />
        </Label>
        <Label>
          <span>Medium</span>
          <input
            type="radio"
            name="size"
            value="Medium"
            checked={filters.size === "Medium"}
            onChange={handleSizeChange}
          />
        </Label>
        <Label>
          <span>Small</span>
          <input
            type="radio"
            name="size"
            value="Small"
            checked={filters.size === "Small"}
            onChange={handleSizeChange}
          />
        </Label>
      </Section>
      <ButtonsWrapper>
        <Button onClick={handleFilter}>Filter</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonsWrapper>
    </FilterWrapper>
  );
};

export default FilterComponent;
