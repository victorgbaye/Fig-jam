import PropTypes from 'prop-types';
import styles from './Input.module.scss'
import { useGlobalContext } from '../../../context';
import { useState } from 'react';
import eye from '../../../assets/eye.svg'
import eyeSlash from '../../../assets/eyeslash.svg'; // Adjust the path as needed

import { Link } from 'react-router-dom';
const Input = ({ label, type, placeholder, value, onChange, style, name, hasError, error }) => {
  const { theme } = useGlobalContext();

  return (
    <div className={`${styles.Input} ${styles[theme]}`}>
      <label>{label}</label>
      <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'flex-start'}} >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.DefaultInputStyles} ${styles[theme]} ${hasError ? styles.Error : ''}`}
        style={style}
        name={name}
      />
      {/* <p className={styles.ErrorText}>{error && error}</p> */}
      {error && <p className={styles.ErrorText}>{error}</p>}
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  hasError: PropTypes.bool, // Add this prop type
  error: PropTypes.string // Add this prop type for error text
};

Input.defaultProps = {
  hasError: false, // Default to false if not provided
  error: '' // Default to empty string if not provided
};

export const AccountInput = ({label, style, readOnly, name, value, onChange,placeholder}) =>{
  const {theme} = useGlobalContext()

    return(
        <div className={`${styles.AccountInputContainer} ${styles[theme]}`}>
            <label>{label}</label>
            <input
            value={value}
             className={styles.AccountInput}
             style={style}
             readOnly={readOnly}
             name={name}
             onChange={onChange}
             placeholder={placeholder}
             
            />
        </div>
    )
}

AccountInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object, 
    readOnly: PropTypes.bool.isRequired,
  };


  export const TextArea = ({ label, placeholder, value, onChange, style, name }) => {
    const { theme } = useGlobalContext();
  
    return (
      <div className={styles.Input}>
        <label>{label}</label>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${styles.textAreaStyle} ${styles[theme]}`}
          style={style}
          name={name}
        />
      </div>
    );
  };
  
  TextArea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    style: PropTypes.object,
  };



  export const PasswordInput = ({ label, placeholder, value, onChange, style, name, showForgotPasswordLink, error }) => {
    const { theme } = useGlobalContext();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
  
    return (
      <div className={`${styles.Input} ${styles[theme]}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <label>{label}</label>
          {showForgotPasswordLink && (
            <Link to='/forgot-password' style={{ textDecoration: 'none' }}>
              <p style={{ fontSize: '12px' }} className={styles.forgotpassword}>Forgot password?</p>
            </Link>
          )}
        </div>
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
          <div style={{ width: '100%', position: 'relative' }}>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={`${styles.DefaultInputStyles} ${styles[theme]} ${error ? styles.Error : ''}`}
              style={style}
              name={name}
            />
            <img
              src={isPasswordVisible ? eyeSlash : eye}
              style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
              alt={isPasswordVisible ? "Hide password" : "Show password"}
            />
          </div>
        {error && <p className={styles.ErrorText}>{error}</p>}
        </div>
      </div>
    );
  };
  
  PasswordInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object,
    showForgotPasswordLink: PropTypes.bool,
    error: PropTypes.string, // Add this prop type for error text
  };
  
  PasswordInput.defaultProps = {
    showForgotPasswordLink: false, // Default value is false to hide the link by default
    error: '', // Default value for error is an empty string
  };


export default Input