import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./imagerep.css";

const Imagerep = ({ imagerep }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="imagerep">
      <img src={imagerep ? imagerep : user.imagerep} alt="imagerep" />
    </div>
  );
};

export default Imagerep;
