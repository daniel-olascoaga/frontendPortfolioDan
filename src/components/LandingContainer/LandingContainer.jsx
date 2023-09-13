import "./LandingContainer.css";

export default function LandingContainer({ Title, Content }) {
  return (
    <>
      <div className="perfilContainer">
        <h3>{ Title }</h3>
        <p>{ Content }</p>
      </div>
    </>
  )
}
