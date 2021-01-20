import React from 'react';

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
            <div>
                this is comment
                {comment.content}
                AUTHOR: {author.username}
                delete edit
            </div>
        )
    }
}

export default Blog;

