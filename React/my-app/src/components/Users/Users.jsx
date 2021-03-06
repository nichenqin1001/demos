import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions';

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div key={user.name} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a href={user.website} className="btn btn-primary" >WebSite</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => { return { users }; };

export default connect(mapStateToProps, action)(Users);
