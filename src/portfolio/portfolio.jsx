import "./port.css"
import profle from "./Asset/10.jpg";
import {useNavigate} from "react-router-dom"
const PortFolio = ()=>{
    const navigate = useNavigate()
    const handleRoute = (path)=>{
         navigate(path)
    }
    return (
        <>
        <div className="container">
            <div className="head">
                <p>My PortFolio</p>
            </div>
            <div className="profile">
                <img src={profle} alt="Profile"  width={300}/>
            </div>
            <div className="name">
                <h2>Deepak Rawat</h2>
            </div>
            <div className="prof">
                <h2>Full-Stack Developer</h2>
            </div>
            <div className="btns">
                <div><button onClick={()=>{handleRoute("/aboutme")}}>ABOUT ME</button></div>
                <div><button onClick={()=>{handleRoute("/mywork")}}>MY WORKS</button></div>
            </div>

        </div>
        </>
    )
}

export default PortFolio;