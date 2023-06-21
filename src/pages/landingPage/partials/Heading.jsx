import { useQuery } from "@tanstack/react-query";
import { getApiData } from "../../../Services/apiFunctions";

const Heading = () => {
  // query function to initiate data fetching
  const getHeadingInfo = () => {
    return getApiData("introData");
  };

  // usequery hook to fetch data from the api
  const { data, isLoading, isError, error } = useQuery(
    ["heading-content"],
    getHeadingInfo
  );

  // display the loading message while loading
  if (isLoading) {
    return "Loading data... Please wait...";
  }

  // display the error message if any errors ocurr
  if (isError) {
    return error.message;
  }
  // dynamic heading data from api
  const headingInfo = data[0];

  return (
    <div className="text-center px-44">
      <h1 className="text-4xl font-semibold leading-snug mb-6">
        {headingInfo.headingText}
      </h1>
      <p className="text-lg text-slate-600">
        {headingInfo.descriptionParagraph}
      </p>
    </div>
  );
};

export default Heading;
