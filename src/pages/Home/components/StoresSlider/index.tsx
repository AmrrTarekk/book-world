import { Box, Typography } from "@mui/material";
import useFetchData from "../../../../hooks/useFetchData";
import styles from "./styles.module.scss";
import Button from "../../../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../../node_modules/swiper/swiper.css";
import { Link } from "react-router-dom";
import StoreCard from "../../../../components/Cards/StoreCard";

// import "swiper/css";
function StoresSlider() {
  const { data } = useFetchData<stores>(`/stores.json`);
  const stores = data?.slice(0, 10);

  return (
    <Box className={styles.storesSlider}>
      <Box className={styles.storesSlider_title}>
        <Typography fontWeight={"500"} fontSize={"24px"}>
          Browse by Stores
        </Typography>
        <Link to={"/stores"}>
          <Button
            text={"View All"}
            variant="fill-primary-light"
            fontWeight="500"
            fontSize="16px"
          />
        </Link>
      </Box>
      <Swiper slidesPerView={3.05} spaceBetween={10} style={{ width: "100%" }}>
        {stores.map((store) => (
          <SwiperSlide key={store.id}>
            <StoreCard store={store} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default StoresSlider;
