import "./SkillBar.css";

export default function SkillBar({ Skill, Percent, Knowledge }) {
  return (
    <>
      <div className="skillBar">
        <p>{Skill}</p>
        <div className="barContainer">
          <div
            className="skillprogress"
            style={{ width: `${Percent}%`,
                     backgroundColor: "#135305", 
                     color: 'white',
                     height: '100%',
                     display: 'flex',
                     alignItems: 'center',
                     fontSize: '1.5rem'
                  }}
          >
            {Percent}%
          </div>
        </div>
        <div className="knowledgeContainer">
          <p>{Knowledge}</p>
        </div>
      </div>
    </>
  );
}
