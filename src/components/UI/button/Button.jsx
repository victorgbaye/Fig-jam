import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const Button = ({ onClick, label, style }) => {
  return (
    <button onClick={onClick} style={style} className={styles.DefaultButtonStyle}>
    {label}
  </button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
  };
export default Button