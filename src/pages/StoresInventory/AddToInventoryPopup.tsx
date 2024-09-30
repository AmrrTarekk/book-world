import styles from "./styles.module.scss";
import Popup from "../../components/Popup";
import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import Button from "../../components/Button";
import { useFormik } from "formik";
import useFetchData from "../../hooks/useFetchData";
import { useState } from "react";

type Props = {
  open: boolean;
  handlePopup: () => void;
  setStoreInventory: React.Dispatch<
    React.SetStateAction<{
      books: bookInventory[];
      authors: never[];
    }>
  >;
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function AddToInventoryPopup({ handlePopup, open, setStoreInventory }: Props) {
  const { data: authors } = useFetchData<author>("/authors.json");
  const { data: books } = useFetchData<books>("/books.json");
  const [selectedBook, setSelectedBook] = useState<books[0]>({} as books[0]);
  const formik = useFormik({
    initialValues: {
      bookId: "",
      price: "",
    },
    onSubmit: (values) => {
      const pickAnAuther = (id: number) => {
        return authors?.find((author) => author.id === id) || null;
      };
      const pickedAuther = pickAnAuther(selectedBook.author_id);
      const autherName =
        pickedAuther?.first_name + " " + pickedAuther?.last_name;
      setStoreInventory((prev) => ({
        ...prev,
        books: [
          ...prev.books,
          {
            id: prev.books.length + 1,
            author_id: pickedAuther?.id || 1,
            author_name: autherName || "Unknown",
            price: +values.price || 0,
            name: selectedBook.name || "",
            page_count: selectedBook.page_count || 0,
          },
        ],
      }));
      handlePopup();
    },
  });
  return (
    <Popup
      isOpen={open}
      onCloseModel={handlePopup}
      style={{
        paddingBlock: 0,
        px: 0,
        width: {
          xs: "90%",
          md: "70%",
          lg: "50%",
          xl: "35%",
        },
        borderRadius: "12px",
        maxHeight: "none",
      }}
      checkBeforeClose={false}
      className={styles.addNewStoresPopup}
    >
      <Box className={styles.addNewStoresPopup_header}>
        <Typography fontSize="24px" fontWeight="500">
          Add Book to Inventory
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box className={styles.addNewStoresPopup_body}>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography fontWeight="400" fontSize={"16px"}>
              Book Name
            </Typography>
            <Select
              sx={{ cursor: "pointer", background: "#FAFAFA", height: "40px" }}
              displayEmpty
              value={selectedBook.name}
              name="bookId"
              onChange={(e) => {
                formik.handleChange(e);
                setSelectedBook(
                  books.find((book) => book.id === +e.target.value)!
                );
              }}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                Select Book
              </MenuItem>
              {books.map((book) => (
                <MenuItem key={book.id} value={`${book.id}`}>
                  {book.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography fontWeight="400" fontSize={"16px"}>
              Price
            </Typography>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Enter Book Price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </Box>
        </Box>
        <Box className={styles.addNewStoresPopup_footer}>
          <Button
            onClick={handlePopup}
            text={"cancel"}
            variant="outline"
            fontWeight="500"
            fontSize="14px"
          />
          <Button
            text={"Submit"}
            type="submit"
            variant="fill-primary-light"
            fontWeight="500"
            fontSize="14px"
          />
        </Box>
      </form>
    </Popup>
  );
}

export default AddToInventoryPopup;
