import React from 'react';
import Post from "./Post";

class PostSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts : []
        };
    }

    componentDidMount() {
        this.GetAllPosts();
    }

    GetAllPosts() {
        fetch("https://localhost:44386/api/kweets")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        posts: result
                    });
                }
            )
    }



    render() {
        const posts = this.state.posts
        return (
            <div>
                this is post section
                {posts.map(i => <Post post = {i}/>)}
            </div>
        )
    }
}

export default PostSection;

