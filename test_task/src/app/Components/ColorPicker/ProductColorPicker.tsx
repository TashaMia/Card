import { useState } from "react";
import styles from "./colorPicker.module.scss";

export default function ProductColorPicker() {
  const colors = ["red", "blue", "black"];
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className={styles.colorPicker}>
      <p className={styles.description}>Choose your colour</p>
      <div className={styles.ellipsSection}>
        {colors.map((i) => {
          return (
            <button
              className={`${styles.ellips} ${styles[i]} ${
                selectedColor == i ? styles.selected : ""
              }`}
              onClick={() => setSelectedColor(i)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
