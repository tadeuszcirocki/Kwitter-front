import React from 'react';
import CommentSection from "./CommentSection";

class Post extends React.Component {





    render() {
        const post = this.props.post;
        return (
            <div>
                this is post
                TITLE: {post.title}
                <CommentSection postId={post.id}/>
            </div>
        )
    }
}

export default Post;

