import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import PropTypes from "prop-types";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        paddingInline: 100,
        paddingTop: 50
    },
    textField: {
        marginLeft: 8,
        marginRight: 10,
        width: '25ch',
    },
    formControl: {
        minWidth: 120,
        maxWidth: 300,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


class PostForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "title",
            content: "content",
            authors: [],            //to display on form
            selectedAuthor: undefined
        }
    }

    getAuthors() {
        const apiUrl = 'https://localhost:44386/api/users/';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({authors: data})
            });
    }

    postPost(content, title, userId){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title,
                content: content, userId: userId})
        };
        fetch('https://localhost:44386/api/kweets', requestOptions)
            .then(response => response.json())
            .then(window.location.reload(false));

    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        if(this.state.content == 'content')
            alert('please enter the content')
        else{
            this.postPost(this.state.content,this.state.title, localStorage.getItem('userid'));
        }
    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    componentDidMount() {
        this.getAuthors();
    }

    handleMulti = (event) => {
        this.setState({selectedAuthor : event.target.value});
    };


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>

                <TextField
                    id="margin-normal"
                    className={classes.textField}
                    margin="normal"
                    name="title"
                    onChange={this.myChangeHandler}
                    placeholder="title"
                    onChange={this.myChangeHandler}
                />

                <TextField
                    name="content"
                    onChange={this.myChangeHandler}
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="content"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    multiline={true}
                />







                <Button style={{float:'right', marginTop: 20}} variant = 'contained' color='primary' onClick={this.mySubmitHandler}>Add post</Button>
                <br/>
            </div>

        );
    }

}


PostForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostForm);