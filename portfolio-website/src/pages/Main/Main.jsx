import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Main.scss";

import ProjectPromo from "../../components/ProjectPromo/ProjectPromo";
import Switch from "../../components/Switch/Switch";
import projectsData from "../../data/projectsData";

const Main = () => {

    const projects = projectsData

    return (
        <main className="main">
            <section className="main__container">
                <div className="main__details">
                    <h1 
                        className="main__heading">
                        I'm Thomas Griffiths a Digital Product Designer.
                    </h1>
                    <p className="main__mission">
                        Specializing in crafting novel mobile experiences
                    </p>
                    <div className="main__actions">
                        <div className="main__toggle">
                            <Switch/>
                            Light Mode
                        </div>
                        <Link 
                            className="main__button"
                            to="Projects"
                            smooth={true}
                            duration={500}
                            offset={-240}>
                            <div className="main__cta"/>
                        </Link>
                    </div>
                </div>
            </section>
            <Element 
                className="main__projects"
                name="Projects">
                {projects.map(promo => {
                    const { project, description, preview, link, orientation, code } = promo
                    return (
                        <ProjectPromo
                            project={project}
                            description={description}
                            preview={preview}
                            link={link}
                            orientation={orientation}
                            code={code}
                            autoPlay
                            loop
                        />
                    )
                })}
            </Element>
        </main>
    );
};

export default Main;