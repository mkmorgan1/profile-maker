/* MODULES */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import $ from 'jquery';
/* COMPONENTS AND STYLE */
import styles from './styles.module.css';
import Profile from './Profile.jsx';
import EditProfile from './EditProfile.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {name: '',email: '',bio: '', icon: ''},
      edit: false,
    }
    this.toggleEditView = this.toggleEditView.bind(this);
  }

  toggleEditView() {
    this.setState({
      edit: !this.state.edit
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/profile',
      dataType: 'json',
      success: (profile) => {
        this.setState({
          profile: {
            name: profile.name,
            email: profile.email,
            bio: profile.bio,
            icon: profile.icon
          }
        })
      }
    })
  }

  render () {
    return (
      <>
        <div>Hey</div>
        {!this.state.edit && <Profile
          profile={this.state.profile}
          toggleEditView={this.toggleEditView}
        />}
        {this.state.edit && <EditProfile
          profile={this.state.profile}
          toggleEditView={this.toggleEditView}
        />}
      </>
    );
  }

}

export default App;