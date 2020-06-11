import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <>

<div className="new-comment">



<form
className='form my-1'
onSubmit={e => {
  e.preventDefault();
  addComment(postId, { text });
  setText('');
}}
>
            <div className="input-group">
              <textarea
          name='text'
          cols='30'
          rows='5'
          className="form-control search-input" placeholder="Leave a Comment"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />

              <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit" value='Submit' id="button-addon1">Comment</button>
                      </div>

            </div>
          </form>
          </div>
    </>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
