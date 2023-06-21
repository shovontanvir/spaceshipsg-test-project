import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = () => {
  return (
    // learn more button component for individual feature item
    <button className="flex items-center cursor-pointer mt-6">
      <span className="text-[#32c5ff] mr-2">Learn More</span>
      <FontAwesomeIcon icon={faArrowRight} style={{ color: "32C5FF" }} />
    </button>
  );
};

export default Button;
