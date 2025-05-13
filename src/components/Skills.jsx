/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/skills.css'
import SkillBar from './SkillBar'


const skills = [
    {
        label:"HTML",
        value:90
    },
    {
        label:"CSS",
        value:72
    },
    { 
        label:"JAVASCRIPT",
        value:76
    },
    { 
        label:"REACT",
        value:74
    },
    { 
        label:"C#",
        value:92
    },
    { 
        label:"ASP.NET CORE",
        value:92
    },
]


const Skills = () => {
    const half = Math.floor(skills.length / 2);
    return (
        <>
            <section id="skills" className="skills section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Beceriler</h2>
                    <p>Bildiğim 6 temel kodlama araçlarımın hakkında yüzdelik oranı </p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row skills-content skills-animation">

                        <div className="col-lg-6">
                            {
                                 skills.slice(0, half).map((skill, i) => {
                                   return  <SkillBar key={i} label={skill.label} value={skill.value} />
                                 })
                            }
                        </div>
                        <div className="col-lg-6">
                            {
                                 skills.slice(half).map((skill, i) => {
                                   return  <SkillBar key={i} label={skill.label} value={skill.value} />
                                 })
                            }
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Skills