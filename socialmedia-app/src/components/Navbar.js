import React, { Component } from "react";

//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Toolbar";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button color="inherit"> Login</Button>
                        <Button color="inherit"> Home</Button>
                        <Button color="inherit"> Signup</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;
