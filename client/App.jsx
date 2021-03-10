/* MODULES */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import $ from 'jquery';
/* COMPONENTS AND STYLE */
import styles from './styles.module.css';
import Bio from './Bio.jsx';
import EditBio from './EditBio.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {name: '',email: '',bio: '', icon: ''},
      edit: false,
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/profile',
      dataType: 'json',
      success: (profile) => {
        this.setState({
          name: profile.name,
          email: profile.email,
          bio: profile.bio,
          icon: profile.icon
        })
      }
    })
  }

  render () {
    return (
      <>
        <div>Hey</div>
        <Bio profile={this.state.profile}/>
        <EditBio profile={this.state.profile}/>
      </>
    );
  }

}

export default App;