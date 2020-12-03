import React, { useContext } from 'react';
import Styled from 'styled-components';
import { Context } from '../Context'; 
import CommentComponent from "./CommentComponent";
import CurrentUser from './CurrentUser';

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


export default function FeedItems({ usernameId, url, legend, date, like, comments, id, increaseLikes, addComment }) {
    const { state } = useContext(Context);
    
    return (
                <Section>
                    <CurrentUser date={date} />
                    <div className="feed__container">
                        <Article >{legend}</Article>
                        <Article>
                            <img src={url} alt={`'s new post`} />
                            <div className="feed_like">
                                <button onClick={() => increaseLikes(id)} className="feed__like_button">Like</button>
                                <span>{like}</span>
                            </div>
                        </Article>
                        <CommentComponent comments={comments} usernameId={usernameId} date={date} />
                        <form className="feed__comment_form" onSubmit={(e) => addComment(e, id)}>
                            <input type="text" name="comment" placeholder="add a comment" />
                            <button>Add</button>
                        </form>
                    </div>
                </Section> 
    )
}
