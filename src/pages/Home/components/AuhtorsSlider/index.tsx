import { Box, Typography } from "@mui/material";
import useFetchData from "../../../../hooks/useFetchData";
import styles from "./styles.module.scss";
import Button from "../../../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../../node_modules/swiper/swiper.css";
// import StoreCard from "./StoreCard";
import { Link } from "react-router-dom";
import AuhtorCard from "../../../../components/Cards/AuthorCard";

function AuthorsSlides() {
  const { data } = useFetchData<author>(`/authors.json`);
  const authors = data?.slice(0, 10);
  return (
    <Box className={styles.authorsSlider}>
      <Box className={styles.authorsSlider_title}>
        <Typography fontWeight={"500"} fontSize={"24px"}>
          Browse by Authors
        </Typography>
        <Link to={"/authors"}>
          <Button
            text={"View All"}
            variant="fill-primary-light"
            fontWeight="500"
            fontSize="16px"
          />
        </Link>
      </Box>
      <Swiper slidesPerView={3.05} spaceBetween={10} style={{ width: "100%" }}>
        {authors.map((author) => (
          <SwiperSlide key={author.id}>
            <AuhtorCard author={author} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default AuthorsSlides;
