import { useNavigate } from "react-router-dom"
import icon from "./Asset/icons8-hard-working-48.png"
import thumbnail from "./Asset/Screenshot (510).png"
import thumbnail2 from "./Asset/Screenshot (526).png"
import thumbnail3 from "./Asset/Screenshot (528).png"
import thumbnail4 from "./Asset/Screenshot (530).png"
import thumbnail5 from "./Asset/Screenshot (532).png"
import thumbnail6 from "./Asset/Screenshot (534).png"
import thumbnail7 from "./Asset/Screenshot (538).png"
import thumbnail8 from "./Asset/Screenshot (539).png"
import thumbnail9 from "./Asset/Screenshot (541).png"
import thumbnail10 from "./Asset/Screenshot (542).png"
import thumbnail11 from "./Asset/Screenshot (562).png"
import thumbnail12 from "./Asset/Screenshot (588).png"
import thumbnail13 from "./Asset/Screenshot (610).png"

const MyWork = ()=>{
    const navigate = useNavigate()
    const handleRoute = (path)=>{
        navigate(path)
    }
    return(
        <div className="workpage">
        <div className="head">
            <img  src={icon} width={50} height={50} style={{ border:"5px solid rgba(0,0,0,0.7)",boxShadow:"3px 3px 3px black" , borderRadius:"100%" , marginRight:"20px"}} alt="profile"/>
            <p>My Work</p>
            <div onClick={()=>{handleRoute("/")}} className="home-btn">HOME</div>
            <div onClick={()=>{handleRoute("/aboutme")}}>ABOUT ME</div>
        </div>
        
        <div className="works">
            <div><h2 style={{color:"black"}}>Full Stack:</h2></div>
            <div className="works-wrapper">
                <div className="thumb"><a href="https://laundrycart-ui.onrender.com"><div><img src={thumbnail} alt="icon"/></div> <div className="des">Laundry Cart</div></a></div>
                <div className="thumb"> <a href="https://instaclone-front.onrender.com"><div><img src={thumbnail2} alt="icon"/></div><div className="des">InstaClone</div></a></div>
                <div className="thumb"> <a href="https://todo-ui-2m1r.onrender.com"><div><img src={thumbnail3} alt="icon"/></div><div className="des">Todo-List</div></a></div>
                <div className="thumb"> <a href="https://task-manager-omr0.onrender.com/"><div><img src={thumbnail13} alt="icon"/></div><div className="des">Task-Manager</div></a></div>
                <div className="thumb"> <a href="https://my-gallery-app-ui.onrender.com"><div><img src={thumbnail12} alt="icon"/></div><div className="des">My-Gallery</div></a></div>
            </div>
            <div><h2 style={{color:"black"}}>React-JS:</h2></div>
            <div className="works-wrapper">
                <div className="thumb"><a href="https://book-search-app-ui.onrender.com"><div><img src={thumbnail4} alt="icon"/></div> <div className="des">Book Search</div></a></div>
                <div className="thumb"><a href="https://e-commerce-e1qe.onrender.com"><div><img src={thumbnail5} alt="icon"/></div> <div className="des">E-Commerce</div></a></div>
                <div className="thumb"><a href="https://react-form-2.onrender.com"><div><img src={thumbnail6} alt="icon"/></div> <div className="des">React-Form</div></a></div>
                <div className="thumb"><a href="https://qr-generator-5s1p.onrender.com"><div><img src={thumbnail7} alt="icon"/></div> <div className="des">QR-Generator</div></a></div>
                <div className="thumb"><a href="https://toogle-theme.onrender.com"><div><img src={thumbnail8} alt="icon"/></div> <div className="des">Toogle-theme</div></a></div>
                <div className="thumb"><a href="https://quiz-app-mcxs.onrender.com"><div><img src={thumbnail9} alt="icon"/></div> <div className="des">Quiz-App</div></a></div>
                <div className="thumb"><a href="https://shopping-list-6xy0.onrender.com"><div><img src={thumbnail10} alt="icon"/></div> <div className="des">Shopping-List</div></a></div>
                <div className="thumb"><a href="https://weather-app-ui.onrender.com"><div><img src={thumbnail11} alt="icon"/></div> <div className="des">Weather-App</div></a></div>
            </div>
            </div>
        </div>
    )
}

export default MyWork
