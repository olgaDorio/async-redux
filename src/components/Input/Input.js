import React, { PureComponent } from 'react';

import './Input.css'

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      isValid: true,
      message: '',
    };

    this.myRef = React.createRef();
  }

  validate = () => {
    const isValid = this.myRef.current.checkValidity();

    this.setState({
      isValid: isValid,
      message: this.myRef.current.validationMessage,
    });
  }

  onInput = ({target}) => {
    this.setState(
      {
        value: target.value,
      },
      this.state.isValid ? () => {} : this.validate()
    );
  }

  render() {
    const { pattern, type, required } = this.props;
    const { value, isValid, message } = this.state;
    const className = isValid ? '' : ' Input_invalid'

    return (
      <label className={'Input' + className}>
        <input
          type={type}
          required={required}
          pattern={pattern}
          ref={this.myRef}
          value={value}
          onChange={this.onInput}
          onBlur={this.validate}/>
        <b>{message} {isValid}</b>
      </label>
    );
  }
}

Input.defaultProps = {
  value: '',
  type: 'text',
  required: true,
  pattern: null,
};

export default Input;
