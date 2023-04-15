import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CREATEFORUM.css";

const CREATEFORUM = () => {
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onTeamClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onEventClick = useCallback(() => {
    navigate("/volunteer-login");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="create-forum">
      <div className="create-forum-child" />
      <button className="logout4" onClick={onLogoutClick}>
        <div className="logout5">LOGOUT</div>
      </button>
      <button className="team6" onClick={onTeamClick}>
        <div className="logout5">TEAM</div>
      </button>
      <button className="event2" onClick={onEventClick}>
        <div className="logout5">EVENTS</div>
      </button>
      <button className="home6" onClick={onHomeClick}>
        <div className="logout5">HOME</div>
      </button>
      <img className="goodwill-icon-13" alt="" src="/goodwillicon-1@2x.png" />
      <textarea className="create-forum-item" />
      <div className="forum-id-04">FORUM ID: 04</div>
      <div className="create-forum-inner" />
      <div className="create-forum-child1" />
      <div className="please-send-the">
        Please send the venue details - John Doe
      </div>
      <div className="thanks-for-reaching">
        Thanks for reaching out. We will share details soon - Admin
      </div>
      <input className="create-forum-child2" type="text" />
      <button className="send-button-371579-removebg-pr" />
      <button className="urgent">
        <div className="urgent1">Urgent</div>
      </button>
      <div className="type1">
        <div className="type-your-message">Type your message here.</div>
      </div>
      <img className="ellipse-icon" alt="" src="/ellipse-3.svg" />
      <img className="create-forum-child3" alt="" src="/ellipse-3.svg" />
      <div className="jd">JD</div>
      <div className="a">A</div>
    </div>
  );
};

export default CREATEFORUM;
