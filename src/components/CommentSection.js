import React from 'react';
import Comment from './Comment'
class CommentSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments : []
        };
    }

    componentDidMount() {
        this.GetAllComments();
    }

    GetAllComments() {
        const postId = this.props.postId
        fetch("https://localhost:44386/api/comments/post/"+postId)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        comments: result
                    });
                }
            )
    }


    render() {
        const comments = this.state.comments
        return (
            <div>
                this is comment section
                {comments.map(i => <Comment comment = {i}/>)}
            </div>
        )
    }
}

export default CommentSection;

