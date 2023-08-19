"use client";
import "swiper/css";
import "swiper/css/pagination";
import Filterbar from "@/components/filterbar";
import styles from "./page.module.css";
import Searchbar from "@/components/searchbar";

const Home = () => {
  return (
    <main className={styles.main}>
      {/* filterbar */}
      <Searchbar />
      {/* filterbar */}
      <Filterbar />
    </main>
  );
};
export default Home;
