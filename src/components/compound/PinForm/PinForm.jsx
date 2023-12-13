// import { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
// import { useGlobalContext } from '../../../context';
// import styles from './PinForm.module.scss'
// const PasscodeInput = ({ onSubmit }) => {
//   const {theme} = useGlobalContext()
//   const [passcode, setPasscode] = useState(['', '', '', '']);
//   const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

//   const handleChange = (index, value) => {
//     if (/^\d$/.test(value)) {
//       const newPasscode = [...passcode];
//       newPasscode[index] = value;
//       setPasscode(newPasscode);
//       if (index < 3 && value !== '') {
//         inputRefs[index + 1].current.focus();
//       }
//       if (index === 3 && value !== '') {
//         onSubmit(newPasscode.join(''));
//       }
//     } else if (value === '') {
//       const newPasscode = [...passcode];
//       newPasscode[index] = '';
//       setPasscode(newPasscode);
  
//       // Allow navigating to the previous input field when deleting digits
//       if (index > 0) {
//         inputRefs[index - 1].current.focus();
//       }
//     }
//   };

//   return (
//     <div
//     style={{width:'100%', display:'flex', gap:'20px'}}
//     >
//       {passcode.map((digit, index) => (
//         <input
//           key={index}
//           type="text"
//           value={digit}
//           maxLength="1"
//           onChange={(e) => handleChange(index, e.target.value)}
//           ref={inputRefs[index]}
//           style={{height:'64px', padding:'8px 16px', width:'75px', borderRadius:'8px' }}
//           className={`${styles.pinForm} ${styles[theme]}`}

//         />
//       ))}
//     </div>
//   );
// };

// PasscodeInput.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

// export default PasscodeInput;



import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../context';
import styles from './PinForm.module.scss';

const PasscodeInput = ({ onSubmit }) => {
  const { theme } = useGlobalContext();
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
    } else if (value === '') {
      const newPasscode = [...passcode];
      newPasscode[index] = '';
      setPasscode(newPasscode);

      // Allow navigating to the previous input field when deleting digits
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').trim();
    const pasteValues = pasteData.split('').filter((char) => /^\d$/.test(char)).slice(0, 4);

    const newPasscode = [...passcode];
    pasteValues.forEach((value, index) => {
      newPasscode[index] = value;
    });

    setPasscode(newPasscode);
    onSubmit(newPasscode.join(''));

    inputRefs[Math.min(pasteValues.length - 1, 3)].current.focus();
  };

  return (
    <div style={{ width: '100%', display: 'flex', gap: '20px' }}>
      {passcode.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          maxLength="1"
          onChange={(e) => handleChange(index, e.target.value)}
          onPaste={handlePaste}
          ref={inputRefs[index]}
          style={{ height: '64px', padding: '8px 16px', width: '75px', borderRadius: '8px' }}
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
