import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';
import FeedItems from '../Components/FeedItems';
import CurrentUser from '../Components/CurrentUser';

const Section = Styled.section`
    margin-bottom: 32px;
    background-color: #ffffff;
    padding: 12px; 
    border-radius: 4px;
`

export default function Feed() {
    const { state, increaseLikes, addComment } = useContext(Context);
    const { feed, users } = state;

    let userId = '';
    users.map(user => {
        userId = user.id
    })

    const feedElement = feed.length > 0 && feed.map(feed => {
        return ( 
                <FeedItems key={feed.id} {...feed} increaseLikes={increaseLikes} addComment={addComment} />
        )
    })

    return (
        <>
            {feedElement}
        </>
    )
}
