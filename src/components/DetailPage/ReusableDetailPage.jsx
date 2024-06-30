import React, { useState } from "react";
import Heading from "../common/heading/Heading";
import SingleDetailItemCard from "./SingleDetailItemCard";

const ReusableDetailPage = ({ data, headingSubtitle, headingTitle }) => {
  return (
    <>
      <section className="price padding" />
      <Heading subtitle={headingSubtitle} title={headingTitle} />
      <section className="detail-page">
        <div className="container">
          {data.map((item, itemIndex) => (
            <SingleDetailItemCard key={itemIndex} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ReusableDetailPage;
