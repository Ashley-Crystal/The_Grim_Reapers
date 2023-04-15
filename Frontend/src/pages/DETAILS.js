import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DETAILS.css";

const DETAILS = () => {
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
    <div className="details">
      <div className="details-child" />
      <button className="logout" onClick={onLogoutClick}>
        <div className="events">LOGOUT</div>
      </button>
      <button className="team" onClick={onTeamClick}>
        <div className="events">TEAM</div>
      </button>
      <button className="event" onClick={onEventClick}>
        <div className="events">EVENTS</div>
      </button>
      <button className="home" onClick={onHomeClick}>
        <div className="events">HOME</div>
      </button>
      <img className="goodwill-icon-1" alt="" src="/goodwillicon-1@2x.png" />
      <textarea className="details-item" />
      <textarea className="event-details" placeholder="EVENT DETAILS" />
      <textarea className="details-inner" />
      <div className="themes-community-connect-container">
        <p className="themes">Themes:</p>
        <ul className="community-connect-an-online-p">
          <li className="community-connect-an">
            Community Connect: An online platform that connects local non-profit
            organizations with volunteers, donors, and resources to address
            social issues in their communities. The platform could streamline
            the process of matching volunteers with relevant causes,
            facilitating donations, and organizing community events to foster
            collaboration and support among different organizations.
          </li>
          <li className="community-connect-an">
            EduTech for All: A mobile app that provides free access to
            educational resources, such as digital textbooks, interactive
            tutorials, and practice exercises, for underprivileged students in
            remote or underserved areas. The app could be designed to work
            offline and cater to different learning levels and subjects,
            empowering students to continue learning despite limited access to
            formal education.
          </li>
          <li className="community-connect-an">
            HealthCare Access: A telemedicine platform that connects doctors and
            healthcare professionals with underserved communities, providing
            remote consultations and medical advice. The platform could also
            offer features such as appointment scheduling, prescription
            management, and health education resources, to bridge the gap in
            healthcare access for communities with limited medical facilities.
          </li>
          <li className="community-connect-an">
            Sustainable Solutions: A web-based platform that promotes
            sustainable lifestyle choices and empowers individuals and
            communities to take action against climate change. The platform
            could provide information and tools for reducing carbon footprint,
            promoting sustainable consumption, and advocating for environmental
            policies, encouraging collective action for a more sustainable
            future.
          </li>
          <li className="community-connect-an">
            Inclusive Tech: An accessibility-focused project that develops
            technological solutions to enhance the accessibility of digital
            content and services for people with disabilities. This could
            include developing tools for screen readers, captioning, sign
            language interpretation, or other assistive technologies to make
            digital content, websites, and applications more inclusive and
            accessible to everyone.
          </li>
          <li>
            Empowerment Through Coding: A coding and tech skills training
            program aimed at empowering marginalized and underrepresented
            communities with the skills needed for careers in the technology
            industry. The program could offer coding workshops, mentorship, and
            resources to individuals from diverse backgrounds, empowering them
            to pursue tech-related opportunities and bridge the digital divide.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DETAILS;
