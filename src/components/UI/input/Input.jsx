import PropTypes from 'prop-types';
import styles from './Input.module.scss'
import { useGlobalContext } from '../../../context';
const Input = ({ label, type, placeholder, value, onChange, style, name }) => {
  const {theme} = useGlobalContext()

  return (
    <div className={styles.Input}>
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

export default Input