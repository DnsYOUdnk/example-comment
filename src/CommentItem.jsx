export const CommentItem = ({comment}) => {
    const {author, avatar, content } = comment
    return  ( 
              <li className="comment__app__main__list__item">
                <div className="comment__app__item__avatar">
                  <img src={avatar} alt={author} />
                </div>
                <div className="comment__app__item__description">
                  <p>{author}</p>
                  <p>{content}</p>
                </div>
              </li>
            )   
}