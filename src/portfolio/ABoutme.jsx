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
        <>
        <div className="head">
            <img onClick={()=>{handleRoute("/")}} src={profile} width={50} height={50} style={{ border:"5px solid rgba(0,0,0,0.7)",boxShadow:"3px 3px 3px black" , borderRadius:"100%" , marginRight:"20px"}} alt="profile"/>
            <p onClick={()=>{handleRoute("/")}}>Deepak Rawat</p>
            <div onClick={()=>{handleRoute("/")}}>HOME</div>
            <div onClick={()=>{handleRoute("/mywork")}}>My Work</div>
        </div>
        <div className="aboutme">
            <div><h2>Intro:</h2></div>
            <p>Hello!! MySelf <b className="col">Deepak Rawat</b> ,I am natively from Uttrakhand currently living and working @ Noida, Uttarpradesh <br></br> I have been Graduated From Delhi University(SOL) After that i have Completed a 6 months Full time bootcamp @ <b className="col">The 10x Academy</b>.<br></br>
            During 6months of bootcamp i learned about <b className="col">javascript</b> programming Language and different <b className="col">Data Structures and Algorithums</b>.<br></br>I have also worked on different <b className="col">Individual Projects</b> and a <b className="col">Team Project</b> based on <b className="col">MERN Stack , HTML & CSS</b>.</p>
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
        </>
    )
}

export default AboutMe