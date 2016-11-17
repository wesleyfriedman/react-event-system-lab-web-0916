const React = require('react');

class EyesOnMe extends React.Component {
  constructor(props) {
    super();
    this.focusFire = this.focusFire.bind(this);
    this.blurFire = this.blurFire.bind(this);
  }

  focusFire(event) {
    console.log('Good!');
  }

  blurFire(event) {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.focusFire} onBlur={this.blurFire}></button>
    );
  }
}
module.exports = EyesOnMe;
