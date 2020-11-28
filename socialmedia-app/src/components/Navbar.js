import React, { Component } from "react";
import { Link } from "react-router-dom";
//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar className="navbar-container">
                        <Button color="inherit" component={Link} to="/login">
                            {" "}
                            LOGIN{" "}
                        </Button>{" "}
                        <Button color="inherit" component={Link} to="/">
                            {" "}
                            HOME{" "}
                        </Button>{" "}
                        <Button color="inherit" component={Link} to="/signup">
                            {" "}
                            SIGNUP{" "}
                        </Button>{" "}
                    </Toolbar>{" "}
                </AppBar>{" "}
            </div>
        );
    }
}

export default Navbar;
