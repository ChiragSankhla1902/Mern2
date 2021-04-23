import React,{useState,useEffect} from 'react';
import {getblogs} from "../../action/action";
import Blogs from "../Blogs/Blogs";
import Form from "../Form/Form";
import {Container,Grow,Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch=useDispatch();
    const [currentid,setcurrentid]=useState(0);
  
    useEffect(()=>{
      dispatch(getblogs());
    },[dispatch,currentid]);
  
    return (
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Blogs setcurrentid={setcurrentid}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentid={currentid} setcurrentid={setcurrentid}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}



export default Home;
