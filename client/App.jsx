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
      profile: {name: '', email: '', bio: '', icon: ''},
      name: '',
      email: '',
      bio: '',
      icon: '',
      edit: false,
      messages: [],
    }
    this.toggleEditView = this.toggleEditView.bind(this);
    this.editFormInput = this.editFormInput.bind(this);
  }

  /*
  ----------------------
    HANDLES EDIT POPUP
  ----------------------
  */
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

  /*
  ------------------------------
    HOLDS VALUES FOR EDIT FORM
  ------------------------------
  */
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

  /*
  --------------------------------------------
    RETRIEVES THE USER DATA FROM THE DATABASE
  --------------------------------------------
  */

  componentDidMount() {
    $.ajax({
      url: '/data',
      dataType: 'json',
      success: (data) => {
        this.setState({
          profile: {
            name: data.user.name,
            email: data.user.email,
            bio: data.user.bio,
            icon: data.user.icon,
          },
          name: data.user.name,
          email: data.user.email,
          bio: data.user.bio,
          icon: data.user.icon,
          messages: data.messages,
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
          {/* EDIT BIO POPUP  */}
          <EditProfile
            styles={styles}
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
          styles={styles}
          profile={this.state.profile}
          toggleEditView={this.toggleEditView}
        />
        <div className={styles.postsContainer}>
          <PostMessage
            styles={styles}
          />
          <AllMessages
            styles={styles}
            messages={this.state.messages}
          />
        </div>
      </div>
    );
  }

}

export default App;