import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import Button from "../../Button";
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
  pickAnAuther: (id: number) => {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    nationality: string;
  } | null;
};

function BookCard({ book, pickAnAuther }: Props) {
  const auther = pickAnAuther(book.author_id);
  const autherName = auther
    ? `${auther.first_name} ${auther.last_name}`
    : "Unknown";
  return (
    <Box className={styles.bookCard}>
      <Box
        className={styles.bookCard_box1}
        sx={{
          background: `linear-gradient(0deg, #E${book.id}F4FF, #E${book.id}F4FF), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 8%),  linear-gradient(90deg, rgba(180, 228, 255, 0.2) 11.6%, rgba(221 216, 214, 0) 26.8%), linear-gradient(270deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 1.2%) !important`,
        }}
      >
        <Typography fontWeight={"500"} fontSize={"16px"} textAlign={"center"}>
          {book.name}
        </Typography>
      </Box>
      <Box className={styles.bookCard_box2}>
        <Box display={"flex"} flexDirection={"column"} gap={"0px"}>
          <Typography fontWeight={"500"} fontSize={"16px"}>
            {book.name}
          </Typography>
          <Typography fontWeight={"400"} fontSize={"14px"} color={"#8F8F8F"}>
            by {autherName}
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Typography fontWeight={"400"} fontSize={"14px"} color={"#8F8F8F"}>
            Stores:
          </Typography>
          <Box display={"flex"} gap={"5px"} alignItems={"center"}>
            <Box className={styles.soldOutBox}>
              <Button
                text="sold out"
                variant="fill-blue"
                fontSize="14px"
                fontWeight="300"
                rightIcon={true}
                icon={<RemoveShoppingCartOutlinedIcon />}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BookCard;
