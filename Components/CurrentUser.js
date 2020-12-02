import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../Context';

const Div = Styled.div`
    display: flex;

    & p {
        font-size: 18px;
        line-height: 24px;
        margin-right: 16px;
    }
    & img {
        max-width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    
`
const Post_header = Styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
`
export default function CurrentUser({ date }) {
    const { state } = useContext(Context);
    const { users } = state
    const userEl = users.map(user => {
        return (
            <Post_header key={user.id}>
                <Div>
                    <p>{user.name}</p>
                    <img src={user.profile} alt={`${user.name}'profile picture`} />
                </Div>
                {date && <p className="feed__time_container">
                    <time dateTime={date}>{date}</time>
                </p>
                }
            </Post_header>
        )
    })

    return (
        <>
            {userEl}
        </>
    )
}
