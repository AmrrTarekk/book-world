import { Box, Grid } from "@mui/material";
import styles from "./styles.module.scss";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function MainLayout() {
  return (
    <Grid container>
      <Grid item xs={1.8}>
        <SideBar />
      </Grid>
      <Grid item xs={10.2}>
        <Box className={styles.mainContainer}>
          <Navbar />
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainLayout;
