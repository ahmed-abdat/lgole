import { useNavigate } from "react-router-dom";
import Logo from "/img/logo.png";

function Header() {

  // handel click to go to home page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center p-3 header">
    <img src={Logo} alt="logo" className="w-14 cursor-pointer" onClick={handleClick}/>
  </header>
  )
}
export default Header;
