import React from 'react';

class Blog extends React.Component {





    render() {
        const comment = this.props.comment
        return (
            <div>
                this is comment
                {comment.content}
                delete edit
            </div>
        )
    }
}

export default Blog;

