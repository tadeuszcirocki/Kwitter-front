import React from 'react';
import CommentSection from "./CommentSection";

class Post extends React.Component {

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





    render() {
        const post = this.props.post;
        const author = this.state.author
        return (
            <div>
                this is post
                TITLE: {post.title}
                AUTHOR: {author.username}
                <CommentSection postId={post.id}/>
            </div>
        )
    }
}

export default Post;

