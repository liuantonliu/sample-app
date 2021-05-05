import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      padding: 10,
      margin: 15,
    },
    media: {
      height: 140,
    },
  });

export default function MakeCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name: {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Type: {props.type}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Keywords: {props.keywords}
              </Typography>
            </CardContent>
        </Card>
    );
}