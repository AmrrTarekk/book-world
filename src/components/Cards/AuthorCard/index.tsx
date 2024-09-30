import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import Person from "../../../assets/SVG/person.svg?component";
type Props = {
  author: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    nationality: string;
  };
};

function AuhtorCard({ author }: Props) {
  return (
    <Box className={styles.authorCard}>
      <Box className={styles.authorCard_box1}>
        <Person />
      </Box>
      <Box className={styles.authorCard_box2}>
        <Box display={"flex"} flexDirection={"column"} gap={"0px"}>
          <Typography fontWeight={"500"} fontSize={"16px"}>
            {author.first_name}
          </Typography>
          <Typography fontWeight={"400"} fontSize={"14px"} color={"#BF5523"}>
            Publish books: {author.id}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AuhtorCard;
