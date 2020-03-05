import React from 'react'
import Slidescroller from '../components/subcomponents/slidescroller' 


const Home = () => (
    <div>
    <div><Slidescroller /></div><div className="homebio">
    <h1 className="hometitle">Sky's teaching philosphy</h1>
    <p className="hometext"> SkyLimit Fitness is dedicated to helping athletes crush their goals – whether that be crossing the finish line for the first time or breaking the ribbon. With an emphasis on coach-athlete communication, injury prevention, and performance optimization, Coach Sky wants to help you find your happiest, healthiest self on the way to your race.  </p>
    <img className="skyphoto" src={require('../images/Sky.jpg')}></img>
    <h4>Coach Sky</h4>
    <br />
    </div>
    <h3 className="hometagline">  SkyLimit Fitness will keep you accountable for your goals and help you maintain focus and balance. Let us help you unlock your potential and find your happiest, healthiest self. </h3>
    <div className="homeinfo">
    <h3 className="homesubtitle">What sets Skylimit Fitness apart? </h3>
    <div className="hometext">SkyLimit Fitness doesn’t just create training plans! <br />  We emphasize whole-body health by looking at the three building blocks of your wellness:
     <ul> <li>fitness</li> <li>nutrition</li> <li>mental health.</li> </ul> With training plans and nutrition coaching all in one place,
      we help you forge a lifestyle geared toward a healthy balance between your fitness, health and wellness goals. With communication sessions 
      dedicated to your short-term goals and progress.</div>
      
    </div>
    <img className="fitnessguyphoto" width="400px" height="300"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.businessinsider.com%2Fimage%2F543171a2eab8eac12faf9c65%2Fimage.jpg&f=1&nofb=1"></img>
<div className="home3">
    <h4 className="coachskywill">Coach Sky will:</h4>
    <ul className="homelist">
        <li>Help you look beyond your season of training and toward your life-long journey with fitness, and develop healthy training and recovery habits (say goodbye to yearly burnout and over-training injuries) </li>
        <li>Educate you and help foster a healthier relationship with your body through proper nutrition grounded in science (time to ditch that dieting trend)</li>
        <li>Encourage a newfound focus on mental wellness and self-care so you can reach your greatest potential in all areas of life</li>
    </ul>
    </div>

   
    <div>
    <h1>Testimonials</h1>


    <div className="meet">
    <h2 className="meettitle">Meet Coach Sky</h2>

    </div>
    </div>
</div>
)
export default Home