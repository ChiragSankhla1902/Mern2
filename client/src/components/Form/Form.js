import React,{useEffect, useState} from 'react'
import useStyles from "./styles";
import {TextField,Button,Typography,Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux";
import {createblog,updateblog}  from "../../action/action";


const Form = ({currentid,setcurrentid}) => {
  const classes=useStyles();
  const dispatch=useDispatch();
  const user =JSON.parse(localStorage.getItem('profile'));
  const [blogdata,setblogdata]=useState({title:'',message:'',selectedFile:''})
  const blog = useSelector((state) => (currentid ? state.blogsr.find((x) => x._id === currentid) : null));
  const clear=()=>{
    // setblogdata({creator:'',title:'',message:'',selectedFile:''});
    setblogdata({title:'',message:'',selectedFile:''});
    setcurrentid(null);
  };
  useEffect(()=>{
    if(blog) setblogdata(blog);
  },[blog])

  const send=(e)=>{
    if(currentid===0){
      dispatch(createblog({...blogdata,name:user?.result?.name}))
      clear()
    }
    else{
      dispatch(updateblog(currentid,{...blogdata,name:user?.result?.name}))
      
      clear()
    }
  }

  if(!user?.result?.name){
    return(
      <Paper className={classes.paper}>
        <Typography variant ="h6" align="center">
          Please Sign in to share your view 
        </Typography>
      </Paper>
    )
  }



   

// title,creator,message,selectedFile
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={send}>
          <Typography variant="h6">{currentid?`Editing Blog`:`Creating Blog`}</Typography>
        
          <TextField name="title" variant="outlined" label="title" fullWidth value={blogdata.title} onChange={(e)=>setblogdata({...blogdata,title:e.target.value})}/>
          <TextField name="title" variant="outlined" label="message" fullWidth value={blogdata.message} onChange={(e)=>setblogdata({...blogdata,message:e.target.value})}/>
          <div className={classes.fileInput}>
            <FileBase type="file" mutliple={false} onDone={({base64})=>setblogdata({...blogdata,selectedFile:base64})}/>
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        </form>
      </Paper>
    )
}

export default Form;
