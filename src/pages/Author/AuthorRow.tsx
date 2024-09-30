import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";

type Props = {
  author: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    nationality: string;
  };
  setAuthors: React.Dispatch<React.SetStateAction<author>>;
};

function AuthorRow({ author, setAuthors }: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(
    `${author.first_name} ${author.last_name}`
  );
  const handleDeleteAuthor = () => {
    setAuthors((prevAuthors) =>
      prevAuthors.filter((auth) => auth.id !== author.id)
    );
  };
  const handlEdit = () => {
    setEditing(!editing);
  };
  return (
    <Box className={styles.author_autherContainer_header}>
      <label>
        <input type="checkbox" />
      </label>
      <Typography
        fontWeight={"500"}
        fontSize={"16px"}
        display={"flex"}
        alignItems={"center"}
        gap={"5px"}
      >
        #{author.id}
      </Typography>
      {editing ? (
        <Box className={styles.editBox}>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Box
            sx={{
              cursor: "pointer",
              background: "#BF5523",
              color: "#fff",
              borderRadius: "4px",
              padding: "5px 10px",
            }}
            onClick={handlEdit}
          >
            <Typography>Save</Typography>
          </Box>
        </Box>
      ) : (
        <Typography fontWeight={"400"} fontSize={"16px"} color={"#595959"}>
          {value}
        </Typography>
      )}

      <Box className={styles.actions}>
        <Box onClick={handlEdit}>
          <EditOutlinedIcon />
        </Box>
        <Box onClick={handleDeleteAuthor}>
          <DeleteForeverOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default AuthorRow;
