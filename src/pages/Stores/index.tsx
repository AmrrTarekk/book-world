import { Box, Divider, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import SearchBar from "../Home/components/SearchBar";
import HelmetContainer from "../../HOC/Helmet";
import Button from "../../components/Button";
import { Fragment, useState } from "react";

import HeaderBox from "./HeaderBox";
import useFetchData from "../../hooks/useFetchData";
import AddNewStorePopup from "./AddNewStorePopup";
import StoreRow from "./StoreRow";
function Stores() {
  const [open, setOpen] = useState(false);
  const handlePopup = () => setOpen(!open);
  const { data: stores, setData: setStores } =
    useFetchData<stores>(`/stores.json`);
  return (
    <>
      {open && (
        <AddNewStorePopup
          open={open}
          handlePopup={handlePopup}
          setStores={setStores}
        />
      )}

      <HelmetContainer title={"Stores"}>
        <Box className={styles.stores}>
          <Box className={styles.stores_headerBox}>
            <Box className={styles.stores_headerBox_box1}>
              <Typography fontSize={"24px"} fontWeight={"500"}>
                Stores List
              </Typography>
              <SearchBar />
            </Box>
            <Button
              onClick={handlePopup}
              text={"Add New Store"}
              variant="fill-primary-light"
              fontWeight="500"
              fontSize="16px"
            />
          </Box>
          <Box className={styles.stores_storeContainer}>
            <HeaderBox />
            <Divider />
            {stores.map((store, index) => (
              <Fragment key={store.id}>
                <StoreRow store={store} setStores={setStores} />
                {index !== stores.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Box>
        </Box>
      </HelmetContainer>
    </>
  );
}

export default Stores;
