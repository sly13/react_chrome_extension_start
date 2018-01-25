import React from "react";

const Preloader = () => {
  return (
    <div className="row center-align">
      <div className="preloader-wrapper small active center-align">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
