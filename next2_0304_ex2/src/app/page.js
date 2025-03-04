"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { use, useState } from "react";

export default function Home() {
  let title = "제목1";
  //앞의 sub는 변수, setSub는 setter
  const [sub, setSub] = useState("부 제목1");
  let title2 = "sub_title";
  return (
    <div className={styles.page}>
        <h2 className="title">{title}</h2>
        <h2 className={title2}>{sub}</h2>
    </div>
  );
}
