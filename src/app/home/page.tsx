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
      <div className={classes.service}>
        <div className={classes.title}>
          <h1>We can carry the items you need</h1>
        </div>
        <div className={classes.wrapper}>
        <div className={classes.top}>
          <div className={classes.first}>
            <h1>1</h1>
          </div>
          <div className={classes.second}>
            <h1>2</h1>
          </div>
        </div>
        <div className={classes.bellow}>
          <div className={classes.third}>
            <h1>3</h1>
          </div>
          <div className={classes.fourth}>
            <h1>4</h1>
          </div>
        </div>
        </div>
      </div>
      <div>
        <h1>quotes</h1>
      </div>
    </div>
  );
};

export default page;
