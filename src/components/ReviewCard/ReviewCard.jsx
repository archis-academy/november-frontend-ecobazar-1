ximport "./ReviewCard.scss";

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div className="review-left">
        <img
          src="public/images/reiew.png"
          alt="Kristin Watson"
          className="avatar"
        />
      </div>

      <div className="review-center">
        <h4>Kristin Watson</h4>
        <div className="stars">
          ★★★★★
        </div>
        <p>Duis at ullamcorper nulla, eu dictum eros.</p>
      </div>

      <div className="review-right">
        <span>2 min ago</span>
      </div>
    </div>
  );
};

export default ReviewCard;