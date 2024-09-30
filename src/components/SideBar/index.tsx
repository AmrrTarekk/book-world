import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import Logo from "../../assets/SVG/logo2.svg?component";
import { sidebarTabs } from "../../helpers/sidebarTabs";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [tabNumber, setTabNumber] = useState(0);
  const handleSelectTab = (index: number) => {
    setTabNumber(index);
  };
  return (
    <Box className={styles.sidebar}>
      <Box className={styles.sidebar_logo}>
        <Logo />
        <Typography fontWeight={"700"} fontSize={"18px"}>
          BOOK{" "}
          <Typography component="span" fontWeight={"400"} fontSize={"18px"}>
            WORLD
          </Typography>
        </Typography>
      </Box>
      <Box className={styles.sidebar_tabs}>
        {sidebarTabs.map((tab, index) => (
          <Link
            to={tab.link}
            onClick={() => handleSelectTab(index)}
            className={`${styles.sidebar_tabs_tab} ${
              index === tabNumber ? styles.activeTab : ""
            }`}
            key={index}
          >
            <tab.icon
              className={`${styles.sidebar_tabs_tab_icon} ${
                index === tabNumber ? styles.activeTab : ""
              }`}
            />
            <Typography color={index === tabNumber ? "#BF5523" : "#00000040"}>
              {tab.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default SideBar;
