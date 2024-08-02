import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from '../styles/inputs.module.css'

function StandardInputs() {
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className={`mb-3 ${styles.wdt}`}
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </>
    )
}

export default StandardInputs