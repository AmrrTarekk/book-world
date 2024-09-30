import styles from "./styles.module.scss";
import Popup from "../../components/Popup";
import { Box, Typography } from "@mui/material";
import Button from "../../components/Button";
import { useFormik } from "formik";

type Props = {
  open: boolean;
  handlePopup: () => void;
};

function AddNewAuthorPopup({ handlePopup, open }: Props) {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      alert(`Form submitted! Name: ${values.name}`);
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
      className={styles.addNewAuthorPopup}
    >
      <Box className={styles.addNewAuthorPopup_header}>
        <Typography fontSize="24px" fontWeight="500">
          New Author
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box className={styles.addNewAuthorPopup_body}>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Typography fontWeight="400" fontSize={"16px"}>
              Author Name
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
        </Box>
        <Box className={styles.addNewAuthorPopup_footer}>
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

export default AddNewAuthorPopup;
