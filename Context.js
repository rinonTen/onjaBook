import React, { useReducer, useEffect, createContext } from 'react';
import FeedData from "./feed.json";
import Users from './users.json';


const Context = createContext();
function ContextProvider({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_FEED": {
                return { ...state, feed: action.postData }
            }
            case "SET_USERS": {
                return { ...state, users: action.user }
            }
            case "UPDATED_LIKES": {
                return { ...state, feed: action.updatedFeed }
            }
            case "SET_COMMENT": {
                return { ...state, feed: action.updatedComment }
            }
            case "SET_TEXTAREAVALUE": {
                return { ...state, textareaValue: action.textareaValue }
            }
            case "SET_POSTURLVALUE": {
                return { ...state, urlPostValue: action.urlPostValue }
            }
            case "SET_USERNAME": {
                return { ...state, username: action.username }
            }
            case "SET_USERURL": {
                return { ...state, userProfileUrl: action.url }
            }
            default:
                return state
        }
    }, {
        feed: [],
        users: [],
        textareaValue: "",
        urlPostValue: "",
        username: "",
        userProfileUrl: "",
    })

    const { feed, users } = state;

    useEffect(() => {
        dispatch({ type: "SET_FEED", postData: FeedData })
    }, []);

    useEffect(() => {
        dispatch({ type: "SET_USERS", user: Users })
    }, [feed])

    function increaseLikes(id) {
        //   const newFeed =  feed.map(feed => {
        // 	// 	if (feed.id === id) {
        //     //     return {
        //     //         ...feed,
        //     //         likes: feed.likes + 1
        //     //     }
        //     // }
        //     // return feed
        //     })
        // dispatch({type: "UPDATED_LIKES", updatedFeed: "kk"})
    }


    function addComment(e, id) {
        e.preventDefault();
        const newComment = {
            "id": Date.now(),
            "comment": e.target.comment.value,
            "date": new Date().toLocaleDateString(),
        }

        const updatedFeed = feed.map(feed => {
            if (feed.id === id) {
                return {
                    ...feed,
                    comments: feed.comments.push(newComment)
                }
            }
            return feed
        })

        dispatch({ type: "SET_COMMENT", updatedComment: feed })
        //   reset the input
        e.target.comment.value = "";
    }

    return (
        <Context.Provider value={{ dispatch, state, increaseLikes, addComment, }}>
            {children}
        </Context.Provider>
    )
}
export { Context, ContextProvider };
