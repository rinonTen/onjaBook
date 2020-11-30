import React, { useReducer, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Pages/Header';
import Feed from './Pages/Feed';
import AddPost from './Pages/AddPost';
import Options from './Pages/Options'


export default function App() {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/">
                <Feed />
            </Route>
            <Route exact path="/addPost">
                <AddPost />
            </Route>
            <Route exact path="/options">
                <Options />
            </Route>
        </Switch>
        </>
    )
}