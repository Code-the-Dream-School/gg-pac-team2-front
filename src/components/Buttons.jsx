import style from '../styles/buttons.module.css'

function standardButton({ children, className, radius, handleClick }) {
    console.log(radius);
     
    
    return (
        <>
            <button className={`${style.btnStyle} ${className} ${radius}`} onClick={handleClick}>
                {children}
            </button>
        </>
    );
}

export default standardButton;