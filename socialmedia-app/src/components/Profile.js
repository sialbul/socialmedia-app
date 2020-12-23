import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';

//MUI Stuff
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import MuiLink from '@material-ui/core/Link';

//Icons
import LocationOn from '@material-ui/icons/LocationOn';

//Redux
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
    ...theme.spreadThis
});


 class Profile extends Component {
    render() {
        const {classes, user:{credentials:{handle,createdAt, imageUrl, bio, website, location},loading}} =this.props;
        let profileMarkup=!loading ?(authenticated ? (
            <Paper className={classes.paper}>
                <div className={classes.profile}>
                    <div className="profile-image">
                        <img src={imageUrl} alt="profile"/>

                    </div>
                    <hr/>
                    <div className="profile-details">
                        <MuiLink component={Link} to={`/users/${handle}`} color="primary" variant="h5">
                            @{handle}
                        </MuiLink>
                        <hr/>
                        {bio && <Typography variant='body2'>{bio}</Typography> }
<hr/>
{location &&(
    <LocationOn></LocationOn>
)}

                    </div>

                </div>
            </Paper>
        ):()):(<p>Loading...</p>)
        return profileMarkup;

    }
}

const mapStateToProps =(state)=>({
    user: state.user
});

Profile.propTypes ={
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(Profile))
