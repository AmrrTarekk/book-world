import { Box } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.scss";
import SearchIcon from "../../../../assets/SVG/searchIcon.svg?component";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <Box className={styles.searchBar}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        className={styles.searchBar_input}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </Box>
  );
}

export default SearchBar;
