import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HOME.css";

const HOME = () => {
  const navigate = useNavigate();

  const onEventsClick = useCallback(() => {
    navigate("/volunteer-login");
  }, [navigate]);

  const onTeamClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="home18">
      <div className="home-child" />
      <img className="goodwill-icon-19" alt="" src="/goodwillicon-1@2x.png" />
      <header className="home19">
        <Button className="home20" variant="contained" color="primary">
          HOME
        </Button>
      </header>
      <button className="events11" onClick={onEventsClick}>
        <div className="events12">EVENTS</div>
      </button>
      <button className="team19" onClick={onTeamClick}>
        <div className="events12">TEAM</div>
      </button>
      <button className="login11" onClick={onLoginClick}>
        <div className="events12">LOGIN</div>
      </button>
      <div className="home-item" />
      <img className="home-inner" alt="" src="/frame-1@2x.png" />
      <h1 className="introducing-our-new-container">
        <p className="introducing-our-new">
          Introducing our new web app that is designed to bring people together
          and make the world a better place. Our app is a platform that connects
          non-profit organizations with volunteers and donors who are passionate
          about making a difference in society.
        </p>
        <p className="introducing-our-new">&nbsp;</p>
        <p className="introducing-our-new">&nbsp;</p>
        <p className="introducing-our-new">&nbsp;</p>
      </h1>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <h2 className="our-aim-is">
        Our aim is to promote unity in diversity and inspire a sense of
        community amongst people. With our app, you can easily find and
        participate in events hosted by non-profit organizations in your area.
        Whether it's volunteering your time or making a donation, you can be a
        part of the movement towards positive change.
      </h2>
      <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      <h2 className="at-our-core">
        At our core, we believe that helping others is a passion that unites us
        all. By coming together and working towards a common goal, we can create
        a society where everyone is supported and uplifted. Join us on our
        mission to create a better world, one event at a time.
      </h2>
      <footer className="home-child1" />
      <div className="copyright-20237">Copyright @ 2023</div>
    </div>
  );
};

export default HOME;
