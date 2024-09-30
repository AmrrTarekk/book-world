import { Box, Divider, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import SearchBar from "../Home/components/SearchBar";
import HelmetContainer from "../../HOC/Helmet";
import Button from "../../components/Button";
import { Fragment, useState } from "react";

import HeaderBox from "./HeaderBox";
import AddToInventoryPopup from "./AddToInventoryPopup";
import StoreInventoryRow from "./StoreInventoryRow";
import AuthorsGrouped from "./AuthorsGrouped";
function StoresInventory() {
  const [open, setOpen] = useState(false);
  const handlePopup = () => setOpen(!open);
  const [storeInventory, setStoreInventory] = useState({
    books: [] as bookInventory[],
    authors: [],
  });
  const [viewTab, setViewTab] = useState("books");
  return (
    <>
      {open && (
        <AddToInventoryPopup
          open={open}
          handlePopup={handlePopup}
          setStoreInventory={setStoreInventory}
        />
      )}

      <HelmetContainer title={"Store Inventory"}>
        <Box className={styles.storeInventory}>
          <Box className={styles.storeInventory_headerBox}>
            <Box className={styles.storeInventory_headerBox_box1}>
              <Typography
                fontSize={"20px"}
                fontWeight={"500"}
                sx={{
                  cursor: "pointer",
                  borderBottom:
                    viewTab === "books"
                      ? "2px solid #E9692C !important"
                      : "transparent",
                  color: viewTab === "books" ? "" : "#ADA7A7",
                }}
                onClick={() => setViewTab("books")}
              >
                Books
              </Typography>
              <Typography
                fontSize={"20px"}
                fontWeight={"500"}
                sx={{
                  cursor: "pointer",
                  borderBottom:
                    viewTab !== "books"
                      ? "2px solid #E9692C !important"
                      : "transparent",
                  color: viewTab !== "books" ? "" : "#ADA7A7",
                }}
                onClick={() => setViewTab("authors")}
              >
                Authors
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box className={styles.storeInventory_headerBox_box2}>
                <Typography fontSize={"24px"} fontWeight={"500"}>
                  {viewTab === "books" ? "Books List" : "Authors "}
                </Typography>
                <SearchBar />
              </Box>
              <Button
                onClick={handlePopup}
                text={"Add to Inventory"}
                variant="fill-primary-light"
                fontWeight="500"
                fontSize="16px"
              />
            </Box>
          </Box>
          <Box className={styles.storeInventory_storeInventoryContainer}>
            <HeaderBox />
            <Divider />
            {viewTab === "books" ? (
              storeInventory.books.length ? (
                storeInventory.books.map((book, index) => (
                  <Fragment key={book.id}>
                    <StoreInventoryRow
                      book={book}
                      setStoreInventory={setStoreInventory}
                    />
                    {index !== storeInventory.books.length - 1 && <Divider />}
                  </Fragment>
                ))
              ) : (
                <Typography marginY={"20px"} textAlign={"center"}>
                  No books found
                </Typography>
              )
            ) : storeInventory.books.length ? (
              storeInventory.books.map((book, index) => (
                <Fragment key={book.id}>
                  <AuthorsGrouped
                    book={book}
                    setStoreInventory={setStoreInventory}
                  />
                  {index !== storeInventory.books.length - 1 && <Divider />}
                </Fragment>
              ))
            ) : (
              <Typography marginY={"20px"} textAlign={"center"}>
                No books found
              </Typography>
            )}
          </Box>
        </Box>
      </HelmetContainer>
    </>
  );
}

export default StoresInventory;
