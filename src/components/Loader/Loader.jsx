

import React from "react";
import "./Loader.css";

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <>
      <div className="loader-overlay1">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </>
  );
};

export default Loader;


