import Image from "next/image";
import styles from "./room_card.module.css";
import StarIcon from "@/assets/icons/star";

const RoomCard = ({ data }: any) => {
  return (
    <div className={styles.room_card}>
      {/* image */}
      <div>
        <Image src={data?.image} alt="room" />
      </div>
      {/* details */}
      <div>
        {/* badges */}
        {/* {data?.badges ? (
          <div className={styles.room_card_badges}>
            {data?.badges?.map((badge: any, index: number) => (
              <div
                key={index}
                style={{ background: badge?.background, color: badge?.color }}
              >
                {badge?.title}
              </div>
            ))}
          </div>
        ) : null} */}
        {/* title and score */}
        <div className={styles.room_card_title}>
          <h4>{data?.title}</h4>
          <div>
            <StarIcon />
            <span>{data?.score}</span>
          </div>
        </div>
        {/* datetime */}
        <div className={styles.room_card_datetime}>
          {data?.datetime_from} - {data?.datetime_to}
        </div>
        {/* description */}
        <div className={styles.room_card_description}>{data?.description}</div>
        {/* price */}
        <div>
          {data?.currency_symbol} {data?.price} / {data?.price_per_unit}
        </div>
      </div>
    </div>
  );
};
export default RoomCard;
