"use client";
import Image from "next/image";
import styles from "./card.module.scss";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductColorPicker from "../ColorPicker/ProductColorPicker";
import AddToCart from "../AddToCartBtn/AddToCart";
import BuyNow from "../BuyNowBtn/BuyNow";
import stylesBtn from "../../Styles/buttons.module.css";
import stylesLink from "../../Styles/page.module.scss";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.card}>
      <Image src={"/headphones.jpg"} alt="product" width={258} height={258} />
      <ProductInfo />
      <ProductColorPicker />
      <div className={stylesBtn.btnSection}>
        <AddToCart />
        <BuyNow />
      </div>
      <div className={stylesLink.linkSection}>
        <Link href={"#"} className={stylesLink.link}>
          Read reviews
        </Link>
      </div>
    </div>
  );
}
