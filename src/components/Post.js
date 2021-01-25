import React from 'react';
import CommentSection from "./CommentSection";
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 50,
    },
    paper: {
        padding: 10,
        margin: 'auto',
        maxWidth: 900,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author : {"username" : "default"},
            likes : this.props.post.likeQuantity
        };
    }

    componentDidMount() {
        this.GetAuthor();
    }

    GetAuthor() {
        const postId = this.props.post.id
        fetch("https://localhost:44386/api/kweets/"+postId+"/user")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        author: result
                    });
                }
            )
    }

    AddLike = (prevState) => {
        this.setState({likes: prevState.likes + 1}, () => {
            fetch("https://localhost:44386/api/kweets/"+this.props.post.id+"/like")
        })};

    removePost(id){
        const requestOptions = {
            method: 'DELETE'
        };
        fetch("https://localhost:44386/api/kweets/"+id, requestOptions);
        window.location.reload(false);
    }





    render() {
        const {classes} = this.props;
        const post = this.props.post;
        const author = this.state.author
        return (
        <div className={classes.root}>
            <Paper elevation={5} className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>

                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>

                                <Typography variant="body1" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {post.content}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    likes: {this.state.likes}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {post.created}
                                </Typography>
                                <p></p>

                                <Typography variant ="caption">
                                    ~ {author.username}
                                </Typography>

                            </Grid>

                        </Grid>
                        <Grid item>
                            {localStorage.getItem('userid') == this.state.author.id ?
                                <Typography onClick={() => {
                                    this.removePost(post.id)
                                }} variant="body2" style={{cursor: 'pointer'}}>
                                    <h5>remove</h5>
                                </Typography>
                                : null}
                            {localStorage.getItem('userid') == this.state.author.id ?
                                <Typography onClick={() => {
                                    alert('click')
                                }} variant="body2" style={{cursor: 'pointer'}}>
                                    <h5>edit</h5>
                                </Typography>
                                : null}

                            <Typography onClick={() => {
                                this.AddLike(this.state)
                            }} variant="body1" style={{cursor: 'pointer'}}>
                                <h4>like</h4>
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
                <hr/>
                <CommentSection postId={post.id}/>
            </Paper>
        </div>
        )
    }
}


Post.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);

