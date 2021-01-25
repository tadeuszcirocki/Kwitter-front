import React from 'react';
import Navbar from "./Navbar";
import PostSection from "./PostSection";
import {UserService} from "./UserService";
class Blog extends React.Component {

    render() {
        var useridd = localStorage.getItem('userid');
        if(useridd==-1 || useridd==undefined)
        return (
            <div>
                log in please
            </div>
        )
        else{
            return (
                <div>
                    <Navbar/>
                    <PostSection/>
                </div>
            )
        }
    }
}

export default Blog;

