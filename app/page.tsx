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
import Map, { Marker } from "react-map-gl";
import MapMarker from "@/assets/icons/map_marker";

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState<any>([8]);

  const [viewport, setViewport] = useState({
    latitude: 51.51064827047832,
    longitude: -2.5614306169482153,
    width: "100%",
    height: "100vh",
    zoom: 11,
    transitionDuration: 2000,
  });

  return (
    <main className={styles.main}>
      {/* filterbar */}
      <Searchbar />
      {/* filterbar */}
      <Filterbar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      {/* rooms list */}
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
        {selectedFilters.includes(8) ? (
          <div className={styles.rooms_map}>
            <Map
              mapboxApiAccessToken="pk.eyJ1IjoibW9oYW1tYWQtdmFhIiwiYSI6ImNsbGk0cTh1YTFlemszam1rOHloZnMwb3kifQ.2nZwAfPBYZxuT_VWloY5Ug"
              {...viewport}
              onViewportChange={(viewport: any) => setViewport(viewport)}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              <Marker
                longitude={-2.5614306169482153}
                latitude={51.51064827047832}
              >
                <MapMarker />
              </Marker>
              <Marker
                longitude={-2.570094551240346}
                latitude={51.51103762264614}
              >
                <MapMarker />
              </Marker>
              <Marker
                longitude={-2.5761764657250463}
                latitude={51.51645474709417}
              >
                <MapMarker />
              </Marker>
              <Marker longitude={-2.605729161500232} latitude={51.530319665521}>
                <MapMarker />
              </Marker>
            </Map>
          </div>
        ) : null}
      </div>
      {/* banner */}
      <div className={styles.banner}>
        <div>1% OF THE INDUSTRY</div>
        <h4>
          Welcome to your room sharing platform that which You can find places
          and stay with hotels and home-stays ranked by travellers. What fun
          could we have more than having roommate with similar interest.
        </h4>
        <Button>Get started</Button>
      </div>
    </main>
  );
};
export default Home;
