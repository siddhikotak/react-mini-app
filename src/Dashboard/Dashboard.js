import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DialogBox from "../helpers/DialogBox";
import { DialogContext } from "../Contexts/DialogContext";
import { SnackbarContext } from "../Contexts/SnackbarContext";
import CustomSnackbar from "../helpers/Snackbar"


const useStyles = makeStyles((theme) => ({
    tabs: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00001a",
        height: "10vh",
    },
    tab: {
        color: "white",
    }
}));


export default function Dashboard() {

    const classes = useStyles();
    const { snackbar, setSnackbar } = useContext(SnackbarContext);
    const { dialog, setDialog } = useContext(DialogContext);

    useEffect(() => {
        return () => {
            setSnackbar('')
        }
    }, [setSnackbar])

    const handleDialog = () => {
        setDialog(true)
    }
    const setSnackBar = () => {
        setSnackbar({ ...snackbar, msg: 'You Clicked on Agree', severity: 'success', date: new Date() })
        setDialog(false)
    }

    return (
        <div>
            <h1 style={{ color: "#00001a" }}>Welcome to Admin Dashboard</h1>
            <Tabs centered onClick={handleDialog} aria-label="simple tabs example" className={classes.tabs}>
                <Tab label="Tab One" className={classes.tab} />
                <Tab label="Tab Two" className={classes.tab} />
                <Tab label="Tab Three" className={classes.tab} />
            </Tabs>
            {
                dialog ? <DialogBox title="This is Dialog Box" data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna quam." continue={setSnackBar} /> : ''
            }
            {
                snackbar ? <CustomSnackbar msg={snackbar.msg} severity={snackbar.severity} key={snackbar.date} /> : ""
            }
        </div>
    );
}
