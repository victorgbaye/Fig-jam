import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const Button = ({ onClick, label, style, type,disabled }) => {
  return (
    <button onClick={onClick} style={style} className={styles.DefaultButtonStyle} type={type} disabled={disabled} >
    {label}
  </button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.any,
    type: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool
  };
export default Button