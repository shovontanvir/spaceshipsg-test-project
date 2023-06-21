import React from "react";
import { getApiData } from "../../../Services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import FeatureItem from "./FeatureItem";

const Features = () => {
  // query function to fetch feature items
  const getFeatureItems = () => {
    return getApiData("featureItems");
  };

  //   usequery hook to fetch data, loading state and error state with error message
  const { isLoading, isError, error, data } = useQuery(
    ["feature-list"],
    getFeatureItems
  );
  // display the loading message while loading
  if (isLoading) {
    return "Loading data... Please wait...";
  }
  // display the error message if any errors ocurr
  if (isError) {
    return error.message;
  }

  // dynamic feature data from api
  const features = data;

  return (
    <div className="flex flex-wrap w-3/4 md:w-5/6 my-10">
      {/* initialize map method to render individual featureItem component with relevant content */}
      {features.map((feature, index) => (
        <FeatureItem
          key={`feature-${index}`}
          imageAddress={feature.featureImage}
          altText={feature.featureHeading}
          featureHeading={feature.featureHeading}
          featureDescription={feature.featureDescription}
        />
      ))}
    </div>
  );
};

export default Features;
