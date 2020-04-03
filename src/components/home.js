import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import Imageshowoff from './subcomponents/imageshowoff'


const Home = () => (
    <div>
      
      <h3 className="hometagline">  SkyLimit Fitness will keep you accountable for your goals and help you maintain focus and balance. Let us help you unlock your potential and find your happiest, healthiest self. </h3>
      <Imageshowoff className="homeslider" />
    <div className="homeinfo">
    <h3 className="homesubtitle">What sets Skylimit Fitness apart? </h3>
    <div className="hometext">SkyLimit Fitness doesn’t just create training plans! <br />  We emphasize whole-body health by looking at the three building blocks of your wellness:
     <ul> <li>fitness</li> <li>nutrition</li> <li>mental health.</li> </ul> With training plans and nutrition coaching all in one place,
      we help you forge a lifestyle geared toward a healthy balance between your fitness, health and wellness goals. With communication sessions 
      dedicated to your short-term goals and progress.</div>
      
    </div> 
    <div className="homebio"></div>
    <div className="meet">
    <h2 className="meettitle">Meet Coach Sky</h2>
    <img className="skybiophoto" alt="sky" src={require('./images/coachskybio.png')}></img>
    <p className="skybio"> Hi, I’m Coach Sky! I’m a Triathlon and Run Coach based out of Spokane, WA/Coeur D’Alene, ID and coach virtually across the world.

I am an Ironman Certified Coach, NASM Certified Personal Trainer, Certified Nutrition Coach with a Weight Loss Specialization.

I am a lifelong swimmer with a love for adventurous racing. My race history is diverse, ranging from ITU World Championships and Team USA, 50 mile ultras, Ragnar Ultras and long distance open water swims. I enjoy the challenge of trying new distances and terrains, always learning and growing in the joy of racing.

When I’m not coaching or training myself, you’ll find me dreaming up cycling inventions and trying to turn my fluffy, loopy doodles into dignified runners.</p>
    </div>






    <div className="homebio">
    <h1 className="hometitle">Sky's teaching philosphy</h1>
    <p className="hometext"> SkyLimit Fitness is dedicated to helping athletes crush their goals – whether that be crossing the finish line for the first time or breaking the ribbon. With an emphasis on coach-athlete communication, injury prevention, and performance optimization, Coach Sky wants to help you find your happiest, healthiest self on the way to your race.  </p>
    <img className="skyphoto" alt="sky" src={require('./images/Sky.jpg')}></img>
    <h4>Coach Sky</h4>
    <br />
   
    </div>
    



    
    




<div className="home3">
    <h4 className="coachskywill">Coach Sky will:</h4>
    <ul className="homelist">
        <li>Help you look beyond your season of training and toward your life-long journey with fitness, and develop healthy training and recovery habits (say goodbye to yearly burnout and over-training injuries) </li>
        <li>Educate you and help foster a healthier relationship with your body through proper nutrition grounded in science (time to ditch that dieting trend)</li>
        <li>Encourage a newfound focus on mental wellness and self-care so you can reach your greatest potential in all areas of life</li>
    </ul>
    </div>

   
    <div>
    <h1 className="testimonialtitle">Testimonials</h1>
    <div className="Testimonials">
    <Carousel>
      <div>
<img className="testimonialimage" alt='' src="./serviceimages/yogabridge.jpg"></img>
        <h4 className="testimonialtext">"Skyler helped me reach a PR for my Sprint race and Ironman 70.3. I had over a 1 hour improvement for the Ironman 70.3 race. She would jump in and swim, run, or bike with me and not just tell me what to do. She believed in me more than I did which made me push even harder.  She is very positive, patient, and knows when she needs to be tough. I would highly recommend her as a coach!"
        <p className="testimonialauthor">-Eric, 1:1 training for IM Boulder 70.3</p>
        </h4></div>
        <div>
          <img className="testimonialimage" alt='' src="./serviceimages/canyonbiking.jpg"></img>
        <h4 className="testimonialtext">"I decided in 2018 I was going to do my second 70.3 in 2019. Although I had a training plan from my first time around, I really wanted a coach to get me through it again. I was not just looking for someone who could provide me with a training plan but someone who knew when adjustments needed to be made. That's where Skyler came in. She had an option for a training plan with weekly check-ins and that was exactly what I needed...When I had concerns over my swim (when didn't I have concerns??) she reached out to not only give me pointers for improving my technique and time but also tips for helping me calm down because I was having anxiety issues. If I wasn't ready for a particular workout (descents on the bike scare me) she adjusted my schedule to put it off until I was ready. All around, Skyler was just a great fit for me. She had more faith in my ability to get through this race than I did! We had a great rapport and I really enjoyed having her as my coach!"
        <p className="testimonialauthor">-Tara, 1:1 training for IM Boulder 70.3</p>
        </h4></div>
        
      
        <div>
          <img className="testimonialimage" alt='' src="./serviceimages/bikeonroad.jpg"></img>
        <h4 className="testimonialtext">"Skyler taught me how to swim with patience and persistence. She is approachable and attentive. She provides meaningful feedback and suggests effective regimen. She taught me how to swim, and improve strength, speed and posture."
        <p className="testimonialauthor">"-Vikas Sarawat, 1:1 swim lessons"</p>
        </h4></div>
        
        
          
      </Carousel>
    </div>

    
    </div>
    
</div>
    );
export default Home