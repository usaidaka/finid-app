"use client";

import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import classes from "./home.module.scss";
import TrackingSearch from "../components/ui/TrackingSearch";
import Image from "next/image";
import Icon from "../../assets/images/icon.png";

const page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((res) => {
        const updatedProducts = res.data.map((product: { image: any }) => ({
          ...product,
          image: require(`../../assets/images/${product.image}`),
        }));
        setProducts(updatedProducts);
      })
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

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
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <div className={classes.overlay}>{product.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.promote}>
        <h1>promote</h1>
      </div>
    </div>
  );
};

export default page;
