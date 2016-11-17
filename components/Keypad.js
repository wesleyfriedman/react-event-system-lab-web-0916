const React = require('react');

class Keypad extends React.Component {
  constructor(props) {
    super();
    this.enterPassword = this.enterPassword.bind(this);
  }

  enterPassword(event) {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type='password' onKeyUp={this.enterPassword}></input>
    );
  }
}
module.exports = Keypad;
