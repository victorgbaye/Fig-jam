import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../context';
import styles from './PinForm.module.scss'
const PasscodeInput = ({ onSubmit }) => {
  const {theme} = useGlobalContext()
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    if (/^\d$/.test(value)) {
      const newPasscode = [...passcode];
      newPasscode[index] = value;
      setPasscode(newPasscode);
      if (index < 3 && value !== '') {
        inputRefs[index + 1].current.focus();
      }
      if (index === 3 && value !== '') {
        onSubmit(newPasscode.join(''));
      }
    } else if (value === '' && index > 0) {
      // Allow navigating to the previous input field when deleting digits
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div
    style={{width:'100%', display:'flex', gap:'20px'}}
    >
      {passcode.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          maxLength="1"
          onChange={(e) => handleChange(index, e.target.value)}
          ref={inputRefs[index]}
          style={{height:'64px', padding:'8px 16px', width:'75px', borderRadius:'8px' }}
          className={`${styles.pinForm} ${styles[theme]}`}

        />
      ))}
    </div>
  );
};

PasscodeInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default PasscodeInput;


