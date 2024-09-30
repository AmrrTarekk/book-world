import styles from "./styles.module.scss";
import Popup from "../../components/Popup";
import { Box, Typography } from "@mui/material";
import Button from "../../components/Button";
import { useFormik } from "formik";

type Props = {
  open: boolean;
  handlePopup: () => void;
  setStores: React.Dispatch<React.SetStateAction<stores>>;
};

function AddNewStorePopup({ handlePopup, open, setStores }: Props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
    },
    onSubmit: (values) => {
      setStores((prevStores) => [
        ...prevStores,
        {
          id: prevStores.length + 1,
          name: values.name,
          address_1: values.address,
          address_2: null,
          city: "",
          state: "",
          zip: "",
        },
      ]);
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
          New Store
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box className={styles.addNewStoresPopup_body}>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography fontWeight="400" fontSize={"16px"}>
              Store Name
            </Typography>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Store Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography fontWeight="400" fontSize={"16px"}>
              Store Address
            </Typography>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter Store Address"
              onChange={formik.handleChange}
              value={formik.values.address}
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

export default AddNewStorePopup;
