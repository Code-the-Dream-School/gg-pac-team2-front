import Button from "react-bootstrap/Button";

function Btn({ children, className }) {
  return (
    <>
      <style type="text/css">
        {`.btnStyleA {
                        background-color: #41c5e7;
                        border: none;
                        color: white;
                        padding: 15px 40px;
                        font-size: 1rem;
                        font-weight: 700;
                    
                    &:hover {
                        background-color: #41c5e7;
                        color: white;
                        text-shadow: 1px 1px 10px white;
                        }
                    }

                    .btnStyleB {
                        background-color: transparent;
                        border: 3px solid white;
                        color: #eefbfb;
                        padding: 10px 40px;
                        font-size: 1rem;
                        font-weight: 700;

                    &:hover {
                        background-color: white;
                        color: #41c5e7;
                        }

                    & svg {
                        fill: #47433b
                       }
                    }

                    .btnRadius25 {
                        border-radius: 25px;
                    }

                    .btnRadius5 {
                        border-radius: 5px;
                    }

                    .loginBtn {
                        padding: 14px 16px;
                        color: #eefbfb;
                        background-color: #ff914d;
                        width: 100%;
                        font-size: 1rem;
                        font-weight: 700;
                        padding: 10px 10px;


                        &:hover {
                            background-color: white;
                            border: 2px solid #ff914d;
                            color: #ff914d;
                        }
                    }

                    .demoBtn {
                        padding: 14px 16px;
                        color: #eefbfb;
                        background-color: #1a4a7a;
                        width: 100%;
                        font-size: 1rem;
                        font-weight: 700;
                        padding: 10px 10px;

                        &:hover {
                            background-color: white;
                            border: 2px solid #1a4a7a;
                            color: #1a4a7a;
                        }
                    }
                    `}
      </style>

      <Button variant="cpStyle" className={className}>
        {children}
      </Button>
    </>
  );
}

export default Btn;
