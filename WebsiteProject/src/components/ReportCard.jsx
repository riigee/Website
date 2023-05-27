
import './ReportCard.css';

function ReportCard({ image, title, description, date }) {
    return(
        <div className="report-card">
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div class="bottom">
                <time>{date}</time>
            </div>
        </div>
    );
}

export default ReportCard;