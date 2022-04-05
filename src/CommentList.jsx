import { AppCreateNewComment } from './AppCreateNewComment'
import { CommentItem } from './CommentItem'
import { useState } from 'react'

export const CommentList = () => {
    const arr = localStorage.getItem('commentData') ? JSON.parse(localStorage.getItem('commentData')) : [];

    const [dataState, setDataState] = useState(arr)

    const createComment = (newComment, i) => {
        let data = {
            author: 'Han Solo',
            avatar: `https://joeschmoe.io/api/v1/random[${i}]`,
            content:  newComment
            }
        dataState.push(data)
        setDataState([...dataState])
        console.log(dataState)
        localStorage.setItem('commentData', JSON.stringify(dataState))
    }

    return (
        <div className="comment__app__wrapper">
            <h1 className="comment__app__title">LEAVE A COMMENT</h1>
            <div className="comment__app__main">
                < AppCreateNewComment createComment = {createComment} num={dataState.length}/>
                <ul className="comment__app__main__list__items">
                    {dataState.map((comment,index) => {
                        return < CommentItem  
                        key={index}
                        comment={comment}/> 
                    })}
                </ul>
            </div>
        </div>
    )
}