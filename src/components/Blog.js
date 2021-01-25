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
                zaloguj się
            </div>
        )
        else{
            return (
                <div>
                    <Navbar/>
                    <PostSection/>
                    {"user id:"+useridd}
                </div>
            )
        }
    }
}

export default Blog;

