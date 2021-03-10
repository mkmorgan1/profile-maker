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
    if (this.state.edit) {
      $('body').css('overflow','auto');
    } else {
      $('body').css('overflow','hidden');
    }
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
    const editPopup = this.state.edit
    return (
      <div>
        <form action="/logout?_method=DELETE" method="POST">
          <button type="submit">LOG OUT</button>
        </form>
        <div>Hey</div>
        {/* POPUP EDIT */}
        {editPopup &&
          <EditProfile
            profile={this.state.profile}
            toggleEditView={this.toggleEditView}
          />
        }
        {/* PROFILE SIDEBAR */}
        <Profile
          profile={this.state.profile}
          toggleEditView={this.toggleEditView}
        />
      </div>
    );
  }

}

export default App;