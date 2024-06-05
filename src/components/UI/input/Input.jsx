import PropTypes from 'prop-types';
import styles from './Input.module.scss'
import { useGlobalContext } from '../../../context';
import { useState } from 'react';
import eye from '../../../assets/eye.svg'
import { Link } from 'react-router-dom';
const Input = ({ label, type, placeholder, value, onChange, style, name }) => {
  const {theme} = useGlobalContext()

  return (
    <div className={`${styles.Input} ${styles[theme]}`}>
        <label>{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.DefaultInputStyles} ${styles[theme]}`}
        style={style}
        name={name}
    />
    </div>
  )
}
Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    style: PropTypes.object, 
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

  export const PasswordInput = ({ label, placeholder, value, onChange, style, name }) => {
    const { theme } = useGlobalContext();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
  
    return (
      <div className={`${styles.Input} ${styles[theme]}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <label>{label}</label>
          <Link to='/forgot-password' style={{textDecoration:'none'}}>
            <p style={{ fontSize: '12px' }}>Forgot password?</p>
          </Link>
        </div>
        <div style={{ width: '100%', position: 'relative' }}>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${styles.DefaultInputStyles} ${styles[theme]}`}
            style={style}
            name={name}
          />
          <img
            src={eye}
            style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            onClick={togglePasswordVisibility}
            alt="Toggle visibility"
          />
        </div>
      </div>
    );
  };
  
  PasswordInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    style: PropTypes.object,
  };
  

export default Input