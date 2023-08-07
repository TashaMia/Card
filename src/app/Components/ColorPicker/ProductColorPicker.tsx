import { useState } from "react";
import styles from "./colorPicker.module.scss";

export default function ProductColorPicker() {
  const colors = ["red", "blue", "black"];
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className={styles.colorPicker}>
      <p className={styles.description}>Choose your colour</p>
      <div className={styles.ellipsSection}>
        {colors.map((color, i) => (
          <button
            key={`${color + i}`}
            className={`${styles.ellips} ${styles[color]} ${
              selectedColor == color ? styles.selected : ""
            }`}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>
    </div>
  );
}
