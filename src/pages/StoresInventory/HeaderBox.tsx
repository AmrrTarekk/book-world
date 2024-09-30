import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function StoreBox() {
  return (
    <Box className={styles.storeInventory_storeInventoryContainer_header}>
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
        Book ID <ArrowDropUpIcon />
      </Typography>
      <Typography fontWeight={"500"} fontSize={"16px"}>
        Book Name
      </Typography>
      <Typography fontWeight={"500"} fontSize={"16px"}>
        pages
      </Typography>
      <Typography fontWeight={"500"} fontSize={"16px"}>
        Author
      </Typography>
      <Typography fontWeight={"500"} fontSize={"16px"}>
        price
      </Typography>

      <Typography fontWeight={"500"} fontSize={"16px"}>
        Actions
      </Typography>
    </Box>
  );
}

export default StoreBox;
