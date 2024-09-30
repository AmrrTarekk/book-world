import { Box, Divider, Pagination, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import SearchBar from "../Home/components/SearchBar";
import HelmetContainer from "../../HOC/Helmet";
import Button from "../../components/Button";
import { Fragment, useState } from "react";

import HeaderBox from "./HeaderBox";
import useFetchData from "../../hooks/useFetchData";
import AddNewBookPopup from "./AddNewBookPopup";
import BookRow from "./BookRow";
function Books() {
  const [open, setOpen] = useState(false);
  const handlePopup = () => setOpen(!open);
  const {
    data: books,
    setData: setBooks,
    loading,
  } = useFetchData<books>(`/books.json`);

  return (
    <>
      {open && (
        <AddNewBookPopup
          open={open}
          handlePopup={handlePopup}
          setBooks={setBooks}
        />
      )}

      <HelmetContainer title={"Books"}>
        <Box className={styles.books}>
          <Box className={styles.books_headerBox}>
            <Box className={styles.books_headerBox_box1}>
              <Typography fontSize={"24px"} fontWeight={"500"}>
                Books List
              </Typography>
              <SearchBar />
            </Box>
            <Button
              onClick={handlePopup}
              text={"Add New Book"}
              variant="fill-primary-light"
              fontWeight="500"
              fontSize="16px"
            />
          </Box>
          {loading ? (
            "loading ..."
          ) : (
            <>
              <Box className={styles.books_bookContainer}>
                <HeaderBox />
                <Divider />
                {books.map((book, index) => (
                  <Fragment key={book.id}>
                    <BookRow book={book} setBooks={setBooks} />
                    {index !== books.length - 1 && <Divider />}
                  </Fragment>
                ))}
              </Box>
              <Box display={"flex"} justifyContent={"flex-end"} width={"100%"}>
                <Pagination
                  count={books.length}
                  showFirstButton
                  showLastButton
                />
              </Box>
            </>
          )}
        </Box>
      </HelmetContainer>
    </>
  );
}

export default Books;
