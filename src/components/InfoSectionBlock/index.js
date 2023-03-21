import React from "react";
import InfoSection from "../InfoSection/index";
import { Data } from "./Data";

const InfoSectionBlock = () => {
  return (
    <>
      {Data.map((object) => (
        <InfoSection {...object} key={object.id} />
      ))}
    </>
  );
};

export default InfoSectionBlock;
