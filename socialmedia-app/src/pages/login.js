import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from '../images/head.png';

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';


const styles = {
    form: {
        textAlign: "center",
    },
   
    image:{
        maxHeight:80,
        margin:'20px auto 20px auto'
    }
};

handleSubmit = (event) =>{
    console.log('hi');
}

class login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <img src={AppIcon} alt="Man Image" className={classes.image}/>
                    <Typography variant="h2" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>

                    </form>

                </Grid>
                <Grid item sm />
            </Grid>
        );
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(login);
