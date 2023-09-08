import { BiAward, BiBriefcaseAlt, BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <section className="section">
            <span className="section__subtitle">My Intro</span>
            <h2 className="section__title">About Me</h2>
            <div className="container">
                <div className="about__data">
                    <div className="about__info">
                        <div className="about__box">
                            <BiAward className='about__icon'/>
                            <h3 className="about__title">Experience</h3>
                            <span className="about__subtitle">8 Years Working</span>
                        </div>
                        <div className="about__box">
                            <BiBriefcaseAlt className='bx bx-briefcase-alt about__icon'/>
                            <h3 className="about__title">Completed</h3>
                            <span className="about__subtitle">48+ Projects</span>
                        </div>
                        <div className="about__box">
                            <BiSupport className='bx bx-support about__icon'/>
                            <h3 className="about__title">Support</h3>
                            <span className="about__subtitle">Online 24/7</span>
                        </div>
                    </div>

                    <p className="about__description">
                        Frontend Developer. I create web pages with UI / UX user interfaces,
                        I have years of experience and many clients are happy with the woek i did.
                    </p>
                    <a href="#contact" className="button about__button-contact">Contact Me</a>
                </div>
            </div>
        </section>
  )}

export default About;