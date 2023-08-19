"use client";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import Filterbar from "@/components/filterbar";
import styles from "./page.module.css";
import Searchbar from "@/components/searchbar";
import { ROOMS } from "@/data/rooms";
import { Fragment } from "react";
import RoomCard from "@/components/room_card";
import { Button } from "antd";

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState<any>([8]);

  return (
    <main className={styles.main}>
      {/* filterbar */}
      <Searchbar />
      {/* filterbar */}
      <Filterbar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className={styles.rooms_result}>
        <div className={styles.rooms_result_container}>
          <div className={styles.rooms_result_list}>
            {ROOMS.map((room, index) => (
              <Fragment key={index}>
                <RoomCard data={room} />
              </Fragment>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button style={{ width: 120 }} id="btn_outline_light">
              Load More
            </Button>
          </div>
        </div>
        <div className={styles.rooms_map}>Map</div>
      </div>
    </main>
  );
};
export default Home;
