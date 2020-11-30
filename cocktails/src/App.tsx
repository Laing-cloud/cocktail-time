import React from 'react';
import { CardActions, CardContent, Button, Typography, Card , makeStyles }from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: "fit-content",
    display: "grid",
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
       <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        Cocktail name
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Ingredients
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Recipe
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default App;
