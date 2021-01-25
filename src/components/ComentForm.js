import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

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

const styles = theme => ({
    root: {
        paddingInline: 100,
        paddingTop: 50
    },
    textField1: {
        marginLeft: 8,
        marginRight: 10,
        width: '60ch',
    },
    textField2: {
        marginLeft: 8,
        marginRight: 10,
        width: '15ch',
    },
    formControl: {
        minWidth: 120,
        maxWidth: 300,
    },
});


class ComentForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            postId: this.props.postId,
            content: "comment content",
            selectedAuthor: undefined,
            authors: []
        }
    }

    postComment(content, userId, postId){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: content,
                userid: userId,
                kweetid: postId
            })
        };
        fetch('https://localhost:44386/api/comments', requestOptions)
            .then(response => response.json())
            .then(
                    window.location.reload(false)
                );
    }

    getAuthors() {
        const apiUrl = 'https://localhost:44386/api/users/';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({authors: data})
            });
    }

    myChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        if(this.state.content == 'comment content'){
            alert("please enter comment")
        }
        else
            this.postComment(this.state.content, localStorage.getItem('userid'), this.state.postId);
    }

    componentDidMount() {
        this.getAuthors();
    }

    handleMulti = (event) => {
        this.setState({selectedAuthor : event.target.value});
    };

    render(){
        const {classes} = this.props;
        return(
            <div>
                <TextField
                    id="margin-normal"
                    className={classes.textField1}
                    margin="normal"
                    name="content"
                    onChange={this.myChangeHandler}
                    placeholder="content"
                />


                <Button style={{float:'right', marginTop: 20}} variant = 'outlined' color='default' onClick={this.mySubmitHandler}>Add comment</Button>

            </div>
        )

    }

}


ComentForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComentForm);