import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/UI/button/Button";
import Input, { PasswordInput } from "../../../components/UI/input/Input";
import styles from './Signup.module.scss';
import { useGlobalContext } from "../../../context";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../features/user/userSlice";
import SignupIcon from '../../../assets/SignupIcon.svg';
import signupdark from '../../../assets/signupdark.svg';
import bgdesignleft from '../../../assets/bgdesignleft.svg';
import bgdesignleftdark from '../../../assets/bgdesignleftdark.svg';
import Navigation from "../../../components/compound/Navigation/Navigation";

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Signup = () => {
  const { theme } = useGlobalContext();
  const [signupValues, setSignupValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { user, isLoading } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupValues({ ...signupValues, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!signupValues.firstname) newErrors.firstname = 'First name is required';
    if (!signupValues.lastname) newErrors.lastname = 'Last name is required';
    if (!signupValues.email) newErrors.email = 'Email is required';
    if (!signupValues.password) newErrors.password = 'Password is required';
    if (signupValues.password !== signupValues.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { firstname, lastname, email, password } = signupValues;
    dispatch(registerUser({ firstname, lastname, email, password }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [navigate, user]);

  return (
    <div style={{ background: theme, height: '100vh', maxHeight: '90vh' }}>
      <Navigation />
      <div className={`${styles[theme]}`}>
        <img src={theme === 'dark' ? bgdesignleftdark : bgdesignleft} style={{ position: 'fixed', top: '50%', left: 0, transform: 'translateY(-50%)', height: '70%' }} />
        <div className={styles.SignupContainer}>
          <h4>Sign Up</h4>
          <form onSubmit={onSubmit} className={styles.SignupInputContainer}>
            <Input
              label="First name"
              type="text"
              placeholder='First name'
              style={{ height: '48px' }}
              value={signupValues.firstname}
              onChange={handleChange}
              name='firstname'
              hasError={!!errors.firstname}
              error={errors.firstname}
            />
            <Input
              label="Last name"
              type="text"
              placeholder='Type last name here'
              style={{ height: '48px' }}
              value={signupValues.lastname}
              onChange={handleChange}
              name='lastname'
              hasError={!!errors.lastname}
              error={errors.lastname}
            />
            <Input
              label="Email"
              type="email"
              placeholder='Type email here'
              style={{ height: '48px' }}
              value={signupValues.email}
              onChange={handleChange}
              name='email'
              hasError={!!errors.email}
              error={errors.email}
            />
            <PasswordInput
              label="Password"
              type="password"
              placeholder="Type password here"
              style={{ height: '48px' }}
              value={signupValues.password}
              onChange={handleChange}
              name='password'
              hasError={!!errors.password}
              error={errors.password}
            />
            <PasswordInput
              label="Re-enter password"
              type="password"
              placeholder="Type password here"
              style={{ height: '48px' }}
              value={signupValues.confirmPassword}
              onChange={handleChange}
              name='confirmPassword'
              hasError={!!errors.confirmPassword}
              error={errors.confirmPassword}
            />
            <Button
              label={isLoading ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <img src={theme === 'dark' ? signupdark : SignupIcon} alt="Sign Up" /> Signing up...
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  <img src={theme === 'dark' ? signupdark : SignupIcon} alt="Sign Up" /> Sign Up
                </div>
              )}
              style={{ height: '40px', background: theme === 'dark' ? '#FFF' : isLoading && 'grey', color: theme === 'dark' ? '#222' : '' }}
              type="submit"
              disabled={isLoading}
            />
          </form>
          <p className={styles.authpagelink}>Already have an account? <Link to='/login'><span>Log in</span></Link></p>
        </div>
        <img src={theme === 'dark' ? bgdesignleftdark : bgdesignleft} style={{ position: 'fixed', top: '50%', right: 0, transform: 'translateY(-50%) scaleX(-1)', height: '70%' }} />
      </div>
    </div>
  );
};

export default Signup;
