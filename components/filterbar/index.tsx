import styles from "./filterbar.module.css";
import { Button, Select } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FilterIcon from "@/assets/icons/filter";
import MapIcon from "@/assets/icons/map";
import { useState } from "react";

const Filterbar = () => {
  const [type, setType] = useState(null);
  const [price, setPrice] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState<any>([]);

  const handleSelectFilter = (key: any) => {
    let array = [...selectedFilters];
    let isExits = false;
    array.find((item) => {
      if (item == key) {
        isExits = true;
      } else {
        isExits = false;
      }
    });
    if (isExits) {
      array = array.filter((fil) => fil != key);
    } else {
      array.push(key);
    }
    setSelectedFilters(array);
  };

  return (
    <div className={styles.filternar_container}>
      <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={7}>
        <SwiperSlide className={styles.filter_slide}>
          <Select
            onChange={(value) => setPrice(value)}
            value={price}
            dropdownStyle={{ minWidth: 150 }}
            placeholder="Price"
            options={[]}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Select
            onChange={(value) => setType(value)}
            value={type}
            dropdownStyle={{ minWidth: 150 }}
            placeholder="Type of place"
            options={[]}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Button
            onClick={() => {
              handleSelectFilter(1);
            }}
          >
            Free Cancellation
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Button
            onClick={() => {
              handleSelectFilter(2);
            }}
          >
            Wifi
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Button
            onClick={() => {
              handleSelectFilter(3);
            }}
          >
            Air conditioning
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Button
            onClick={() => {
              handleSelectFilter(4);
            }}
          >
            Washer
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Button
            onClick={() => {
              handleSelectFilter(5);
            }}
          >
            Dryer
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Button
            onClick={() => {
              handleSelectFilter(6);
            }}
          >
            Free Parking
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Button
            onClick={() => {
              handleSelectFilter(7);
            }}
          >
            <FilterIcon />
            Filter
          </Button>
        </SwiperSlide>
        <SwiperSlide className={styles.filter_slide}>
          <Button
            onClick={() => {
              handleSelectFilter(8);
            }}
          >
            <MapIcon />
            Show In Map
          </Button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Filterbar;
