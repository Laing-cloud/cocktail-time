import { Button, Card, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import getCocktail from "../helpers/getCocktail";
const cocktails = require("../data/testData.json")


const useStyles = makeStyles({
    root:{
        display: "contents",
        flexWrap: "wrap",
    },
    card: {
      maxWidth: "fit-content",
      display: "grid",
    },
    pos: {
      marginBottom: 12,
    },
    gridCard: {
      display: "flex",
      margin: "100px",
      flexDirection: "row-reverse",
    },
  });
  
  
  const CocktailCard = () =>{
    const classes = useStyles();
    const selection = cocktails[getCocktail(cocktails)];
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={6} className={classes.gridCard}>
         <Card className={classes.card} variant="outlined">
        <CardContent>
        <img src={selection.img} alt={`${selection.name} random selection`}/> 
          <Typography variant="h5" component="h2">
          {selection.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {selection.ingredients}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {selection.method}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={selection.link}>Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
      </div>
    );
  }
  
  export default CocktailCard;