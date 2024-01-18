import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/components/share/HotelComment.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { HotelCommentProps } from "../../types";

export const HotelComment: React.FC<HotelCommentProps> = ({ comment }) => {
  return (
    <div className="hotel-comment mb-4">
      <div className="profile-img">
        <div className="img">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <div className="comment-content">
        <div className="name">{comment.user}</div>
        <div className="date">{comment.commentDate}</div>
        <hr className="m-0"></hr>
        <div className="comment mt-2">{comment.comment}</div>
      </div>
    </div>
  );
};
