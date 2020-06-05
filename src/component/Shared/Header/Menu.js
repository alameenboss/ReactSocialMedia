import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Messages from './Messages';
import { menuClick } from '../../../redux/actions';
import { Link } from 'react-router-dom';

const subMenu = function (smenu) {
    let subMenuList = smenu.map((value) =>
        <li key={value.name}>
            <Link to={value.navigateTo}>
                {value.name}
            </Link>
        </li>);
    return subMenuList;
}

const mainMenu = function (menu, dispatch) {
    return menu.map((value) =>
        <li key={value.name}>
            {value.name == "Messages" || value.name === "Notification" ?
                <div onClick={() => dispatch(menuClick(value))}>
                    <Link to={value.navigateTo}>
                        <span>
                            <img src={value.imageurl} alt="" />
                            <span className="badge badge-pill badge-light">3</span>
                        </span>
                        {value.name}
                    </Link>
                </div>
                :
                <div>
                    <Link to={value.navigateTo} title={value.name}>
                        <span>
                            <img src={value.imageurl} alt="" />
                        </span>
                        {value.name}
                    </Link>
                </div>
            }
            {
                value.submenu != undefined ?
                    <ul> {subMenu(value.submenu)} </ul>
                    : ""
            }
            {
                value.name === "Messages" || "Notification" ?
                    <Messages title={value.title} showmessage={value.showmessage}></Messages>
                    : ""
            }

        </li>);
}

const Menu = (props) => {
    const menu = useSelector(state => state.menu);
    const dispatch = useDispatch();

    return (
        <nav className={props.toggleClassName}>
            <ul>
                {mainMenu(menu, dispatch)}
            </ul>
        </nav>
    )
}

export default Menu
