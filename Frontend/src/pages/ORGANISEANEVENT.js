import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ORGANISEANEVENT.css";

const ORGANISEANEVENT = () => {
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

  const onSubmitClick = useCallback(() => {
    navigate("/volunteer-login");
  }, [navigate]);

  return (
    <div className="organise-an-event">
      <div className="organise-an-event-child" />
      <button className="logout6" onClick={onLogoutClick}>
        <div className="logout7">LOGOUT</div>
      </button>
      <button className="team8" onClick={onTeamClick}>
        <div className="logout7">TEAM</div>
      </button>
      <button className="event3" onClick={onEventClick}>
        <div className="logout7">EVENTS</div>
      </button>
      <button className="home8" onClick={onHomeClick}>
        <div className="logout7">HOME</div>
      </button>
      <img className="goodwill-icon-14" alt="" src="/goodwillicon-1@2x.png" />
      <textarea className="urgent2" />
      <input
        className="details4"
        type="text"
        placeholder="WRITE YOUR EVENT DETAILS HERE"
      />
      <button className="submit" onClick={onSubmitClick}>
        <b className="submit1">Submit</b>
      </button>
      <input
        className="title"
        type="text"
        placeholder="WRITE YOUR TITLE HERE"
      />
      <div className="organise-an-event-item" />
      <div className="copyright-20232">Copyright @ 2023</div>
      <textarea className="organise-an-event-inner" />
      <label className="create-your-event">CREATE YOUR EVENT</label>
      <input className="organise-an-event-child1" type="checkbox" />
    </div>
  );
};

export default ORGANISEANEVENT;
