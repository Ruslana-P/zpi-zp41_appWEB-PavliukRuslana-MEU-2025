import React from "react";
import { plantsData } from "../utils/constants";
import { SectionWrapper } from "./styled";
import useScreenSize, { DEVICE } from "../../utils/useScreenSizeContext";

const PlantTable = () => {
  const screen = useScreenSize();

  return (
    <>
      {(screen === DEVICE.TABLET || screen === DEVICE.DESKTOP) && (
        <SectionWrapper>
          <h2 className="table-title">
            FIND DETAILED INFORMATION ON OUR MOST POPULAR INDOOR PLANTS HERE
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th>PLANT NAME</th>
                <th>PLANT TYPE</th>
                <th>LIGHT CONDITIONS</th>
                <th>WATERING</th>
                <th>BLOOMING PERIOD</th>
                <th>SPECIAL FEATURES</th>
              </tr>
            </thead>
            <tbody>
              {plantsData.map((plant, index) => (
                <tr key={index}>
                  <td>{plant.name}</td>
                  <td>{plant.type}</td>
                  <td>{plant.light}</td>
                  <td>{plant.watering}</td>
                  <td>{plant.blooming}</td>
                  <td>{plant.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionWrapper>
      )}
    </>
  );
};

export default PlantTable;
