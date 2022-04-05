import { Comment, List } from 'antd';

export const ListComment = ({comments}) => {
    return <List
                dataSource={comments}
                header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
                itemLayout="horizontal"
                renderItem={props => <Comment {...props} />}
            />
}