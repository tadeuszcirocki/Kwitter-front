import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author : {"username" : "default"}
        };
    }

    componentDidMount() {
        this.GetAuthor();
    }

    GetAuthor() {
        const postId = this.props.comment.id
        fetch("https://localhost:44386/api/comments/"+postId+"/user")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        author: result
                    });
                }
            )
    }


    render() {
        const comment = this.props.comment
        const author = this.state.author
        return (

        <div style={{paddingTop: 12}}>
            <Typography variant ="body2">
                {comment.content}
            </Typography>
            <Typography variant ="caption">
                ~ {author.username}
                    <div>
                        <Button onClick={() => alert("click")} color={"secondary"} size={"small"}>remove</Button>
                        <Button color={"primary"} size={"small"}>edit</Button>
                    </div>




            </Typography>
        </div>
        )
    }
}

export default Blog;

