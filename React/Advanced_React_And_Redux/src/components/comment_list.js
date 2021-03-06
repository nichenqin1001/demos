import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  constructor(props) {
    super(props);
  }

  renderCommentList() {
    return this.props.comments.map(comment => <li className="list-group-item">{comment}</li>);
  }

  render() {
    return (
      <ul
        className="comment-list list-group"
      >
        {this.renderCommentList()}
      </ul>
    );
  }
}

const mapStateToProps = ({ comments }) => { return { comments }; };

export default connect(mapStateToProps)(CommentList);
