import React, { useContext } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt} from "react-icons/fa";
import { SlSocialReddit } from 'react-icons/sl';
import DataContext from "./context/DataContext";
const Header = ({ title }) => {
  const { width } = useContext(DataContext);
  return (
    <header className="header">
      <SlSocialReddit className="brand"  />
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
