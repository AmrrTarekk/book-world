import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import StoresIcon from "../../../assets/SVG/storesTabIcon.svg?component";

type Props = {
  store: {
    id: number;
    name: string;
    address_1: string;
    address_2: string | null;
    city: string;
    state: string;
    zip: string;
  };
};

function StoreCard({ store }: Props) {
  return (
    <Box className={styles.storeCard}>
      <Box className={styles.storeCard_box1}>
        <StoresIcon />
      </Box>
      <Box className={styles.storeCard_box2}>
        <Box display={"flex"} flexDirection={"column"} gap={"0px"}>
          <Typography fontWeight={"500"} fontSize={"16px"}>
            {store.address_1}
          </Typography>
          <Typography fontWeight={"400"} fontSize={"14px"} color={"#8F8F8F"}>
            by {store.name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default StoreCard;
