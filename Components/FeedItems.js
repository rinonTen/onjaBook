import React from 'react';
import Styled from 'styled-components';

const Profile_img = Styled.img`
max-width: 40px;
height: 40px;
border-radius: 50%;
`
const Feed_header= Styled.header`
    display: flex;
    justify-content: space-between;

    & span {
        display: block;
    }

    & h2 {
         display: flex;
         column-gap: 32px;
    }
`

const Comment_container = Styled.div`
    display: flex;
    justify-content: space-between;
    & span {
        display: block;
    }
`

export default function FeedItems({ username, profile, url, legend, date, likes, comment, id, increaseLikes }) {
    return (
        <section className="feed__section">
            <div className="feed__container">
                <Feed_header className="feed_header">
                    <h2 className="feed_heading">
                        <Profile_img className="feed__profile" src={profile} alt={`${username}'s profile picture`} />
                        <span>{username}</span>
                    </h2>
                    <p className="feed__time_container">
                        <time dateTime={date}>{date}</time>
                    </p>
                </Feed_header>
                <article className="feed__legend">{legend}</article>
                <div className="feed__image_container">
                    <img src={url} alt={`${username}'s new post`} />
                    <div className="feed_like">
                        <button onClick={() => increaseLikes(id)} className="feed__like_button">Like</button>
                        <span>{likes}</span>
                    </div>
                </div>
                <article className="feed__component">
                    <Comment_container>
                        <Profile_img className="feed__profile" src={profile} alt={`${username}'s profile picture`} />
                        <span>{username}</span>
                        <p className="feed__comment">
                            {comment}
                        </p>
                    </Comment_container>
                    <p className="feed__time_container">
                        <time dateTime={date}>{date}</time>
                    </p>
                </article>
            </div>
        </section>
    )
}
