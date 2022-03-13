import Profile from "../../components/Profile/Profile";
import Feed from "../../components/Feed/Feed";
import "./profilelayout.css";
import SiteHeader from "../../components/siteHeader";
import Footer from '../../components/Footer';
import Avatar from "../../components/Avatar/Avatar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const ProfileLayout = () => {

 

  return (
    <>
    <div className="profilelayout">
      <SiteHeader />
    
        {/* profile */}
        <div className="profilelayout_content-profile">
          <Profile />
        </div>
      </div>
          <Footer />
</>
  );
};

export default ProfileLayout;