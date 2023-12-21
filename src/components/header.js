import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <header className="hide-when-mobile">
                <h1>
                    <Link to="/">Courses 4 Arab</Link>
                </h1>
                <ul className="flex">
                    <li className="main-list">
                        <NavLink className="main-link" to="/html">
                            HTML
                        </NavLink>
                        {/* <ul className="sub-ul">
                            <li>
                                <a href="">Full Course</a>
                            </li>
                            <li>
                                <a href="">Crash Course</a>
                            </li>
                            <li>
                                <a href="">learn in 1h</a>
                            </li>
                        </ul> */}
                    </li>
                    <li className="main-list">
                        <NavLink className="main-link" to="/css">
                            CSS
                        </NavLink>
                        {/* <ul className="sub-ul">
                            <li>
                                <a href="">Full Course</a>
                            </li>
                            <li>
                                <a href="">CSS Examples</a>
                            </li>
                            <li className="mini-projects">
                                <a href="">mini projects&nbsp; + </a>
                                <ul className="sub-sub-ul">
                                    <li>
                                        <a href="">project 1</a>
                                    </li>
                                    <li>
                                        <a href="">project 2</a>
                                    </li>
                                    <li>
                                        <a href="">project 3</a>
                                    </li>
                                </ul>
                            </li>
                        </ul> */}
                    </li>
                    <li className="main-list">
                        <NavLink className="main-link" to="/javaScript">
                            JavaScript
                        </NavLink>
                        {/* <ul className="sub-ul sub-of-js">
                            <li>
                                <a href="">coming soon🔥</a>
                            </li>
                        </ul> */}
                    </li>
                </ul>
            </header>
            <header className="show-when-mobile">
                <h1>
                    <Link to="/">Courses 4 Arab</Link>
                </h1>
                <label className="absolute" htmlFor="burger">
                    <i className="fas fa-bars" />
                </label>
                <input id="burger" type="checkbox" />
                <div className="show-on-click">
                    <div className="main-div">
                        <label htmlFor="html">
                            <NavLink className="main-label" to="/html">
                                HTML
                            </NavLink>
                            <i className="fas fa-plus" />
                        </label>
                        <input id="html" type="checkbox" />
                        <ul className="sub-div">
                            <li>
                                <NavLink href="">Full Course</NavLink>
                            </li>
                            <li>
                                <NavLink href="">Crash Course</NavLink>
                            </li>
                            <li>
                                <NavLink href="">learn in 1h</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="main-div">
                        <label htmlFor="css">
                            <NavLink className="main-label" to="/css">
                                CSS
                            </NavLink>
                            <i className="fas fa-plus" />
                        </label>
                        <input id="css" type="checkbox" />
                        <ul className="sub-div">
                            <li>
                                <NavLink href="">Full Course</NavLink>
                            </li>
                            <li>
                                <NavLink href="">CSS Examples</NavLink>
                            </li>
                            <li>
                                <label className="mini-projects" htmlFor="mini">
                                    mini projects <i className="fas fa-plus" />
                                </label>
                                <input id="mini" type="checkbox" />
                                <ul className="sub-sub-div">
                                    <li>
                                        <NavLink href="">project 1</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="">project 2</NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="">project 3</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="main-div">
                        <label htmlFor="js">
                            <NavLink className="main-label" to="/javaScript">
                                JavaScript
                            </NavLink>
                            <i className="fas fa-plus" />
                        </label>
                        <input id="js" type="checkbox" />
                        <ul className="sub-div">
                            <li>
                                <NavLink href="">coming soon🔥</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
