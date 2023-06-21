import React from "react";
import Button from "./Button";

const FeatureItem = (props) => {
  return (
    // single feature item layout component
    <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 my-10 flex flex-col">
      <img
        src={props.imageAddress}
        alt={props.altText}
        className="mb-5 w-16 h-14"
      />
      <h1 className="font-semibold text-lg md:pr-8 lg:pr-10 xl:pr-24 mb-2">
        {props.featureHeading}
      </h1>
      <p className="pr-5 md:pr-10 flex-1">{props.featureDescription}</p>
      <Button />
    </div>
  );
};

export default FeatureItem;
