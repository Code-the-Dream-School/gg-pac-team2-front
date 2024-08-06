import Button from 'react-bootstrap/Button';
import '../../styles/common.css';
import '../../styles/buttons.css'
import { Link } from "react-router-dom";
import moreInfoStyles from './more_info.module.css'

function MoreInfo() {

    return (
        <div className='splash'>
            <div className='container overflow-auto'>
                <div className='row'>
                    <div className='col-5 mt-5'>
                        <Link to="/"><img src="./images/logo.png" /></Link>
                    </div>
                    <div className='col-7 justify-content-center m-auto mt-5 pt-5'>
                        <div className={`col-12 p-2 mt-1 mb-4 rounded-5 ${moreInfoStyles.boxStyle}`}>

                            <div className={moreInfoStyles.content}>
                                <div className={moreInfoStyles.contentInner}>
                                    <h1 className='monsFont'>Collaborate, Get Benefits</h1>
                                    <h3 className={moreInfoStyles.contentAuthor} >Promising School Carpool</h3>
                                    <p className={moreInfoStyles.paraStyle}>A thin paint will stick to a thick paint. The shadows are just like the highlights, but we're going in the opposite direction. When you do it your way you can go anywhere you choose.</p>
                                    <p className={moreInfoStyles.paraStyle}>You have to make almighty decisions when you're the creator. When you buy that first tube of paint it gives you an artist license. There we go. The little tiny Tim easels will let you down. Let's just drop a little Evergreen right here.</p>
                                    <p className={moreInfoStyles.paraStyle}>Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Just pretend you are a whisper floating across a mountain. This is your world, whatever makes you happy you can put in it. Go crazy.</p>
                                    <p className={moreInfoStyles.paraStyle}>The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. We'll play with clouds today. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. Don't kill all your dark areas - you need them to show the light. We don't want to set these clouds on fire. Every day I learn.</p>
                                    <blockquote>When you do it your way you can go anywhere you choose.</blockquote>
                                    <p className={moreInfoStyles.paraStyle}>Let's get wild today. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. This is probably the greatest thing to happen in my life - to be able to share this with you.</p>
                                    <p className={moreInfoStyles.paraStyle}>I'm a water fanatic. I love water. This is gonna be a happy little seascape. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Let's put a touch more of the magic here. I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue.</p>
                                    <p className={moreInfoStyles.paraStyle}>And that's when it becomes fun - you don't have to spend your time thinking about what's happening - you just let it happen. Let all these things just sort of happen. Don't fight it, use what happens. Let's put some happy little bushes on the other side now.</p>
                                    <blockquote>Don't fight it, use what happens.</blockquote>
                                    <p className={moreInfoStyles.paraStyle}>If we're going to have animals around we all have to be concerned about them and take care of them. I'll go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red. Anytime you learn something your time and energy are not wasted. This is your world. We want to use a lot pressure while using no pressure at all. Just let go - and fall like a little waterfall.</p>
                                    <p className={moreInfoStyles.paraStyle}>Let's build some happy little clouds up here. Everyone is going to see things differently - and that's the way it should be. Let's do that again. A tree needs to be your friend if you're going to paint him. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it.</p>
                                </div>
                            </div>

                            <Button className={'mt-1 w-100 radius5 btnStyle'}>Join carpool now!</Button>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    );
}

export default MoreInfo;