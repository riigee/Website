
import './ReportCard.css';

function ReportCard({ image, title, description, date, url }) {
    return(
        <div className="report-card">
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div class="bottom">
                <time>{date}</time>
                <a href={url}>See full highlights</a>
            </div>
        </div>
    );
}

export default ReportCard;