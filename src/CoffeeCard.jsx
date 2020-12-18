import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import { CardMedia } from '@material-ui/core';



const useStyles = makeStyles({
    cardImageHeightStyles: {
        height: 150,
    },
});


const CoffeeCard = (props) => {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    const { avatarUrl, title, subtitle, description, imageUrl } = props;
    return (

        <Card>
            <CardHeader
                avatar={<Avatar src={avatarUrl} />}
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                className={classes.cardImageHeightStyles}
                image={imageUrl}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy Now!</Button>
                <Button size="small">Offer</Button>
            </CardActions>
        </Card>

    );
}

export default CoffeeCard;