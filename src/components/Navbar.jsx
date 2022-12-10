import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import BRAND_LOGO  from "../images/dodo-tube.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }} >
      <img src={BRAND_LOGO} alt="BRAND_LOGO" height={45} />
      </Link>
    </Stack>
  );
};

export default Navbar;
