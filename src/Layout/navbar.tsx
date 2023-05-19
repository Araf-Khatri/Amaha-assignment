import Section from "../Components/section";
import logo from './../Assets/logo.svg'

const Navbar = () => {
  return (
    <div className="sticky py-2 bg-white">
      <Section classname="flex justify-between">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <div></div>
      </Section>
    </div>
  );
};

export default Navbar;
