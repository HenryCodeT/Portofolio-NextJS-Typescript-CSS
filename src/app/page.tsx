'use client'
import Image from 'next/image'
import img  from "../../public/img01.png";

export default function Home() {
  return (
      <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__greeting">Hello, I'm</span>
                    <h1 className="home__name">Haliee Keys</h1>
                    <h3 className="home__education">Frontend Developer</h3>

                    <div className="home__button">
                        <a download="" href="assets/pdf/hailee-Cv.pdf" className="button button--ghost">
                            Download CV
                        </a>

                        <a href="#about" className="button">About</a>
                    </div>
                </div>

                <div className="home__handle">
                    <Image src={img} alt="asd " className="home__img"/>
                </div>

                <div className="home__social">
                    <a href="#" target="_blank" className="home__social-link">
                        <i className='bx bxl-linkedin'></i>
                    </a>
                    <a href="#" target="_blank" className="home__social-link">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href="#" target="_blank" className="home__social-link">
                        <i className='bx bxl-dribbble'></i>
                    </a>
                </div>

                <a href="#about" className="home__scroll">
                    <i className='bx bx-mouse home__scroll-icon'></i>
                    <span className="home__scroll-name">Scroll Down</span>
                </a>
            </div>
        </section>     
  )
}
