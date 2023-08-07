import styles from "./productInfo.module.scss";

export default function ProductInfo() {
  return (
    <div className={styles.productInfo}>
      <p className={styles.price}>$100</p>
      <h1 className={styles.productName}>Zebronics head phone</h1>
      <p className={styles.description}>
        A portable headphone with a battery life of 20 hours and IP67 rating.
        Comes with a 3 years warranty.
      </p>
    </div>
  );
}
