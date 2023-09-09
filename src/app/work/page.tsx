import Image from "next/image";
import img01  from "@/assets/img/pediatria.png";
import img02  from "@/assets/img/movies.png";
import img03  from "@/assets/img/sport.png";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";

const Work = () => {
  return (
    <section className="section">
      <h2 className="section__title">My Portfolio</h2>
      <div className="work__container container grid">
        <div className="portofolio__box">
          <div className="portofolio__description">
            <h3 className="portofolio__title">Pediatria APP</h3>
            <p className="portofolio__subtitle">
Welcome to our collaborative pediatric platform, exclusively designed for pediatricians to streamline patient management and maintain comprehensive medical records. Our platform allows pediatricians to create individual accounts, providing them with a secure and user-friendly interface to efficiently manage their patient roster.
This platform records detailed medical histories for each patient, ensuring that pediatricians have the necessary information readily available during appointments. Additionally, it supports the creation of comprehensive records for each patient&quot;s medical attentions, including treatment details and prescriptions.
With the ability to add multiple attentions for each patient, both pediatricians and patients can track ongoing health concerns and treatment progress. Our platform is a valuable resource for pediatric care, providing pediatricians with the tools they need to deliver high-quality healthcare.</p>
            <p className="portofolio__subtitle">FrontEnd: React - Redux - Firebase | Backend: Node.js - Express </p>
            <Link href='https://pediatria-dev.netlify.app/' className ='button portofolio__button'>Link</Link>
            <Link href='https://github.com/Monitel-IOT/pediatria-app-frontend/tree/develop' className ='button portofolio__button'><BiLogoGithub/>FrontEnd</Link>
            <Link href='https://github.com/Monitel-IOT/pediatria-app-backend/tree/develop' className ='button portofolio__button'><BiLogoGithub/>BackEnd</Link>
          </div>
          <div className="portofolio__img">
            <Image width="300" height="100" src={img01} alt="" />
          </div>
        </div>
        <div className="portofolio__box">
          <div className="portofolio__img">
            <Image width="300" height="100" src={img02} alt="" />
          </div>
          <div className="portofolio__description">
            <h3 className="portofolio__title">MOVIES TMDB</h3>
            <p className="portofolio__subtitle">
            Welcome to our project! With your account, you can explore the latest movies. Get movie descriptions, key details, and watch trailers. Join us today and dive into the world of cinema!</p>
            <p className="portofolio__subtitle">FrontEnd: React.js - Next.js - Firebase - Tailwind | Backend: TMDB - API</p>
            <Link href='https://moviestmdb-nextjs-typescript.vercel.app/' className ='button portofolio__button'>Link</Link>
            <Link href='https://github.com/HenryCodeT/moviestmdb-nextjs-typescript' className ='button portofolio__button'><BiLogoGithub/></Link>
          </div>
        </div>
        <div className="portofolio__box">
          <div className="portofolio__description">
            <h3 className="portofolio__title">ISport</h3>
            <p className="portofolio__subtitle">
            An app has been built so that users can participate, create and modify sporting events, thus promoting physical exercise for good health.</p>
            <p className="portofolio__subtitle">FrontEnd: JSP - Bootstrap | Backend: Java Spring Boot - jbcrypt</p>
            <Link href='https://sports-spring-boot.herokuapp.com/' className ='button portofolio__button'>Link</Link>
            <Link href='https://github.com/HenryCodeT/iSport-Java_Spring' className ='button portofolio__button'><BiLogoGithub/></Link>
          </div>
          <div className="portofolio__img">
            <Image width="300" height="100" src={img03} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;