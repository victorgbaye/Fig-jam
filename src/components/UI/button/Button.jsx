import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const Button = ({ onClick, label, style, type }) => {
  return (
    <button onClick={onClick} style={style} className={styles.DefaultButtonStyle} type={type}>
    {label}
  </button>
  )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    style: PropTypes.object,
  };
export default Button