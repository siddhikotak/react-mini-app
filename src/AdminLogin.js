import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    TextField,
    FormControl,
    Button
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import CustomSnackbar from "./helpers/Snackbar";
import { SnackbarContext } from "./Contexts/SnackbarContext";
import theme from "./theme/index"


const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00001a",
    },
    subroot: {
        height: "60vh",
        width: "50vw",
        [theme.breakpoints.down("sm")]: {
            width: "75vw",
            height: "40vh"
        },
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0",
    },
    loginBox: {
        flex: "3",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color: "blue",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        [theme.breakpoints.down("md")]: {
            flex: "1"
        }
    },
    form: {
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        color: "blue",
    },
}));

export default function AdminLogin(prop) {
    const classes = useStyles();

    const { snackbar, setSnackbar } = useContext(SnackbarContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        return () => {
            setSnackbar('')
        }
    }, [setSnackbar])

    const validateForm = (e) => {
        if (username !== process.env.REACT_APP_USERNAME && password !== process.env.REACT_APP_PASSWORD) {
            setSnackbar({ ...snackbar, msg: 'User Not Found !', severity: 'error', date: new Date() })
        }
        else {
            setRedirect(true)
        }
        e.preventDefault();
    }



    if (redirect) {
        return <Redirect to="/dashboard"></Redirect>
    }

    return (
        <div className={classes.root}>
            <Paper variant="outlined" className={classes.subroot} >
                <div className={classes.loginBox}>
                    <h3>Admin Login Form</h3>
                    <form className={classes.form} onSubmit={validateForm}>
                        <FormControl variant="outlined" style={{ width: "100%" }}>
                            <TextField
                                variant="outlined"
                                id="custom-css-standard-input"
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required={true}
                            />{console.log(username)}
                        </FormControl>

                        <FormControl variant="outlined" style={{ width: "100%" }}>
                            <TextField
                                variant="outlined"
                                id="custom-css-standard-input"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required={true}
                            />{console.log(password)}
                        </FormControl>
                        <Button
                            variant="outlined"
                            type="submit"
                            style={{ width: "100%", padding: "10px 20px" }}
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </Paper>
            {
                snackbar ? <CustomSnackbar msg={snackbar.msg} severity={snackbar.severity} key={snackbar.date} /> : ''
            }
        </div >
    );
}