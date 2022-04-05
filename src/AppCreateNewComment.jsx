import { useRef } from "react"
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

export const AppCreateNewComment = ({createComment, num}) => {
    const textareaRef = useRef();
    const getComment = () => {
        createComment(textareaRef.current.value, num)
        textareaRef.current.value=''
    }
    return (
        <div className="comment__app__main__create">
            <textarea ref={textareaRef} name="create__new" id="textarea__create" cols="100" rows="5" placeholder="Add new comment"></textarea>
            <Button onClick={() => getComment()} icon={<PlusOutlined />}>Add a comment</Button>
        </div>
    )
}