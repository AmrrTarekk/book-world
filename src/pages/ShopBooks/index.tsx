import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import HelmetContainer from "../../HOC/Helmet";
import useFetchData from "../../hooks/useFetchData";
import BookCard from "../../components/Cards/BookCard";
import SearchBar from "../Home/components/SearchBar";

function ShopBooks() {
  const { data: books, loading: loadingBooks } =
    useFetchData<books>("/books.json");
  const { data: authors } = useFetchData<author>("/authors.json");

  const pickAnAuther = (id: number) => {
    return authors?.find((author) => author.id === id) || null;
  };

  return (
    <HelmetContainer title="Shop Books">
      <Box className={styles.shopBooks}>
        <Box className={styles.shopBooks_headerBox1}>
          <Box className={styles.shopBooks_headerBox1_title}>
            <Typography fontWeight={"500"} fontSize={"24px"}>
              Browse Books
            </Typography>
            <SearchBar />
          </Box>
          <Box className={styles.shopBooks_headerBox1_filters}></Box>
        </Box>
        {loadingBooks ? (
          <Typography>Loading...</Typography>
        ) : (
          <Grid container spacing={2}>
            {books.map((book) => (
              <Grid key={book.id} item xs={4}>
                <BookCard pickAnAuther={pickAnAuther} book={book} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </HelmetContainer>
  );
}

export default ShopBooks;
