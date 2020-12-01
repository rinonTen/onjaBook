import React, { useState, useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';
import UserItems from '../Components/UsersItems';

const Section = Styled.section`
    margin-bottom: 32px;
    background-color: #ffffff;
    padding: 12px; 
    border-radius: 4px;
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

export default function FeedItems({ username, usernameId, profile, url, legend, date, likes, comments, id, increaseLikes, addComment }) {
    const { state } = useContext(Context);
    const { feed, users } = state;
    let userObj = {};
    if (users && feed) {
        // const findUsernameId = feed.find(post => post.usernameId.id == findUserId)
        // const findUsernameId = feed.map(post => post.usernameId)
        userObj = users.find(user => user.id === usernameId);
    }

    const commentsElement = comments && comments.map(comment => {
        return <Feed_article key={comment.id}>
            <Comment_container>
                <div>
                    <Profile_img className="feed__profile" src={profile} alt={`${username}'s profile picture`} />
                    <span></span>
                </div>
                <p className="feed__comment">
                    {comment.comment}
                </p>
            </Comment_container>
            <p className="feed__time_container">
                <time dateTime={date}>{comment.date}</time>
            </p>
        </Feed_article>
    })

    return (
        <Section>
            <div className="feed__container">
                {userObj != {} && userObj ?
                    <Feed_header className="feed_header">
                        <h2 className="feed_heading">
                            <Profile_img className="feed__profile" src={userObj.profile} alt={`'s profile picture`} />
                            <span>{userObj.name}</span>
                        </h2>
                        <p className="feed__time_container">
                            <time dateTime={date}>{date}</time>
                        </p>
                    </Feed_header>: ""
                }

                <Article >{legend}</Article>
                <Article>
                    <img src={url} alt={`'s new post`} />
                    <div className="feed_like">
                        <button onClick={() => increaseLikes(id)} className="feed__like_button">Like</button>
                        {/* <span>{likes}</span> */}
                    </div>
                </Article>
                {commentsElement}
                <form className="feed__comment_form" onSubmit={(e) => addComment(e, id)}>
                    <input type="text" name="comment" placeholder="add a comment" />
                    <button>Add</button>
                </form>
            </div>
        </Section>
    )
}
