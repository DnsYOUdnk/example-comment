import React, { createElement, useState } from 'react';
import { Comment, Avatar } from 'antd';
import moment from 'moment';
import { CommentNewAdd } from './CommentNewAdd'
import { ListComment } from './ListComment'


class CommentView extends React.Component {
    state = {
      comments: [],
      submitting: false,
      name: '',
      value: '',
    };
  
    handleSubmit = () => {
      if (!this.state.value) {
        return;
      }
  
      this.setState({
        submitting: true,
      });
  
      setTimeout(() => {
        this.setState({
          submitting: false,
          value: '',
          name: '',
          comments: [
            ...this.state.comments,
            {
              author: this.state.name,
            //   avatar: 'https://joeschmoe.io/api/v1/' + moment(),
              avatar: this._urlRandom,
              content: <p>{this.state.value}</p>,
              datetime: moment().fromNow(),
            },
          ],
        });
        
      this.searchRandom()
      }, 1000);
      
    };
  
    handleAddName = e => {
      this.setState({
        name: e.target.value,
      });
    };
    
    _urlRandom = 'https://joeschmoe.io/api/v1/0';

    searchRandom = () => {
        this._urlRandom = 'https://joeschmoe.io/api/v1/' + moment();
        return this._urlRandom
    }


    handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
  
    render() {
      const { comments, submitting, value, name } = this.state;
  
      return (
        <>
          <Comment
            avatar={<Avatar src={this._urlRandom} alt="Han Solo" />}
            content={
              <CommentNewAdd
                onChange={this.handleChange}
                handleAddName={this.handleAddName}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                name = {name}
                value={value}
              />
            }
          />
          {comments.length > 0 && <ListComment comments={comments} />}
        </>
      );
    }
  }

export default CommentView