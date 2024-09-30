import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import HelmetContainer from "../../HOC/Helmet";
import StoresSlider from "./components/StoresSlider";
import AuthorsSlides from "./components/AuhtorsSlider";
import BooksSlider from "./components/BooksSlider";
function Home() {
  // const { data: stores } = useFetchData(`/stores.json`);
  // const { data: authors } = useFetchData(`/authors.json`);
  // const { data: books } = useFetchData(`/books.json`);

  return (
    <HelmetContainer title={"Book World"}>
      <Box className={styles.home}>
        <StoresSlider />
        <AuthorsSlides />
        <BooksSlider />
      </Box>
    </HelmetContainer>
  );
}

export default Home;
