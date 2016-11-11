var React = require('react');

const DEFAULT_LABEL = 'Input text: ';

var AuthInput = React.createClass({
  getDefaultProps: function() {
    return {
      userInput: '',
      inputType: 'text',
      inputLabel: DEFAULT_LABEL
    };
  },
  getInitialState: function() {
    var isPassword = (this.props.inputType === 'password');
    return {
      elementID: 'input_' + Math.random().toString(16).slice(2),
      userInput: '',
      isObfuscated: isPassword
    };
  },
  handleUserInput: function(e) {
    this.setState({userInput: e.target.value});
  },
  render: function() {
    var label = DEFAULT_LABEL;
    if (this.props.inputLabel === DEFAULT_LABEL) {
      if (this.props.inputType === 'password') {
        label = 'Password: ';
      } else if (this.props.inputType === 'username') {
        label = 'Username: ';
      }
    }
    return (
      <div className='auth'>
        <label htmlFor="{this.state.elementID}" className='auth'>{label}</label> 
        <input  className='auth'
                id={this.state.elementID}
                onChange={this.handleUserInput} 
                value={this.state.userInput}
                type={this.state.isObfuscated ? 'password' : 'text'}
        />
        <br />
      </div>
    );
  }
});

export default AuthInput;