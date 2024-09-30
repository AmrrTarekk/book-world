import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";

type Props = {
  book: {
    id: number;
    author_id: number;
    name: string;
    isbn: string;
    language: string;
    page_count: number;
    format: string;
  };
  setBooks: React.Dispatch<React.SetStateAction<books>>;
};

function BookRow({ book, setBooks }: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(book.name);
  const handleDeleteBook = () => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
  };
  const handlEdit = () => {
    setEditing(!editing);
  };
  return (
    <Box className={styles.books_bookContainer_header}>
      <label>
        <input type="checkbox" />
      </label>
      <Typography
        fontWeight={"500"}
        fontSize={"16px"}
        display={"flex"}
        alignItems={"center"}
        gap={"5px"}
      >
        #{book.id}
      </Typography>
      {editing ? (
        <Box className={styles.editBox}>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Box
            sx={{
              cursor: "pointer",
              background: "#BF5523",
              color: "#fff",
              borderRadius: "4px",
              padding: "5px 10px",
            }}
            onClick={handlEdit}
          >
            <Typography>Save</Typography>
          </Box>
        </Box>
      ) : (
        <Typography fontWeight={"400"} fontSize={"16px"} color={"#595959"}>
          {value}
        </Typography>
      )}

      <Typography fontWeight={"400"} fontSize={"16px"} color={"#595959"}>
        {book.page_count}
      </Typography>
      <Typography fontWeight={"400"} fontSize={"16px"} color={"#595959"}>
        {book.language}
      </Typography>

      <Box className={styles.actions}>
        <Box onClick={handlEdit}>
          <EditOutlinedIcon />
        </Box>
        <Box onClick={handleDeleteBook}>
          <DeleteForeverOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default BookRow;
