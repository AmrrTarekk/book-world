import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function StoreBox() {
  return (
    <Box className={styles.stores_storeContainer_header}>
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
        Store ID <ArrowDropUpIcon />
      </Typography>
      <Typography fontWeight={"500"} fontSize={"16px"}>
        Name
      </Typography>
      <Typography fontWeight={"500"} fontSize={"16px"}>
        Address
      </Typography>

      <Typography fontWeight={"500"} fontSize={"16px"}>
        Actions
      </Typography>
    </Box>
  );
}

export default StoreBox;
