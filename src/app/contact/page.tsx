import { useRouter } from "next/navigation";
import React,{ useRef } from "react";
import { BiLogoGithub, BiLogoLinkedinSquare, BiMailSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";



const Contact = () => {
    const form = useRef<any>(null);
    const router = useRouter();
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (form.current) {
            emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
                process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_YOUR_PUBLIC_ID!
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                (error) => {
                console.log(error.text);
                }
            );
        }
        alert("Your message has been sent!");
        router.push("/");
    };
  
    return (
    <section className="contact section" id="contact">
            <span className="section__subtitle">Get in touch</span>
            <h3 className="section__title">Contact Me</h3>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title contact__title-info">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <BiMailSend className='bx bx-mail-send contact__card-icon'/>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">torrescondorihenry@gmail.com</span>
                            <a href="mailto:example@domain.com" target="_blank" className="contact__button">
                                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <BiLogoGithub className='bx bxl-whatsapp contact__card-icon'/>
                            <h3 className="contact__card-title">GitHub</h3>
                            <span className="contact__card-data">HenryCodeT</span>
                            <a href="https://github.com/HenryCodeT" target="_blank"
                                className="contact__button">
                                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <BiLogoLinkedinSquare className='bx bxl-twitter contact__card-icon'/>
                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">henry-tc</span>
                            <a href="https://www.linkedin.com/in/henry-tc/" target="_blank" className="contact__button">
                                Write Me <i className='bx bx-right-arrow contact__button-icon'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title contact__title-form">Write Me your Message</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input type="text" placeholder="Enter name" className="contact__form-input" name="user_name" />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Mail</label>
                            <input type="text" placeholder="Enter email" className="contact__form-input" name="user_email" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Message</label>
                            <textarea name="message" id="" cols={30} rows={10} placeholder="Write your Message"
                                className="contact__form-input "></textarea>
                        </div>


                        <button className="button">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
)}

export default Contact;