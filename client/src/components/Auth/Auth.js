import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
import {Avatar,Button,Paper,Grid,Typography,Container} from "@material-ui/core";
import useStyles from "./Style";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import {signin,signup} from "../../action/Authaction";

const intialState={FirstName:"",LastName:"",email:"",password:"",confirmpassword:""}


const Auth = () => {
    const classes=useStyles();
    const [formdata,setformdata]=useState(intialState);
    const history=useHistory();
    const [Signed,setSigned]=useState(false);
    const dispatch=useDispatch();
    const switchmode=()=>{
        setSigned((pre)=>!pre);
        handleShowPassword(false);
    }
    const Send=(e)=>{
        e.preventDefault();
        if(Signed){
            dispatch(signup(formdata,history))
        }else{
            dispatch(signin(formdata,history))
        }
    };
    const handleChange=(e)=>{setformdata({...formdata,[e.target.name]:e.target.value})};
    const handleShowPassword=()=>{setshowPassword((prev)=>!prev)};
    const [showPassword,setshowPassword]=useState(false)

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.Avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5" >{Signed?'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={Send}>
                    <Grid container spacing={2}>
                        {Signed?(
                            <>
                                <Input name="FirstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="LastName" label="Last Name" handleChange={handleChange} half/>
                            </>
                        ):null}
                           
                                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                           
                        {Signed? <Input name="confirmPassword" label="Repeat password" handleChange={handleChange} type="password"/>:null}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {Signed?'Sign Up':'Sign in'}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item >
                            <Button onClick={switchmode}>
                            {Signed? 'Already have account?Sign In':"Dont have account?Sing up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </Container>
    )
}

export default Auth;
