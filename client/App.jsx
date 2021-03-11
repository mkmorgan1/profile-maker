/* MODULES */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import $ from 'jquery';
/* COMPONENTS AND STYLE */
import styles from './styles.module.css';
import Profile from './Profile.jsx';
import EditProfile from './EditProfile.jsx';
import AllMessages from './AllMessages.jsx';
import PostMessage from './PostMessage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {name: '',email: '',bio: '', icon: ''},
      name: '',
      email: '',
      bio: '',
      icon: '',
      edit: false,
      messages: [{name: 'name', date: 'date', message: 'words'}, {name: 'name2', date: 'date2', message: 'words2'}],
    }
    this.toggleEditView = this.toggleEditView.bind(this);
    this.editFormInput = this.editFormInput.bind(this);
  }

  toggleEditView() {
    if (this.state.edit) {
      $('body').css('overflow','auto');
    } else {
      $('body').css('overflow','hidden');
    }
    this.setState({
      edit: !this.state.edit
    });
  }
  editFormInput(e) {
    switch (e.target.name) {
      case 'name':
        this.setState({
          name: e.target.value
        });
        break;
      case 'email':
        this.setState({
          email: e.target.value
        });
        break;
      case 'bio':
        this.setState({
          bio: e.target.value
        });
        break;
      case 'icon':
        this.setState({
          icon: e.target.value
        });
        break;
      default:
        break;
    }

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
          },
          name: profile.name,
          email: profile.email,
          bio: profile.bio,
          icon: profile.icon
        });
      }
    });
  }

  render () {
    const editPopup = this.state.edit
    return (
      <div className={styles.fullApplication}>
        <div className={styles.header}></div>
        <CSSTransition
          in={editPopup}
          timeout={300}
          classNames={{
            enterActive: styles.alertEnterActive,
            enter: styles.alertEnter,
            exitActive: styles.alertExitActive,
            exit: styles.alertExit,
          }}
          unmountOnExit
        >
          {/* POPUP EDIT */}
          <EditProfile
            profile={{
              name: this.state.name,
              email: this.state.email,
              bio: this.state.bio,
              icon: this.state.icon,
            }}
            toggleEditView={this.toggleEditView}
            editFormInput={this.editFormInput}
          />
        </CSSTransition>

        {/* PROFILE SIDEBAR */}
        <Profile
          profile={this.state.profile}
          toggleEditView={this.toggleEditView}
        />
        <div className={styles.postsContainer}>
          <PostMessage/>
          <AllMessages
            messages={this.state.messages}
          />
        </div>
      </div>
    );
  }

}

export default App;