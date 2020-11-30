import React from 'react';
import Styled from 'styled-components';

const Section = Styled.section`
    margin-bottom: 32px;
    background-color: #ffffff;
    padding: 12px; 
`
const Article = Styled.article`
    margin-bottom: 16px;

    & img {
        margin-bottom: 16px;
    }

    & button {
        margin-right: 16px;
    }
`
const Profile_img = Styled.img`
max-width: 40px;
height: 40px;
border-radius: 50%;
`
const Feed_header = Styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;

    & span {
        display: block;
    }

    & h2 {
         display: flex;
         column-gap: 32px;
    }
`
const Feed_article = Styled.div`
    display: flex;
    justify-content: space-between;
`

const Comment_container = Styled.div`
    & div {
        display: flex;
        column-gap: 48px;
    }
    & span {
        display: block;
    }
`

export default function FeedItems({ username, profile, url, legend, date, likes, comment, id, increaseLikes }) {
    return (
        <Section>
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
                <Article >{legend}</Article>
                <Article>
                    <img src={url} alt={`${username}'s new post`} />
                    <div className="feed_like">
                        <button onClick={() => increaseLikes(id)} className="feed__like_button">Like</button>
                        <span>{likes}</span>
                    </div>
                </Article>
                <Feed_article>
                    <Comment_container>
                        <div>
                            <Profile_img className="feed__profile" src={profile} alt={`${username}'s profile picture`} />
                            <span>{username}</span>
                        </div>
                        <p className="feed__comment">
                            {comment}
                        </p>
                    </Comment_container>
                    <p className="feed__time_container">
                        <time dateTime={date}>{date}</time>
                    </p>
                </Feed_article>
            </div>
        </Section>
    )
}
