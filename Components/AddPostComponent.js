import React, { useContext } from 'react';
import { Context } from '../Context';

export default function AddPostComponent() {
    const { state, dispatch } = useContext(Context);
    const { textareaValue, urlPostValue, feed, users } = state;
    let usernameId; 
    users.map(user =>{
        usernameId = user.id;
    });
      
    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            "id": Date.now(),
            "usernameId": usernameId && usernameId,
            "legend": textareaValue,
            "url": urlPostValue,
            "comments": [
                {
                    "id": 160672232303713,
                    "comment": "Really???",
                    "date": "02/11/2020"
                }
            ],
            "date": new Date().toLocaleDateString(),
            "likes": [
                {
                    "likeId": Date.now(),
                    "usernameId": usernameId && usernameId,
                    "likes": 0
                }
            ]
        };
        feed.push(newPost) 
        dispatch({ type: "SET_FEED", postData: feed })
    }

    return (
        <form className="add_post_form" onSubmit={handleSubmit}>
            <label htmlFor="post" className="textarea_label">New Post:</label>
            <textarea id="post" name="post" rows="4" cols="50"
                value={textareaValue}
                onChange={e => dispatch({ type: "SET_TEXTAREAVALUE", textareaValue: e.currentTarget.value })}
            >
                What's on your mind?
            </textarea>
            <label>Picture url:</label>
            <input type="text"
                value={urlPostValue}
                onChange={e => dispatch({ type: "SET_POSTURLVALUE", urlPostValue: e.currentTarget.value })}
            />
            <div className="button_container">
                <button>Post</button>
            </div>
        </form>
    )
}
