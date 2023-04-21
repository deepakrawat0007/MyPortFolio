import profile from "./Asset/10.jpg"
import js from "./Asset/icons8-javascript-48.png"
import css from "./Asset/icons8-css3-48.png"
import html from "./Asset/icons8-html-5-48.png"
import mongo from "./Asset/icons8-mongodb-48.png"
import node from "./Asset/icons8-nodejs-48.png"
import express from "./Asset/icons8-express-js-48.png"
import git from "./Asset/icons8-github-48.png"
import react from "./Asset/icons8-react-native-48.png"
import sql from "./Asset/icons8-my-sql-48.png"
import link from "./Asset/icons8-linkedin-48.png"
import "./port.css";
import { useNavigate } from "react-router-dom"


const AboutMe = ()=>{
    const navigate = useNavigate()
    const handleRoute = (path)=>{
        navigate(path)
    }
    return(
        <div className="aboutmepage">
        <div className="head">
            <img onClick={()=>{handleRoute("/")}} src={profile} width={50} height={50} style={{ border:"5px solid rgba(0,0,0,0.7)",boxShadow:"3px 3px 3px black" , borderRadius:"100%" , marginRight:"20px"}} alt="profile"/>
            <p onClick={()=>{handleRoute("/")}}>Deepak Rawat</p>
            <div onClick={()=>{handleRoute("/")}}>HOME</div>
            <div onClick={()=>{handleRoute("/mywork")}}>MY WORK</div>
        </div>
        <div className="aboutme">
            <div><h2>Intro:</h2></div>
            <p>As a fresher Full stack developer with a strong foundation in the MERN (MongoDB, Express.js, React, Node.js) stack and HTML, CSS, and JavaScript, I am eager to contribute my skills to a dynamic team of developers. With a passion for developing modern and efficient web applications, I am excited to take on new challenges and collaborate with others to build innovative solutions.

My proficiency in MongoDB enables me to work with highly scalable and flexible databases, while my experience with Express.js and Node.js allows me to handle server-side development and HTTP requests with ease. Additionally, my proficiency in React enables me to build complex and efficient user interfaces, and my knowledge of HTML, CSS, and JavaScript enables me to create responsive and visually appealing front-end designs.

As a full stack developer, I understand the importance of creating high-quality, maintainable code, and I am committed to implementing best practices and adhering to industry standards. I am a dedicated and motivated team player who enjoys collaborating with others to deliver successful projects. With a strong desire to continuously learn and improve, I am confident that I can make valuable contributions to any development team..</p>
        </div>
        <div className="skills">
            <div><h2>Skills:</h2></div>
            <div className="skill">
                <div className="icons"><div><img src={js} alt="icon"/></div> <div className="desc">JAVASCRIPT</div></div>
                <div className="icons"><div><img src={html} alt="icon"/></div> <div className="desc">HTML</div></div>
                <div className="icons"><div><img src={css} alt="icon"/></div> <div className="desc">CSS</div></div>
                <div className="icons"><div><img src={node} alt="icon"/></div><div className="desc">NODE-JS</div></div>
                <div className="icons"><div><img src={mongo} alt="icon"/></div><div className="desc">MONGO_DB</div></div>
                <div className="icons"><div><img src={react} alt="icon"/></div><div className="desc">REACT-JS</div></div>
                <div className="icons"><div><img src={express} alt="icon"/></div><div className="desc">EXPRESS-JS</div></div>
                <div className="icons"><div><img src={sql} alt="icon"/></div><div className="desc">MY-SQL</div></div>
                <div className="icons"><div><img src={git} alt="icon"/></div><div className="desc">GIT&GIT-HUB</div></div>  
            </div>

            <div className="connect">
                <div><h2>Connect With Me @</h2>
                
                </div>
                <div className="skill">
                <div className="icons"><a href="https://www.linkedin.com/in/deepak-rawat-98a533243"><div><img src={link} alt="icon"/></div></a><div className="desc">Linkedin</div></div>
                <div className="icons"><a href="https://github.com/deepakrawat0007"><div><img src={git} alt="icon"/></div> </a><div className="desc">Github</div></div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AboutMe
