import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
   <Link to="/posts" className="btn">
        Back To Posts
      </Link>
   
<div className="card">
  <div className="card-body">


  <div className="post-body">
      <PostItem post={post} showActions={false} />

      </div>
      {/* <div className="post-actions">
        <ul className="list-unstyled">
          <li>
            <a href="#" className="like-btn"><i className="far fa-heart" />Like</a>
          </li>
          <li>
            <a href="#"><i className="far fa-comment" />Comment</a>
          </li>
          <li>
            <a href="#"><i className="fas fa-share" />Share</a>
          </li>
        </ul>
      </div> */}
      <div className="post-comments">
        <div className="post-comm">
          <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
      
        </div>

      </div>


  </div>
</div>



    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
