import React from 'react';

import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      bio: '',
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
        })
      }
    })
  }

  render () {
    return (
      <>
        <div>Hey</div>
        <div >
          <i class="far fa-grin-squint"></i>
          <div>{`name: ${this.state.name}`}</div>
          <div>{`email: ${this.state.email}`}</div>
          <div>{`bio: ${this.state.bio}`}</div>
        </div>

      </>
    );
  }

}

export default App;