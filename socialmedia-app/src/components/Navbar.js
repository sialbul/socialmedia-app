import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export class Navbar extends Component {
    render() {
        const
        return (
            <div>
                <AppBar>
                    <Toolbar className="navbar-container">
                        {authenticated ?():(
                            <Fragment>
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
                        </Fragment>


                        )}
                    </Toolbar>{" "}
                </AppBar>{" "}
            </div>
        );
    }
}

Navbar.propTypes ={
    authenticated:PropTypes.bool.isRequired
}
const mapStateToProps = state = ({
    authenticated: state.user.authenticated
})
export default connect(mapStateToProps)(Navbar);
