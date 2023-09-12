import Link from "next/link";
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
                            <span className="about__subtitle">3 Years Working</span>
                        </div>
                        {/* <div className="about__box">
                            <BiBriefcaseAlt className='bx bx-briefcase-alt about__icon'/>
                            <h3 className="about__title">Completed</h3>
                            <span className="about__subtitle">4 Projects</span>
                        </div>
                        <div className="about__box">
                            <BiSupport className='bx bx-support about__icon'/>
                            <h3 className="about__title">Support</h3>
                            <span className="about__subtitle">Online 24/7</span>
                        </div> */}
                    </div>

                    <p className="about__description">
                    I am 28 years old and proud to hold a Bachelor&lsquo;s degree in Electronic Engineering from the esteemed Universidad Nacional San Antonio Abad del Cusco. 
                    With a solid foundation in my field, I have garnered three years of valuable experience in research and development, which has led me to successfully publish a scientific article.
                    While my journey began in the realm of electronic engineering, I found a new passion for web development during my time at a Full Stack Developer Bootcamp, which I had the privilege to attend through a prestigious government scholarship. I initially ventured into freelance projects, honing my skills, and later progressed to become a Frontend Developer at a startup. Subsequently, I thrived as a full-stack developer in the area of operational continuity, where I further expanded my knowledge and abilities.
                    I am thrilled at the prospect of becoming a part of your dynamic and collaborative team. My aim is to contribute my well-honed programming skills and vast knowledge to drive the success of your projects while also fostering my professional and personal growth, including the development of essential soft skills.
                    </p>
                    <Link href="/contact" className="button about__button-contact">Contact Me</Link>
                </div>
            </div>
        </section>
  )}

export default About;