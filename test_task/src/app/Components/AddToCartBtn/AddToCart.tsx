import styles from "../../Styles/buttons.module.css";

export default function AddToCart() {
  return (
    <button className={`${styles.btn} ${styles.addCartBtn}`}>
      Add to cart
    </button>
  );
}
