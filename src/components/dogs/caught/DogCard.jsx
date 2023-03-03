import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const DogCard = ({ details, removeDog }) => (
  <Grid item>
    <Card sx={{ width: 300 }}>
      <CardActions>
        <IconButton
          aria-label="remove breed"
          onClick={() => removeDog(details.image)}
        >
          <HighlightOffIcon />
        </IconButton>
      </CardActions>
      <CardMedia
        component="img"
        alt={details.breed}
        image={details.image}
        height="250"
      />
      <CardContent>
        <Typography>{details.breed}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default DogCard;
