"use client";
import styles from "./page.module.css";
import Filterbar from "@/components/filterbar";

const Home = () => {
  return (
    <main className={styles.main}>
      {/* filterbar */}
      <Filterbar />
    </main>
  );
};
export default Home;
