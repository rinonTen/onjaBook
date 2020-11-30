import React, {useContext} from 'react';
import {Context} from '../Context';
import FeedItems from '../Components/FeedItems';

export default function Feed() {
    const {feed, increaseLikes} = useContext(Context);

    const feedElement = feed.length > 0 && feed.map(feed => {
        return <FeedItems key={feed.id} {...feed} increaseLikes={increaseLikes}/>
    })
    return (
        <>
            {feedElement}
        </>
    )
}
