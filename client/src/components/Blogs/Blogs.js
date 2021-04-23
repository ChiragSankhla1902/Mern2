import React from 'react'
import Blog from "./Blog/Blog";
import useStyles from "./styles";
import {Grid,CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
// mssg={val[index].message} img={val[index].selectedFile} create={val[index].creator} head={val[index].title}

const Blogs = ({setcurrentid}) => {
    const classes=useStyles();
    const Allblogs=useSelector((state)=>state.blogsr);
    console.log(Allblogs)
    return (
            !Allblogs.length ? <CircularProgress/>:(
                <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                    {Allblogs.map((val) => {
                    return(
                    <Grid key={val._id} item xs={12} sm={6} md={6}>
                        <Blog mssg={val} setcurrentid={setcurrentid}/>
                    </Grid>
                    )
                    })}
                </Grid>
            )
    );
};

export default Blogs;
