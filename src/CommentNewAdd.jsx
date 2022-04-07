import { Form, Button, Input } from 'antd';

const { TextArea } = Input;
let a = false

export const CommentNewAdd = ({ onChange, handleAddName, onSubmit, submitting, value, name }) => (
    <div className='textarea__element'>
      <Form.Item>
        <Input showCount maxLength={20} onChange={handleAddName} value={name} placeholder='Add your name' autoFocus/>
        <br />
        <br />
        <TextArea showCount maxLength={200} rows={4} onChange={onChange} value={value} placeholder='Add your comment'/>
      </Form.Item>
      <Form.Item>
        <Button loading={submitting ? true : false} onClick={onSubmit}>
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );