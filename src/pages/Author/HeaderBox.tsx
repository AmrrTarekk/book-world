import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function HeaderBox() {
  return (
    <Box className={styles.author_autherContainer_header}>
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
        Author ID <ArrowDropUpIcon />
      </Typography>
      <Typography fontWeight={"500"} fontSize={"16px"}>
        Name
      </Typography>
      <Typography fontWeight={"500"} fontSize={"16px"}>
        Actions
      </Typography>
      {/* <Box className={styles.actions}>
      <Box>
        <EditOutlinedIcon />
      </Box>
      <Box>
        <DeleteForeverOutlinedIcon />
      </Box>
    </Box> */}
    </Box>
  );
}

export default HeaderBox;
