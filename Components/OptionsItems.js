import React, {useEffect, useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';

const Form = Styled.form`
 & input {
     padding: 8px;
     margin-bottom: 8px;
 }

 & button {
    padding: 16px;
     padding-left: 32px;
     padding-right: 32px;
 }
`

export default function OptionsItems() {
    const {state, dispatch} = useContext(Context);
    const {username, userProfileUrl} = state;
    const {feed, users} = state; 

    function addNewUser(e) {
        e.preventDefault();
      const newUser = [{
            "id": Date.now(),
            "name": username,
            "profile": userProfileUrl
          }] 
        dispatch({ type: "SET_USERS", user: newUser })
    }

    return (
        <Form onSubmit={addNewUser}>
            <h3>Option:</h3>
            <label>Username:</label>
            <input type="text" value={username} placeholder="Type your username here" onChange={(e) => {
                dispatch({type:"SET_USERNAME", username: e.target.value})
            }} />
            <label>Profile picture:</label>
            <input type="url" value={userProfileUrl} placeholder="paste a url here" onChange={(e) => {
                dispatch({type: "SET_USERURL", url: e.target.value})
            }} />
            <div className="button__container">
                <button>Save</button>
            </div>
        </Form>
    )
}
