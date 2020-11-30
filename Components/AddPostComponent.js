import React from 'react'

export default function AddPostComponent() {
    return (
        <form className="add_post_form">
            <label htmlFor="post" className="textarea_label">New Post:</label>
            <textarea id="post" name="post" rows="4" cols="50">
                What's on your mind?
            </textarea>
            <label>Picture url:</label>
            <input type="text"/>
        </form>
    )
}
