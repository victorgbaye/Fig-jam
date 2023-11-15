import PropTypes from 'prop-types';
import styles from './Input.module.scss'
import { useGlobalContext } from '../../../context';
const Input = ({ label, type, placeholder, value, onChange, style }) => {
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
    />
    </div>
  )
}
Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object, 
  };


export const AccountInput = ({label, style, readOnly}) =>{
  const {theme} = useGlobalContext()

    return(
        <div className={`${styles.AccountInputContainer} ${styles[theme]}`}>
            <label>{label}</label>
            <input
             className={styles.AccountInput}
             style={style}
             readOnly={readOnly}
             
            />
        </div>
    )
}

AccountInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    style: PropTypes.object, 
    readOnly: PropTypes.bool.isRequired,
  };



export default Input