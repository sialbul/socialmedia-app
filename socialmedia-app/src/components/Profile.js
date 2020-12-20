import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//MUI stuff
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

//Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalenderToday from "@material-ui/icons/CalenderToday";

//Redux
import { connect } from "react-redux";
import { Fragment } from "react";

const styles = (theme) => ({
    ...theme,
});

class Profile extends Component {
    render() {
        const {
            classes,
            user: {
                credentials: {
                    handle,
                    createdAt,
                    imageUrl,
                    bio,
                    website,
                    location,
                },
                loading,
            },
        } = this.props;
        let profileMarkup = !loading ? (
            authenticated ? (
                <Paper className={classes.paper}>
                    <div className={classes.profile}>
                        <div className="profile-image">
                            <img src={imageUrl} alt="profile" />
                        </div>
                        <hr />
                        <div className="profile-details">
                            <MuiLink
                                component={Link}
                                to={"/users/${handle}"}
                                color="primary"
                                variant="h5">
                                @{handle}
                            </MuiLink>
                            <hr />
                            {bio && (
                                <Typography varint="body2">{bio}</Typography>
                            )}
                            <hr />
                            {location && (
                                <Fragment>
                                    <locationOn color="primary" />
                                    <span>{location}</span>
                                    <hr />
                                </Fragment>
                            )}
                            {website && (
                                <Fragment>
                                    <LinkIcon color="primary" />
                                    <a
                                        href={website}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {""}
                                        {website}
                                    </a>
                                    <hr />
                                </Fragment>
                            )}
                            <CalenderToday color="primary" />
                            {""}
                            <span>
                                Joined{dayjs(createdAt).format("MMM YYYY")}
                            </span>
                        </div>
                    </div>
                </Paper>
            ) : (
                <Paper className={classes.paper}>
                    <Typography variant="body2" align="center">
                        No profile found, please login again
                    </Typography>
                    <div className={classes.buttons}>
                        <Button
                            variant="contained"
                            color="primary"
                            componenet={Link}
                            to="/login">
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            componenet={Link}
                            to="/signup">
                            Signup
                        </Button>
                    </div>
                </Paper>
            )
        ) : (
            <p>loading....</p>
        );

        return profileMarkup;
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
});

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(Profile));
