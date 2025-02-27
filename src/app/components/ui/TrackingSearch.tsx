"use client";

import { useState } from "react";
import { Search, Camera } from "lucide-react";
import classes from "./TrackingSearch.module.scss";

export default function TrackingSearch() {
  const [productId, setProductId] = useState("");

  return (
    <div className={classes.container}>
      <div className={classes.trackingBox}>
        <h2 className={classes.title}>Tracking</h2>
        <div className={classes.inputWrapper}>
          <input
            type="text"
            placeholder="ID Product"
            className={classes.input}
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <button className={classes.searchButton}>
            <Search size={20} />
          </button>
          <button className={classes.cameraButton}>
            <Camera size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
