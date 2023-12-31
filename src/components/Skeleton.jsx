import React from "react";

const Skeleton = (props) => {
  return (
    // basic skeleton/layout component
    <div className="px-16 md:px-28 lg:px-36 py-20 flex flex-col items-center justify-center">
      {props.children}
    </div>
  );
};

export default Skeleton;
