import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import Messages from './Messages';
import { Link } from 'react-router-dom';




const Menu = (props) => {
    const menu = useSelector(state => state.menu);
    const [showMsg, toggleMsg] = useState(false);
    const [showNot, toggleNot] = useState(false);
    const handleMsg = (name)=>{
        if(name === "Messages"){
            toggleMsg(!showMsg) 
            toggleNot(false)
        }
        else if(name === "Notification"){
            toggleMsg(false)
            toggleNot(!showNot)
        }
        else{
            toggleMsg(false)
            toggleNot(false)
        }
    }
    return (
        <nav className={props.toggleClassName}>
            <ul>
                {
                    menu.map((value) =>
                        <li key={value.name}>
                            {value.name === "Messages" || value.name === "Notification" ?
                                <div onClick={() => handleMsg(value.name)}>
                                    <Link to={value.navigateTo} >
                                        <span>
                                            <img src={value.imageurl} alt="" />
                                            <span className="badge badge-pill badge-light">3</span>
                                        </span>
                                        {value.name}
                                    </Link>
                                </div>
                                :
                                <div onClick={() => handleMsg(value.name)}>
                                    <Link to={value.navigateTo} title={value.name}>
                                        <span>
                                            <img src={value.imageurl} alt="" />
                                        </span>
                                        {value.name}
                                    </Link>
                                </div>
                            }
                            {

                                value.submenu !== undefined ?
                                    <ul> {
                                        value.submenu.map((value) =>
                                            <li key={value.name} onClick={() => handleMsg(value.name)}>
                                                <Link to={value.navigateTo}>
                                                    {value.name}
                                                </Link>
                                            </li>)
                                    } </ul>
                                    : ""
                            }
                            {
                                value.name === "Messages"  && <Messages title={value.title} showmessage={showMsg}></Messages>
                            }
                             {
                                value.name === "Notification" && <Messages title={value.title} showmessage={showNot}></Messages>
                            }

                        </li>)
                }
            </ul>
        </nav>
    )
}

export default Menu
