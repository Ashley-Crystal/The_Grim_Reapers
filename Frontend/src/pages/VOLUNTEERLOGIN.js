import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./VOLUNTEERLOGIN.css";

const VOLUNTEERLOGIN = () => {
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onTeamClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onForumClick = useCallback(() => {
    navigate("/create-forum");
  }, [navigate]);

  const onForum1Click = useCallback(() => {
    navigate("/create-forum");
  }, [navigate]);

  const onRegisterClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onResgister1Click = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onDetailsClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  const onDetails1Click = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  return (
    <div className="volunteer-login">
      <div className="volunteer-login-child" />
      <button className="logout2" onClick={onLogoutClick}>
        <div className="logout3">LOGOUT</div>
      </button>
      <button className="team4" onClick={onTeamClick}>
        <div className="logout3">TEAM</div>
      </button>
      <button className="event1">
        <div className="logout3">EVENTS</div>
      </button>
      <button className="home4" onClick={onHomeClick}>
        <div className="logout3">HOME</div>
      </button>
      <img className="goodwill-icon-12" alt="" src="/goodwillicon-1@2x.png" />
      <textarea className="volunteer-login-item" />
      <img className="volunteer-login-inner" alt="" src="/rectangle-25.svg" />
      <textarea className="blood-donation-xyz" placeholder="Blood Donation" />
      <textarea className="food-donation-" placeholder="Food Donation" />
      <button className="forum" onClick={onForumClick}>
        <img className="forum-child" alt="" src="/rectangle-23.svg" />
        <div className="forum1">FORUM</div>
      </button>
      <button className="forum11" onClick={onForum1Click}>
        <div className="forum2">FORUM</div>
      </button>
      <button className="register1" onClick={onRegisterClick}>
        <div className="forum2">REGISTER</div>
      </button>
      <button className="resgister1" onClick={onResgister1Click}>
        <div className="forum2">REGISTER</div>
      </button>
      <input className="rectangle-input" type="text" />
      <button className="details1" onClick={onDetailsClick}>
        <div className="forum2">DETAILS</div>
      </button>
      <button className="details11" onClick={onDetails1Click}>
        <div className="forum2">DETAILS</div>
      </button>
      <img className="rectangle-icon" alt="" src="/rectangle-16.svg" />
      <textarea className="events4" placeholder="EVENTS" />
      <footer className="rectangle-footer" />
      <div className="copyright-2023">Copyright @ 2023</div>
      <div className="rectangle-div" />
      <input
        className="copyright-20231"
        type="text"
        placeholder="Copyright @ 2023"
      />
    </div>
  );
};

export default VOLUNTEERLOGIN;
