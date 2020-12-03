import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';

const Profile_img = Styled.img`
max-width: 40px;
height: 40px;
border-radius: 50%;
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
export default function CommentComponent({ comments, date, usernameId }) {
    const { state, findUser } = useContext(Context);
    const { userObj, users } = state;

    findUser(usernameId)

    const commentsElement = comments && userObj !== {} ? comments.map(comment => {

        return <Feed_article key={comment.id}>
            <Comment_container>
                {users.map(user => {
                    return (
                        <div key={user.id}>
                            <Profile_img className="feed__profile" src={user.profile} alt={`${user.name}'s profile picture`} />
                            <span>{user.name}</span>
                        </div>
                    )
                })
                }
                <p className="feed__comment">
                    {comment.comment}
                </p>
            </Comment_container>
            <p className="feed__time_container">
                <time dateTime={date}>{comment.date}</time>
            </p>
        </Feed_article>
    }) : <p>No comment!</p>
    return (
        <div>
            {commentsElement}
        </div>
    )
}
