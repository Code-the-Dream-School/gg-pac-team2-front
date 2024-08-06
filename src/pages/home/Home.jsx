import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeStyles from './home.module.css';
import '../../styles/common.css';
import '../../styles/buttons.css'

const Home = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleMoreInfoClick = () => {
        navigate('/moreInfo');
    }
    

    return (
        <>
            <div className='splash'>
                <div className='container overflow-auto'>
                    <div className='row'>
                        <div className='col-6 mt-5'>
                            <Link to="/"><img src="../../images/logo.png" /></Link>
                        </div>
                        <div className='col-6' style={{ marginTop: '150px' }}>
                            <div className={`${homeStyles.monsFont} ${homeStyles.lineSpcSm} ${homeStyles.textShadow}`}>
                                <p>Busy parents ?</p>
                                <p>Want to save time ?</p>
                                <p>interested in saving</p>
                                <p>energy ?</p>
                            </div>
                            <div className={`${homeStyles.lineSpcMd}`} >
                                <img src="../images/line1.png" alt="line" />
                            </div>
                            <div className={`${homeStyles.monsFont} ${homeStyles.monsFontB} ${homeStyles.lineSpcSm} ${homeStyles.textShadow} mt-4`}>
                                <p>Maximize Efficiency</p>
                                <p>with School Carpool</p>
                            </div>
                            <div>
                                <div className='mt-5'>
                                    <Button className='radius25 btnStyle' onClick={handleLoginClick}>
                                        &nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
                                        &nbsp;Sign in&nbsp;&nbsp;
                                    </Button>
                                    <Button className='ms-3 radius25 btnStyle' onClick={handleMoreInfoClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                        &nbsp;More info..
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home