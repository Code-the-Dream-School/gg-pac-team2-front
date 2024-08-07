import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const InputWithLabel = ({ label, className, type, placeholder, inputRef }) => {
    return (
        <>
            <style type="text/css">
                {
                    `.form-control {
                        &:focus {
                            border-color: #c1e09f;
                            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
                            outline: 0 none;
                        }
                    }`
                }
            </style>
            <FloatingLabel label={label} className={className} >
                <Form.Control type={type} placeholder={placeholder} ref={inputRef} />
            </FloatingLabel>
        </>
    )
}
export default InputWithLabel;