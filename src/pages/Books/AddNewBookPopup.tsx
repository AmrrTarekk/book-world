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
  setBooks: React.Dispatch<React.SetStateAction<books>>;
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

function AddNewBookPopup({ handlePopup, open, setBooks }: Props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      page_count: 0,
      author: "",
    },
    onSubmit: (values) => {
      setBooks((prevBooks) => [
        ...prevBooks,
        {
          id: prevBooks.length + 1,
          author_id: 1,
          name: values.name,
          isbn: "",
          language: values.author,
          page_count: values.page_count,
          format: "",
        },
      ]);
      handlePopup();
    },
  });
  const { data: authors } = useFetchData<author>("/authors.json");
  const [author, setAuthor] = useState<string>("");
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
      className={styles.addNewBooksPopup}
    >
      <Box className={styles.addNewBooksPopup_header}>
        <Typography fontSize="24px" fontWeight="500">
          New Book
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box className={styles.addNewBooksPopup_body}>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography fontWeight="400" fontSize={"16px"}>
              Book Name
            </Typography>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Auther Full Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography fontWeight="400" fontSize={"16px"}>
              Number of Pages
            </Typography>
            <input
              id="page_count"
              name="page_count"
              type="number"
              placeholder="Enter Number of Pages"
              onChange={formik.handleChange}
              min={0}
              value={formik.values.page_count || ""}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography fontWeight="400" fontSize={"16px"}>
              Author
            </Typography>
            <Select
              displayEmpty
              value={author}
              name="author"
              onChange={(e) => {
                formik.handleChange(e);
                setAuthor(e.target.value);
              }}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                Select Author
              </MenuItem>
              {authors.map((author) => (
                <MenuItem
                  key={author.id}
                  value={`${author.first_name + " " + author.last_name}`}
                >
                  {author.first_name + " " + author.last_name}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Box className={styles.addNewBooksPopup_footer}>
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

export default AddNewBookPopup;
