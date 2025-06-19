
const Header = () => {
  return (
    <header className="bg-[#1c1d22]  text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo and title */}
        <div>
          <h1 className="text-2xl font-bold">Sabarisan P</h1>
          <p className="text-sm">Software Developer • Chennai</p>
        </div>

        {/* Navigation menu */}
        <ul className="hidden md:flex font-bold space-x-6 text-sm text-gray-300">
          <li className="text-pink-400 border-b-2 border-pink-400 pb-1">About me</li>
          <li>Services</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
