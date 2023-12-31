import Logo from "/img/logo.png";

function Header() {
  return (
    <header className="flex justify-between items-center p-3 header">
    <img src={Logo} alt="logo" className="w-14" />
  </header>
  )
}
export default Header;
