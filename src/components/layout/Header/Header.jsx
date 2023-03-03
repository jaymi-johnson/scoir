import Typography from "@mui/material/Typography";

const headerCss = {
  textAlign: "center",
  margin: 5,
};

const Header = () => {
  return (
    <Typography variant="h1" sx={headerCss}>
      Dog Catcher
    </Typography>
  );
};

export default Header;
