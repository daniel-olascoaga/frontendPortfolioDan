import { useState, useEffect } from "react";
import { getAllSkills } from "../api/skill.api";
import SkillBar from "../components/SkillBar/SkillBar";

import "./Styles.css";

export default function Habilidades() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function loadSkill() {
      const res = await getAllSkills();
      setSkills(res.data);
    }
    loadSkill();
  }, []);
  console.log(skills);

  return (
    <>
      <article className="skillsContainer">
        <h2>HABILIDADES</h2>
        {skills.map((skill) => (
          <section className="skillBarContainer" style={{ whiteSpace: "pre-line" }}>
            <SkillBar
              key={skill.id}
              Skill={skill.skill}
              Percent={skill.percent}
              Knowledge={skill.knowledge}
            />
          </section>
        ))}
      </article>
    </>
  );
}
