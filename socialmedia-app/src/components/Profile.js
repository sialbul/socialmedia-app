import React, { Component } from "react";
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//MUI stuff
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";


//Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalenderToday from '@material-ui/icons/CalenderToday';

//Redux
import { connect } from "react-redux";
import { Fragment } from "react";


const styles = (theme) => ({
    ...theme
  });
  
class Profile extends Component {
    render() {
const{classes,user:{credentials:{handle,createdAt,imageUrl,bio,website,location}, loading}}=this.props;
let profileMarkup = !loading ?(authenticated ? (
    <Paper className={classes.paper}>
        <div className={classes.profile}>
            <div className="profile-image">
                <img src={imageUrl} alt="profile" />
            </div>
            <hr/>
            <div className="profile-details">
<MuiLink component ={Link} to={'/users/${handle}'} color='primary' variant="h5">
    @{handle}
</MuiLink>
<hr/>
{bio && <Typography varint="body2">{bio}</Typography> }
<hr/>
{location &&(
    <Fragment>
           <locationOn color='primary'/><span>{location}</span>
    <hr/>
    </Fragment>
 
)}
            </div>
        </div>
    </Paper>
):()):(<p>loading....</p>)

        return profileMarkup;
    }
}

const mapStateToProps =(state) =>({
    user: state.user
})

Profile.propTypes ={
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}
export default connect(mapStateToProps)(withStyles(styles)(Profile));
