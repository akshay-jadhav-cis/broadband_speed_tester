function ResultCard({
    title,
    value,
    unit
}) {

    return (

        <div className="card">

            <h3>{title}</h3>

            <h1>{value}</h1>

            <p>{unit}</p>

        </div>

    );

}

export default ResultCard;