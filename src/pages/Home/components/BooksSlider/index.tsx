import { Box, Typography } from "@mui/material";
import useFetchData from "../../../../hooks/useFetchData";
import styles from "./styles.module.scss";
import Button from "../../../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../../node_modules/swiper/swiper.css";
// import StoreCard from "./StoreCard";
import { Link } from "react-router-dom";
import BookCard from "../../../../components/Cards/BookCard";

function BooksSlider() {
  const { data } = useFetchData<books>(`/books.json`);
  const { data: authors } = useFetchData<author>("/authors.json");

  const pickAnAuther = (id: number) => {
    return authors?.find((author) => author.id === id) || null;
  };
  const books = data?.slice(0, 10);
  return (
    <Box className={styles.booksSlider}>
      <Box className={styles.booksSlider_title}>
        <Typography fontWeight={"500"} fontSize={"24px"}>
          Browse by Books
        </Typography>
        <Link to={"/shop/books"}>
          <Button
            text={"View All"}
            variant="fill-primary-light"
            fontWeight="500"
            fontSize="16px"
          />
        </Link>
      </Box>
      <Swiper slidesPerView={3.05} spaceBetween={10} style={{ width: "100%" }}>
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard pickAnAuther={pickAnAuther} book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default BooksSlider;
