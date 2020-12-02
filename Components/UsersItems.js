import React, {useContext} from 'react';
import Styled from 'styled-components';
import {Context} from "../Context";

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

const Profile_img = Styled.img`
max-width: 40px;
height: 40px;
border-radius: 50%;
`


export default function UsersItems({usernameId, date}) { 
    const { state, findUser } = useContext(Context);
    const { userObj } = state;
   
    findUser(usernameId)
    
    return (
        <div>
              {userObj != {} && userObj ?
                    <Feed_header className="feed_header">
                        <h2 className="feed_heading">
                            <Profile_img className="feed__profile" src={userObj.profile} alt={`'s profile picture`} />
                            <span>{userObj.name}</span>
                        </h2>
                        {
                            date && <p className="feed__time_container">
                            <time dateTime={date}>{date}</time>
                        </p>
                        }
                    </Feed_header>: ""
                }
        </div>
    )
}
