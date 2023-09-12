'use client'
import Image from 'next/image'
import img  from "../../public/img01.png";
import Link from 'next/link';

export default function Home() {
  return (
      <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    {/* <span id='head1' className="home__greeting">Hello, I&lsquo;m</span>
                    <h1 id='head1' className="home__name">Henry Torres</h1>
                    <h3 id='head1' className="home__education">Full Stack Developer</h3> */}
                    <div className='home__title'>
                        <h3 id='head1' className="home__name">Hello, I&lsquo;m</h3>
                        <h1 id='head2' className="home__name">Henry Torres</h1>
                        <h3 id='head3' className="home__name">Full Stack Developer</h3>
                        <h1 id='head4' className="home__name">Full Stack Developer</h1>
                    </div>
                    <div className="home__button">
                        {/* <a download="" href="assets/pdf/hailee-Cv.pdf" className="button button--ghost">
                            Download CV
                        </a> */}
                        <Link href="/about" className="button">About</Link>
                    </div>
                </div>
            </div>
        </section>     
  )
}
