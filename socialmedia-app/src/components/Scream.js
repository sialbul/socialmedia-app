import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
    card: {
        display: "flex",
    },
};

class Scream extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Card>
                <CardMedia image={userImage} />
            </Card>
        );
    }
}

export default withStyles(styles)(Scream);
