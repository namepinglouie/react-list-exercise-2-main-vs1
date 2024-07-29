import "../src/ResultsCard.css";

function ResultsCard({percentage, title, description}) {
    return (
        <div className="card">
            <h1>{percentage}</h1>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    )
}

export default ResultsCard;