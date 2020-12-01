import React, { useContext } from 'react';
import { Context } from '../Context';

export default function AddPostComponent() {
    const { state, dispatch } = useContext(Context);
    const { textareaValue, urlPostValue, feed } = state;
    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            "id": Date.now(),
            "username": "Melody",
            "profile": "alala",
            "legend": textareaValue,
            "url": urlPostValue,
            "comments": [],
            "date": new Date().toLocaleDateString(),
            "likes": 0
        };
        feed.push(newPost)
        dispatch({type: "SET_FEED", postData: feed })
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
