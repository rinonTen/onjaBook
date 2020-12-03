import React, { useState, useReducer, useContext, useEffect } from 'react';
import Posts from '../feed';
import { Context } from '../Context';
import { Switch } from 'react-router-dom';

export default function reducer() {
    // const [posts, setPosts] = useState([]);
    // const [users, setUsers] = useState([]);
    // const [commentInput, setCommentInput] = useState("");

    const [state, dispatch] = useReducer((state, action) => {
        
        switch (action.type) {
            case 'SET_POSTS': {
                return { ...state, posts: Posts }
            }
            case "SET_COMMENT_INPUT": {
                return { ...state, commentInput: dispatch. }
            }
            case "UPDATED_POSTS": {
                return { ...state, posts: updatedPosts }
            }
            default:
                return state
        }
    }, {
        posts: [],
        users: [],
        commentInput: "",
    })

    let { posts, users, commentInput } = state;

    useState = () => {
        post = posts
    }
    const dispatch = () => {
        action = {
            fafjl: lls
        }
    }
    // state = {
    //     posts: [{..}, {...}],
    //     users: [{...}],
    //     commentInput: value from the input
    // }
    // let postsArr = state.post
    s,
        useEffect(() => {
            setPosts(Users);
        }, [posts])


    function hS(e, postId) {
        const newComm = {
            id: Date.now(),
            content: inputValue,
        }

        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...post.comments, newComm]
                }
            }
            return post;
        })   

        dispatch({ type: "SET_POSTS", posts: updatedPosts })

    }




    useEffect(() => {
        dispatch({
            type: "SET_POSTS",
        })
    }, [])
    return (

        <>
        {posts.map(post => {
          return  (<form onSubmit={(e) => hS(e, post.id)}>
                <input type="text" onChange={
                    dispatch({ type: "SET_COMMENT_INPUT", inputValue: e.target.value })
                } />
            </form>)
        })}
        </>

    )
}

