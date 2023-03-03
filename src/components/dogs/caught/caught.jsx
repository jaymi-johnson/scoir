import { Box, Button, Grid, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import DogCard from "./DogCard";

const headerCss = {
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "1fr auto",
};
const titleCss = {
  marginRight: -10,
};
const emptyCss = {
  margin: 6,
  textAlign: "center",
};

const Caught = ({ caught, clearAll, removeDog }) => {
  return (
    <>
      <Box sx={headerCss}>
        <Typography variant="h2" align="center" gutterBottom sx={titleCss}>
          Caught Breeds
        </Typography>
        <Button onClick={clearAll}>
          <HighlightOffIcon />
          Clear All
        </Button>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        {caught && caught.length ? (
          caught.map((c) => (
            <DogCard details={c} key={c.image} removeDog={removeDog} />
          ))
        ) : (
          <Box sx={emptyCss}>
            <Typography>
              There are currently no breeds caught. <br />
              Search above to catch some!
            </Typography>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default Caught;
