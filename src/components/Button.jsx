import Button from 'react-bootstrap/Button';

function Btn({children, className}) {
    return (
        <>
            <style type="text/css">
                {
                    `.btn-cpStyle {
                        background-color: #c1e09f;
                        border: none;
                        color: #47433b;
                        padding: 15px 40px;
                        font-size: 1rem;
                    
                    &:hover {
                        background-color: #abc78c;
                        color: #47433b;
                    }

                    & svg {
                        fill: #47433b
                    }
                }
                    .btn-radius25 {
                        border-radius: 25px;
                    }

                    .btn-radius5 {
                        border-radius: 5px;
                    }

                    `
                }
            </style>

            <Button variant="cpStyle" className={className}>
                {children}
            </Button>
        </>
    );
}

export default Btn;