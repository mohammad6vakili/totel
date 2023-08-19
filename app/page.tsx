"use client";
import "swiper/css";
import "swiper/css/pagination";
import Filterbar from "@/components/filterbar";
import styles from "./page.module.css";
import Searchbar from "@/components/searchbar";
import { ROOMS } from "@/data/rooms";
import { Fragment } from "react";

const Home = () => {
  return (
    <main className={styles.main}>
      {/* filterbar */}
      <Searchbar />
      {/* filterbar */}
      <Filterbar />
      <div className={styles.rooms_result_container}>
        <div style={{ display: "none" }}>Map</div>
        <div className={styles.rooms_result_list}>
          {ROOMS.map((room, index) => (
            <Fragment key={index}>{index}</Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Home;
