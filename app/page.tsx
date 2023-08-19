"use client";
import styles from "./page.module.css";
import Searchbar from "@/components/searchbar";

const Home = () => {
  return (
    <main className={styles.main}>
      {/* filterbar */}
      <Searchbar />
    </main>
  );
};
export default Home;
