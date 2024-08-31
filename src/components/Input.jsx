import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Input = ({ label, className, inputRef, controlClass, inputName, ...props }) => {
  return (
    <>
      <style type="text/css">
        {`.form-control {
            &:focus {
                border-color: #1a4a7a;
                box-shadow: 1px 1px 1px #0000001f inset, 0 0 8px #74afeb6b;
                outline: 0 none;
            }
          }
          .inputStyleA {
            border-radius: 45px;
            padding: 15px 0 15px 60px;
            &:focus + div svg {
              fill: #41c5e7;
            }
            &:focus::placeholder {
              color: #41c5e7;
            }
            &:focus + div svg g g g {
              fill: #41c5e7;
            }
        `}
      </style>
      {controlClass == "inputStyleA" ? (
        <Form.Control ref={inputRef} className={controlClass} {...props} />
      ) : (
        <FloatingLabel label={label} className={className}>
          <Form.Control ref={inputRef} className={controlClass} name={inputName} {...props} />
        </FloatingLabel>
      )}
    </>
  );
};
export default Input;
