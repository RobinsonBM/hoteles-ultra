import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/components/share/HotelComment.scss";
import { Comentario } from "../../types/HotelModel";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

interface HotelCommentProps {
  comment: Comentario;
}

export const HotelComment: React.FC<HotelCommentProps> = ({ comment }) => {
  return (
    <div className="hotel-comment mb-4">
      <div className="profile-img">
        <div className="img">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <div className="comment-content">
        <div className="name">{comment.usuario}</div>
        <div className="date">{comment.fecha}</div>
        <hr className="m-0"></hr>
        <div className="comment mt-2">{comment.comentario}</div>
      </div>
    </div>
  );
};
