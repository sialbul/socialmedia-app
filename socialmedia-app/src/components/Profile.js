import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';

//MUI Stuff
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import MuiLink from '@material-ui/core/Link';

//Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

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
  <Fragment>
        <LocationOn color="primary"/> <span>{location}</span>
    <hr/>
  </Fragment>
)}
{website &&(
    <Fragment>
        <LinkIcon color="primary" />
<a href={website} target="_blank" rel="noopener noreferrer">
    {' '}{website}
</a>
<hr/>
    </Fragment>
)}
<CalendarToday color="primary"/>{' '}
<span>Joined {dayjs(createdAt).format('MMM YYYY')} </span>

                    </div>

                </div>
            </Paper>
        ):( 
<Paper className={classes.paper}>
    <Typography variant="body2" align="center">
        No profile found, please login again
    </Typography>
    <div className={classes.buttons}>
        <Button variant="contained" color="primary" component={Link} to="/login">Login</Button>
        <Button variant="contained" color="primary" component={Link} to="/signup">Signup</Button>
    </div>
</Paper>


        )):(<p>Loading...</p>)
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
