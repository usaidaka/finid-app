"use client";

import { useState } from "react";
import { Search, Camera } from "lucide-react";
import styles from "./TrackingSearch.module.scss";

export default function TrackingSearch() {
  const [productId, setProductId] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.trackingBox}>
        <h2 className={styles.title}>Tracking</h2>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="ID Product"
            className={styles.input}
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <button className={styles.searchButton}>
            <Search size={20} />
          </button>
          <button className={styles.cameraButton}>
            <Camera size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
