import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="!flex flex-row w-full justify-between">
                <p className="w-[40%]">Innovin Dev's Portfolio</p>
                <ul className="w-[40%] hidden md:flex gap-2">
                    <li><Link to={'/about'}>About Me</Link></li>
                    <li><Link to={'/contact'}>Contact Me</Link></li>
                    <li><Link to={'/hire'}>Hire Me</Link></li>
                </ul>
                <button className=" w-[20%]">Menu</button>
            </nav>
        </header>
    )
}

export default Header;