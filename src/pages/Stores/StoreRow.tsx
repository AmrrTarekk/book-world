import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  store: {
    id: number;
    name: string;
    address_1: string;
    address_2: string | null;
    city: string;
    state: string;
    zip: string;
  };
  setStores: React.Dispatch<React.SetStateAction<stores>>;
};

function StoreRow({ store, setStores }: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(store.name);
  const handleDeleteAuthor = () => {
    setStores((prevStores) => prevStores.filter((s) => s.id !== store.id));
  };
  const handlEdit = () => {
    setEditing(!editing);
  };
  return (
    <Link to={"/stores/cover-discovery"}>
      <Box className={styles.stores_storeContainer_header}>
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
          #{store.id}
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

        <Typography fontWeight={"400"} fontSize={"16px"} color={"#595959"}>
          {store.address_1}
        </Typography>

        <Box className={styles.actions}>
          <Box onClick={handlEdit}>
            <EditOutlinedIcon />
          </Box>
          <Box onClick={handleDeleteAuthor}>
            <DeleteForeverOutlinedIcon />
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default StoreRow;
