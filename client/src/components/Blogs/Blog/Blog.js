import React from 'react'
import useStyles from "./style";
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {lblog,dblog} from "../../../action/action";
import {useDispatch} from "react-redux";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

const Blog = ({mssg,setcurrentid}) => {
    const classes=useStyles();
    const dispatch=useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const Likes = () => {
        if (mssg.likes.length > 0) {
          return mssg.likes.find((like) => like === (user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{mssg.likes.length > 2 ? `You and ${mssg.likes.length - 1} others` : `${mssg.likes.length} like${mssg.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{mssg.likes.length} {mssg.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };

    

    return (
        <>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={mssg.selectedFile} alt="image" title={mssg.title}/>
                <div className={classes.overlay}>
                    <Typography variant="h6">{mssg.name}</Typography>
                </div>
                {(user?.result?._id === mssg?.creator)&&(
                    <div className={classes.overlay2}>
                        <Button style={{color:"white"}} size="small" onClick={()=>setcurrentid(mssg._id)}>
                            <MoreHorizIcon fontSize="default"/>
                        </Button>
                    </div>

                )}

                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>{mssg.title}</Typography>
                    <Typography className={classes.title} variant="h6"  >{mssg.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" disabled={!user?.result} onClick={()=>dispatch(lblog(mssg._id))}>
                        <Likes/>
                    </Button>
                    {(user?.result?._id === mssg?.creator) && (
                        <Button size="small" color="primary" onClick={()=>dispatch(dblog(mssg._id))}>
                            <DeleteIcon fontSize="small"/>
                        </Button>
                    )}

                </CardActions>
            </Card>
        </>
    );
}

export default Blog;
