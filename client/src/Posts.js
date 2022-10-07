import {useEffect} from "react";
import axios from "axios";

const Posts = () => {
    useEffect(() => {
        axios.post('api/posts')
        .then((response) => {
            console.log(response)
        })
    },[])
    return (
        <>
            <span>list of posts</span>
        < />
    );
}

export {Posts};