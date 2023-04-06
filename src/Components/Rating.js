import "./Rating.css";

function Rating(props) {
    const rating = props.rating;
    const ratingNumber = Number(rating.split('/')[0].split('(')[1]);
    const percentage = (ratingNumber / 5) * 100;
    return (
        <div className="box">
            <div className="ratebox" style={{ width: `${percentage}%` }}></div>
            <div className="rating">
                {rating}
            </div>
        </div>
    )
}

export default Rating;