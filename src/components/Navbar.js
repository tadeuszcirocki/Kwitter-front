import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 10,
    },
    title: {
        flexGrow: 1,
        display: 'none',

    },
    search: {
        position: 'relative',
        borderRadius: theme,
        marginLeft: 0,
        width: '100%',

    },
    searchIcon: {
        padding: 10,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },

});

class Navbar extends React.Component {




    render() {
        const {classes} = this.props;




        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => alert("")}
                        >
                            <MenuIcon />
                        </IconButton>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                Kwitter
                            </div>

                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
