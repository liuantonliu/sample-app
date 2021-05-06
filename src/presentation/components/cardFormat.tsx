import React, {useContext} from "react";
import { JSONDataContext } from "../../application/contexts/data";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

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
    const dataContext = useContext(JSONDataContext);

    return (
        <Card className={classes.root} id={props.index}>
            <CardMedia
                className={classes.media}
                image={dataContext.state[props.index].image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name: {dataContext.state[props.index].name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Type: {dataContext.state[props.index].type}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Keywords: {dataContext.state[props.index].keywords}
              </Typography>
            </CardContent>
        </Card>
    );
}