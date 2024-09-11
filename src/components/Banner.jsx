import { useRef } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from './Button';
import { Link } from 'react-router-dom';

const Banner = () => {
  const registerMsgRef = useRef();

  return (
    <>
      <style type="text/css">
        {`
                    .registerMsg {
                        background-color: #41c5e7;
                        padding: 15px 10px;
                        color: white;
                        width: 100%;
                        margin: 10px 0;
                        font-weight: 600;
                    }
                    .noUline {
                        text-decoration: none;
                    }

                    @media only screen and (max-width: 600px) {
                      .registerMsg {
                        flex-direction: column;
                        text-align: center;
                        width: 100% !important;
                      }

                      .registerMsg p {
                        width: 100% !important;
                        margin-bottom: 10px;
                        font-size 1rem;
                      }

                      .col-1, .col-2 {
                        width: 100%;
                        margin: 5px 0;
                      }

                      .col-2 {
                        text-align: center;
                      }

                      .btnStyleB {
                        width: 100%;
                        pading: 10px;
                      }
                    }
                 `}
      </style>

      <div
        className={`registerMsg row justify-content-between align-items-center`}
        ref={registerMsgRef}
      >
        <p className="col-8">
          MAKE A DIFFERENT IN YOUR COMMUNITY, BECOME A MEMBER OF
          SCHOOL CARPOOL
        </p>
        <Link
          to={'/register'}
          className={`col-2 btnRadius25 btnStyleB text-center noUline`}
        >
          APPLY NOW
        </Link>
        <CloseButton
          className="col-1"
          variant="white"
          onClick={() =>
            (registerMsgRef.current.style.display = 'none')
          }
        />
      </div>
    </>
  );
};

export default Banner;
