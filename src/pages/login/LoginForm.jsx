import styles from './loginForm.module.css';
import Button from '../../components/Button';
import InputWithLabel from '../../components/InputWithLabel';
import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';
import 'animate.css';

function LoginForm() {

    const emailInputRef = useRef(null);

    useEffect(() => {
        emailInputRef.current.focus();
    }, []); 

    return (
        <div className='splash'>
            <div className='container overflow-hide'>
                <div className='row'>
                    <div className='col-5 mt-5'>
                        <Link to="/"><img src="./images/logo.png" /></Link>
                    </div>
                    <div className='col-6 justify-content-center m-auto mt-5 pt-5 animate__animated animate__zoomIn animate__faster'>
                        <div className={`col-10 p-5 mt-5 mb-5 rounded-5 position-relative ${styles.boxStyle}`}>
                            <div className={`position-absolute w-100 text-center ${styles.adjustLogoPosition}`}>
                                <svg width="110px" height="110px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#dadada"></path> <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#fafbff"></path> <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#fafbff"></path> </g></svg>
                            </div>
                            <div className={`text-center ${styles.monsFont} mt-3`}>
                                <p>Login</p>
                            </div>
                            <InputWithLabel inputRef={emailInputRef} label="Email address" className={`mb-3`} type="email" placeholder="name@example.com" />
                            <InputWithLabel label="Password" type="Password" placeholder="Password" />
                            <Button className={'mt-4 w-100 radius5 btnStyle'}>Sign in</Button>
                            <div className='mt-3 w-100 text-center' onClick={() => alert('This will redirect to the reset password page')}>
                                Forgot your password ?
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    );
}

export default LoginForm;