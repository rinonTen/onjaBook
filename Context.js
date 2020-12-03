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
            case "SET_USEROBJ": {
                return {...state, userObj: action.user}
            }
            default:
                return state
        }
    }, {
        feed: [],
        users: [],
        userObj: {},
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
    }, [])

    function increaseLikes(id) {
        let usernameId; 
    users.map(user =>{
        usernameId = user.id;
    }); 

        const likesFromUser = {
            "likeId": 160672220228,
            "usernameId": usernameId && usernameId
        }

          const newFeed =  feed.map(feed => {
            let userId;
            feed.likes.map(like => {
               userId = like.usernameId
            }); 
            console.log(userId);
          console.log(likesFromUser.usernameId)
        		if (feed.id === id ) {
                    if (userId !== likesFromUser.usernameId) {
                        return{
                            ...feed,
                            likes: [...feed.likes, likesFromUser],
                            like: feed.like + 1
                          }
                    }
            }
            return feed
            }) 
        dispatch({type: "UPDATED_LIKES", updatedFeed: newFeed})
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
                    comments: [...feed.comments, newComment]
                }
            }
            return feed
        })
 
        dispatch({ type: "SET_COMMENT", updatedComment: updatedFeed})
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
