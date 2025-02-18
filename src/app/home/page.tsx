import React from "react";
import classes from "./home.module.scss";
import TrackingSearch from "../components/ui/TrackingSearch/TrackingSearch";
import Image from "next/image";
import Icon from "../../assets/icon.png";
import fist1 from "../../assets/fish1.jpg";
import fist2 from "../../assets/fish2.jpg";
import fist3 from "../../assets/fish3.jpg";
import fist4 from "../../assets/fish4.jpg";

const products = [
  { name: "Freshwater Fish", image: fist1, customClass: "fish-card" },
  { name: "Freshwater Plants", image: fist2, customClass: "plant-card" },
  { name: "Marine Fish", image: fist3, customClass: "marine-card" },
  { name: "Corals", image: fist4, customClass: "coral-card" },
];

const page = () => {
  return (
    <div className={classes.home}>
      <div className={classes.hero}>
        <TrackingSearch />
      </div>
      <div className={classes.banner}>
        <Image
          src={Icon}
          alt="Picture of the author"
          className={classes.image}
        />
      </div>
      <div className={classes.service}>
        <h2 className={classes.title}>We can carry the items you need</h2>
        <div className={classes.grid}>
          {products.map((product, index) => (
            <div
              key={index}
              className={`${classes.card} ${classes[product.customClass]}`}
            >
              <Image src={product.image} alt={product.name} fill />
              <div className={classes.overlay}>{product.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>quotes</h1>
      </div>
    </div>
  );
};

export default page;
