import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Skills.scss";

import Figure from "../../components/Figure/Figure";
import Nav from "../../components/Nav/Nav";
import Redirect from "../../components/Redirect/Redirect";
import Filter from "../../components/Filter/Filter";

class Skills extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
            <Nav/>
            <main className="skills">
                <div className="skills__container">
                    <aside className="skills__content skills__content--filter">
                        <p 
                            className="skills__header">
                            Navigate
                        </p>
                        <ul className="skills__links">
                            <li>
                                <Link
                                    to="Overview"
                                    className="project__link"
                                    activeClass="active" 
                                    smooth={true}
                                    onSetActive={this.handleSetActive}
                                    onSetInactive={this.handleSetInactive}
                                    spy={true} 
                                    offset={-240}
                                    duration={500}>
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="Design"
                                    className="project__link"
                                    activeClass="active" 
                                    smooth={true}
                                    onSetActive={this.handleSetActive}
                                    onSetInactive={this.handleSetInactive}
                                    spy={true} 
                                    offset={-240}
                                    duration={500}>
                                    Design
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="Development"
                                    className="project__link" 
                                    smooth={true}
                                    offset={-240} 
                                    duration={500}>
                                    Development
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="Product" 
                                    className="project__link"
                                    smooth={true}
                                    offset={-240} 
                                    duration={500}>
                                    Product
                                </Link>
                            </li>
                        </ul>
                        <Filter />
                    </aside>
                    <section className="skills__content skills__content--skills">
                        <Element
                            name="Overview"
                            className="skills__block">
                                <h1>My Skillset</h1>
                                <br></br>
                                <br></br>
                                <p>My goal is to keep on learning new skills to gain a better understading of how each discipline comes together to create digital products. Due to this I'll be updating this space with my current process. However, if you would like to view a more traditional resume, follow the link below:</p>
                                <br></br>
                                <div className="skills__action">
                                    <a 
                                        className="skills__button"
                                        href="">
                                        Resume
                                    </a>
                                </div>
                                <br></br>
                                <br></br>
                        </Element>
                        <Element
                            name="Design"
                            className="skills__block">
                                <h2>Design</h2>
                                <br></br>
                                <h3>Research</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>UI/UX</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>Prototyping</h3>
                                <br></br>
                                <Figure />
                        </Element>
                        <Element
                            name="Development"
                            className="skills__block">
                                <h2>Development</h2>
                                <br></br>
                                <h3>Front-End (Web)</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>Back-End (Web)</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>Mobile</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                        </Element>
                        <Element 
                            name="Product"
                            className="skills__block">
                                <h2>Product</h2>
                                <br></br>
                                <h3>Management</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                                <h3>Marketing</h3>
                                <br></br>
                                <Figure />
                                <br></br>
                        </Element>
                        <article className="skills__block">
                            <Redirect 
                                text="Notice any skill gaps?"
                                link="/contact"
                                cta="Let's Chat"
                            />
                        </article>
                    </section>
                </div>
            </main>
            </>
        );

    }
};

export default Skills;


/*

import React from 'react';
import "./Skills.scss";

import Nav from "../../components/Nav/Nav";

const Skills = () => {
    return (
        <>
        <Nav/>
        <section className="filter">
            <div className="filter__container">
                <div className="filter__section">
                    <h1>What are you looking for?</h1>
                    <p>My skillset will keep on growing so inquire below to see if I have what you need!</p>
                </div>
                <form className="filter__form">
                    <input 
                        className="filter__input"
                        placeholder="Discipline"
                    />
                    <input 
                        className="filter__input"
                        placeholder="Type"
                    />
                    <input 
                        className="filter__input"
                        placeholder="Keywords"
                    />
                </form>
            </div>
        </section>
        <section className="skills">
            <div className="skills__container">
                <p>These are the skills</p>
            </div>
        </section>
        </>
    );
};

export default Skills;

*/