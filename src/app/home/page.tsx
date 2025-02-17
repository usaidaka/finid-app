import React from "react";
import classes from "./home.module.scss";
import TrackingSearch from "../components/ui/TrackingSearch/TrackingSearch";

const page = () => {
  return (
    <div className={classes.home}>
      <div className={classes.hero}>
        <h1>hero</h1>
        <TrackingSearch />
      </div>
      <div>
        <h1>banner identity</h1>
      </div>
      <div>
        <h1>item list</h1>
      </div>
      <div>
        <h1>quotes</h1>
      </div>
      <div>
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default page;
