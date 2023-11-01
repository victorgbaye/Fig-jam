import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import styles from './Alert.module.scss'
import failureIcon from '../../../assets/failureIcon.svg'
import successIcon from '../../../assets/successIcon.svg'
import X from '../../../assets/X.svg'

const Alert = ({ type, message, children }) => {
    const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const handleClose = () => {
    setVisible(false);
  };
  return (
        visible ?
        (
            <div className={`${styles.alert} ${type === 'success' ? styles.success : styles.failure}`}>
                {/* {type === 'success' ? <img src={successIcon}/> :  <img src={failureIcon}/>} */}
                <div className={styles.alertContent}>
                    <img src={type === 'success' ? successIcon :  failureIcon}/>
                    <div className={styles.AlertmessageStyle}>
                        <p className={styles.messageStyle}>{message}</p>
                        <p className={styles.child}>{children}</p>
                    </div>
                </div>
                <img src={X} onClick={handleClose}/>
            </div>
        ) : null
  )
}
Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'failure']).isRequired,
    message: PropTypes.string,
    children: PropTypes.string,
  };
export default Alert