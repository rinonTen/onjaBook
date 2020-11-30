import React, {useReducer, useEffect, createContext} from 'react';
import FeedData from "./feed.json";

const Context = createContext();
function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "SET_FEED" : {
                return {...state, feed: FeedData}
            }
            case "UPDATED_LIKES": {
                return {...state, feed: action.updatedFeed}
            }
            default:
            return state
        }
    }, {
      feed: [],   
    })

    useEffect(() => {
        dispatch({type: "SET_FEED"})
    }, []);

    let {feed} = state;
 
    function increaseLikes(id) { 
      const newFeed =  feed.map(feed => {
			if (feed.id === id) {
            return {
                ...feed,
                likes: feed.likes + 1
            }
        }
        return feed
        })
        dispatch({type: "UPDATED_LIKES", updatedFeed: newFeed})
    }
     
    return (
        <Context.Provider value={{feed, increaseLikes}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider};
