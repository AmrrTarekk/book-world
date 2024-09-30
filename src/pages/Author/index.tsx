import { Box, Divider, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import SearchBar from "../Home/components/SearchBar";
import HelmetContainer from "../../HOC/Helmet";
import Button from "../../components/Button";
import { Fragment, useState } from "react";
import AddNewAuthorPopup from "./AddNewAuthorPopup";

import HeaderBox from "./HeaderBox";
import useFetchData from "../../hooks/useFetchData";
import AuthorRow from "./AuthorRow";
function Author() {
  const [open, setOpen] = useState(false);
  const handlePopup = () => setOpen(!open);
  const { data: authors, setData: setAuthors } =
    useFetchData<author>(`/authors.json`);
  return (
    <>
      {open && <AddNewAuthorPopup open={open} handlePopup={handlePopup} />}

      <HelmetContainer title={"Author"}>
        <Box className={styles.author}>
          <Box className={styles.author_headerBox}>
            <Box className={styles.author_headerBox_box1}>
              <Typography fontSize={"24px"} fontWeight={"500"}>
                Author List
              </Typography>
              <SearchBar />
            </Box>
            <Button
              onClick={handlePopup}
              text={"Add New Auther"}
              variant="fill-primary-light"
              fontWeight="500"
              fontSize="16px"
            />
          </Box>
          <Box className={styles.author_autherContainer}>
            <HeaderBox />
            <Divider />
            {authors.slice(0, 10).map((author, index) => (
              <Fragment key={author.id}>
                <AuthorRow author={author} setAuthors={setAuthors} />
                {index !== authors.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Box>
        </Box>
      </HelmetContainer>
    </>
  );
}

export default Author;
