import Button from '../../components/Button';
import { Link } from "react-router-dom";
import info from './info.module.css';
import 'animate.css';

function Info() {

    return (
        <div className='container'>

            <div className='row'>
                <div className='col-12 mt-5 ms-2'>
                    <Link to="/"><img src="./images/logo.png" /></Link>
                </div>
                <div className='col-12 justify-content-center m-auto mt-2'>
                    <div className={`p-2 mt-1 mb-4 rounded-5`}>

                        <div className={info.content}>
                            <div className={info.contentInner}>
                                <h1 className={`animate__animated animate__slideInDown monsFont ${info.textShadow} ${info.bigText}`} style={{ letterSpacing: '1.5px' }}><strong>School Carpool Project</strong></h1>
                                <h1 className='position-relative' style={{ top: '-17px', letterSpacing: '1.2px' }}>Collaborative Win-Win Initiatives Empowering </h1>
                                <div className={`border border-1 p-5 rounded-2 shadow ${info.bgPattern2}`}>
                                    <h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5f6368">
                                            <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
                                        </svg>
                                        &nbsp;Time-Saving and Convenience:
                                    </h3>
                                    <p className={`${info.paraStyle}`}>
                                        One of the most compelling advantages of a school carpool system is the time-saving aspect. Parents can save considerable time by rotating driving responsibilities, reducing the frequency of school drop-offs and pick-ups. This shared responsibility allows parents to allocate their time more efficiently, balancing work, household chores, and personal activities better. Additionally, carpooling helps in reducing traffic congestion around schools during peak hours, ensuring a smoother and quicker commute for everyone involved. This added convenience can significantly reduce stress and improve overall time management for busy families..
                                    </p>
                                </div>
                                <div className={`border border-1 px-5 pt-5 pb-2 rounded-2 shadow ${info.bgPattern3}`}>
                                    <h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5f6368">
                                            <path d="M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z" />
                                        </svg>
                                        &nbsp;Environmental and Economic Advantages:
                                    </h3>
                                    <p className={info.paraStyle}>
                                        Implementing a school carpool system has substantial environmental and economic benefits. Fewer cars on the road reduce traffic congestion and lower greenhouse gas emissions, contributing to a healthier environment. Families participating in carpools can also save money on fuel and vehicle maintenance costs. By sharing rides, the overall number of trips is decreased, leading to significant savings in fuel consumption and wear and tear on vehicles. These economic benefits make carpooling an attractive option for many families looking to reduce their transportation expenses.
                                    </p>
                                    <div className='text-center p-5'>
                                        <img src="../../images/happyPeople.gif" alt="" />
                                    </div>
                                </div>
                                <div className={`border border-1 p-5 rounded-2 shadow ${info.bgPattern2}`}>
                                    <h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5f6368">
                                            <path d="M440-360h80v-100h100v-80H520v-100h-80v100H340v80h100v100Zm40 279q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z" />
                                        </svg>
                                        &nbsp;Enhanced Safety and Supervision:
                                    </h3>
                                    <p className={`${info.paraStyle} px-5 py-3`}>
                                        One of the most significant benefits of a school carpool system is the enhanced safety and supervision it provides. By pooling resources, parents can ensure that their children are traveling with trusted individuals. This reduces the number of unknown drivers and the risks associated with them. Carpooling also allows for more consistent oversight, as parents can take turns driving, ensuring that each trip is monitored by a responsible adult. This collective effort helps create a safer environment for children during their commute to and from school.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Button className={`mt-5 p-5 pb-4 w-100 btn-radius5 btnStyle text-success shadow ${info.textShadow} `} >
                            <h1>
                                <svg width="78px" height="78px" viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path fill="#595959" d="M4 43L16 43 16 61.0052288C16 61.5546258 15.544239 62 14.9975267 62L5.00247329 62C4.44882258 62 4 61.5490746 4 61.0052288L4 43zM48 43L60 43 60 61.0052288C60 61.5546258 59.544239 62 58.9975267 62L49.0024733 62C48.4488226 62 48 61.5490746 48 61.0052288L48 43z"></path> <path fill="#B4DFFB" stroke="#22BA8E" stroke-linecap="round" stroke-width="2" d="M12.3711017,24.9348588 C12.7184326,23.313981 14.3157786,21.7091828 15.9427546,21.3972219 C15.9427546,21.3972219 21,20 32,20 C43,20 48.0723587,21.3999341 48.0723587,21.3999341 C49.6892503,21.7313413 51.2822327,23.317086 51.6288983,24.9348588 L54,36 L10,36 L12.3711017,24.9348588 Z"></path> <path fill="#22BA8E" d="M3.71780829,42.9726036 C3.32137372,38.0171715 7.03239867,34 11.9988624,34 L52.0011376,34 C56.9710721,34 60.6786654,38.0166825 60.2821917,42.9726036 L59.3987243,54.015946 C59.178515,56.768563 56.7824659,58.7400895 54.0286526,58.4518815 C54.0286526,58.4518815 45.5000217,57.2639083 32.0000145,57.2639083 C18.5000074,57.2639083 9.95932405,58.4530727 9.95932405,58.4530727 C7.22036501,58.7551323 4.82075324,56.7594154 4.60127568,54.015946 L3.71780829,42.9726036 Z"></path> <rect width="18" height="8" x="23" y="45" fill="#5B68C0" rx="3"></rect> <rect width="11" height="2" x="9" y="52" fill="#ECECEC"></rect> <rect width="11" height="2" x="45" y="52" fill="#ECECEC"></rect> <path fill="#ECECEC" d="M7.3274374,44.9646244 C7.14659872,43.8795923 7.88158174,43.1602876 8.96657956,43.3575599 L16.0334204,44.6424401 C17.1195323,44.839915 18,45.8877296 18,47 L18,47 C18,48.1045695 17.1125667,49 16.000385,49 L9.99961498,49 C8.89525812,49 7.85244656,48.1146793 7.6725626,47.0353756 L7.3274374,44.9646244 Z"></path> <path fill="#ECECEC" d="M46.3274374,44.9646244 C46.1465987,43.8795923 46.8815817,43.1602876 47.9665796,43.3575599 L55.0334204,44.6424401 C56.1195323,44.839915 57,45.8877296 57,47 L57,47 C57,48.1045695 56.1125667,49 55.000385,49 L48.999615,49 C47.8952581,49 46.8524466,48.1146793 46.6725626,47.0353756 L46.3274374,44.9646244 Z" transform="matrix(-1 0 0 1 103 0)"></path> <path fill="#22BA8E" d="M55,30.532984 C55,29.429567 55.8629578,28.7747813 56.9307258,29.0713836 L64,31.0350708 L64,32.5396981 C64,33.641712 63.1041422,34.5350708 62.0026083,34.5350708 L55,34.5350708 L55,30.532984 Z"></path> <path fill="#22BA8E" d="M0,30.532984 C0,29.429567 0.862957835,28.7747813 1.9307258,29.0713836 L9,31.0350708 L9,32.5396981 C9,33.641712 8.10414219,34.5350708 7.0026083,34.5350708 L0,34.5350708 L0,30.532984 Z" transform="matrix(-1 0 0 1 9 0)"></path> <path fill="#22BA8E" d="M27,33.9979131 C27,32.8944962 27.8874333,32 28.999615,32 L35.000385,32 C36.1047419,32 37,32.8982606 37,33.9979131 L37,38 L27,38 L27,33.9979131 Z"></path> <path fill="#80D25B" d="M47.5044647,14.529591 C50.2658885,14.529591 52.5044647,12.1876959 52.5044647,9.29882178 C52.5044647,6.40994771 47.5044647,-2.47040899 47.5044647,-2.47040899 C47.5044647,-2.47040899 42.5044647,6.40994771 42.5044647,9.29882178 C42.5044647,12.1876959 44.743041,14.529591 47.5044647,14.529591 Z" transform="rotate(75 47.504 6.03)"></path> <path fill="#80D25B" d="M17.5044647,14.529591 C20.2658885,14.529591 22.5044647,12.1876959 22.5044647,9.29882178 C22.5044647,6.40994771 17.5044647,-2.47040899 17.5044647,-2.47040899 C17.5044647,-2.47040899 12.5044647,6.40994771 12.5044647,9.29882178 C12.5044647,12.1876959 14.743041,14.529591 17.5044647,14.529591 Z" transform="scale(-1 1) rotate(75 0 -16.783)"></path> <path stroke="#22BA8E" stroke-linecap="round" stroke-width="2" d="M44,7 C37.372583,7 32,12.372583 32,19"></path> <path stroke="#22BA8E" stroke-linecap="round" stroke-width="2" d="M32,7 C25.372583,7 20,12.372583 20,19" transform="matrix(-1 0 0 1 52 0)"></path> </g> </g></svg>
                                &nbsp;Join carpool now!
                            </h1>
                        </Button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Info;