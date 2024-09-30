import styles from "./styles.module.scss";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className={`${styles.navbar} `}>
      <Box className={styles.navbar_box1}>
        <Typography
          fontWeight={"500"}
          fontSize={"24px"}
          color={"#3E435D"}
          textTransform={"capitalize"}
        >
          {pathname === "/" ? "shop" : pathname.split("/")[1]}
        </Typography>
        <Typography
          fontWeight={"400"}
          fontSize={"16px"}
          color={"#3E435D"}
          textTransform={"capitalize"}
          display={"flex"}
          alignItems={"center"}
        >
          <Link to={pathname.split("/")[1]}>
            {pathname === "/" ? "shop" : pathname.split("/")[1]}
          </Link>
          {pathname.split("/")[2] ? (
            <Box component={"span"} display={"flex"} alignItems={"center"}>
              <KeyboardArrowRightIcon
                fontSize="small"
                className={styles.arrowIcon}
              />
              {pathname.split("/")[2].includes("-")
                ? pathname.split("/")[2].split("-").join(" ")
                : ""}
            </Box>
          ) : (
            ""
          )}
        </Typography>
      </Box>
      <Box className={styles.navbar_box2}></Box>
    </nav>
  );
}

export default Navbar;
