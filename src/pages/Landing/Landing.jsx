import React, { useState } from 'react'
import styles from "./landing.module.css"
import svg from "../../assets/undraw_online-learning_tgmv.svg"
import { SiKnowledgebase } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RxAvatar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import Footer from '../../components/footer/Footer';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { MdTimerOff } from "react-icons/md";

function Landing() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const navigate = useNavigate()
    const [menu, setMenu] = useState(false);

    const routeSignUp = () => {
        setMenu(false)
        navigate("/signUp")
    }


  return (
    <div className={styles.container}>
        {menu && (
            <div className={styles.mobileNav}>
                <div className={styles.mobileMenuItems}>
                    <div className={styles.closeMenu}>
                        <MdOutlineClose style={{ fontSize: "32px", cursor: "pointer" }} onClick={() => setMenu(false)}/>
                    </div>
                    <a href="#about" onClick={() => setMenu(false)}>About us</a>
                    <a href="#testimonials" onClick={() => setMenu(false)}>Testimonials</a>
                    <a href="#contact" onClick={() => setMenu(false)}>Contact us</a>
                    <button onClick={routeSignUp}>Sign up</button>
                </div>
            </div>
        )}
        <nav>
            <div className={styles.logo}>
                <h3>AdvanceNow</h3>
            </div>
            <div className={styles.menuItems}>
                <a href="#about">About us</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact us</a>
                <button onClick={routeSignUp}>Sign up</button>
            </div>
            <GiHamburgerMenu className={styles.hamburger} onClick={() => setMenu(true)}/>
        </nav>
        <section className={styles.hero}>
            <div className={styles.heroInfo}>
                <h1>AdvanceNow</h1>
                <h4>Improve your employability skills at your own pace</h4>
            </div>
            <img src={svg}/>
        </section>
        <section className={styles.aboutWrapper} id="about">
            <div className={styles.about}>
                <h1>Knowledge that grows the more you scroll</h1>
                <div className={styles.aboutItems}>
                    <div className={styles.aboutItem}>
                        <SiKnowledgebase />
                        <h4>Learn from any course</h4>
                        <p>200+ courses to choose from and gain a new skill!</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <MdTimerOff />
                        <h4>Learn at whatever time</h4>
                        <p>Pause your learning and continue whenever you want without strings or attachments.</p>
                    </div>
                    <div className={styles.aboutItem}>
                        <FaBriefcase />
                        <h4>Gain the necessary skills</h4>
                        <p>Each course gives you the necessary skills needed to help you improve your employability.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.testimonials} id="testimonials">
            <div className={styles.testimonialsWrapper}>
                <div className={styles.testimonialsHeader}>
                    <h2>Don't take our word for it.</h2>
                    <h3>Over 1000+ people have learned a new skill!</h3>
                </div>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    // itemClass={styles.carouselItem}
                    partialVisible={false}
                >
                    <div className={styles.testimonial}>
                        <p>This platform has been a game-changer for me! The courses are well-structured, and the certifications helped me land a new job.</p>
                        <div className={styles.testimonialUser}>
                            <div className={styles.userInfoWrapper}>
                                <RxAvatar style={{ fontSize: "32px" }}/>
                                <div className={styles.userInfo}>
                                    <h5>Emily Carter</h5>
                                    <p>8 skills learned</p>
                                </div>
                            </div>
                            <p>5 <FaStar /></p>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <p>I love how easy it is to track my progress through each module. The interactive quizzes and resources kept me engaged throughout the course.</p>
                        <div className={styles.testimonialUser}>
                            <div className={styles.userInfoWrapper}>
                                <RxAvatar style={{ fontSize: "32px" }}/>
                                <div className={styles.userInfo}>
                                    <h5>Rajesh Patel</h5>
                                    <p>3 skills learned</p>
                                </div>
                            </div>
                            <p>4 <FaStar /></p>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <p>The website is very user-friendly, and the support team was quick to help when I had an issue. Some modules could be a bit more detailed, but overall a great experience!</p>
                        <div className={styles.testimonialUser}>
                            <div className={styles.userInfoWrapper}>
                                <RxAvatar style={{ fontSize: "32px" }}/>
                                <div className={styles.userInfo}>
                                    <h5>Sarah Johnson</h5>
                                    <p>6 skills learned</p>
                                </div>
                            </div>
                            <p>5 <FaStar /></p>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <p>The certification I earned here gave my resume a huge boost. The instructors are knowledgeable, and the content is practical and relevant.</p>
                        <div className={styles.testimonialUser}>
                            <div className={styles.userInfoWrapper}>
                                <RxAvatar style={{ fontSize: "32px" }}/>
                                <div className={styles.userInfo}>
                                    <h5>Ahmed Ali</h5>
                                    <p>1 skill learned</p>
                                </div>
                            </div>
                            <p>4 <FaStar /></p>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <p>The flexibility to learn at my own pace was exactly what I needed. Some technical glitches here and there, but nothing that stopped me from completing my course.</p>
                        <div className={styles.testimonialUser}>
                            <div className={styles.userInfoWrapper}>
                                <RxAvatar style={{ fontSize: "32px" }}/>
                                <div className={styles.userInfo}>
                                    <h5>Maria Gonzalez</h5>
                                    <p>5 skills learned</p>
                                </div>
                            </div>
                            <p>5 <FaStar /></p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
        <section className={styles.contact} id="contact">
            <h2>Get in touch</h2>
            <h3>Write to us at hamza@gmail.com</h3>
        </section>
        <Footer />
    </div>
  )
}

export default Landing