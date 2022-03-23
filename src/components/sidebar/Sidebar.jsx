import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          
            <Link to="/Entrepreneurs" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Entrepreneurs
              </li>
            </Link>
            
            <Link to="/Investors" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Investors
              </li>
            </Link>
            <Link to="/Coachs" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Coachs
              </li>
            </Link>
            <Link to="/projects" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Projects
              </li>
            </Link>
            <Link to="/Eveements" className="link">
            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon" />
              Evenements
            </li>
            </Link>
            <Link to="/Articles" className="link">
            <li className="sidebarListItem">
              <ArticleIcon className="sidebarIcon" />
              Articles
            </li>
            </Link>
            

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            
          <Link to="/Investment" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Investement
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
