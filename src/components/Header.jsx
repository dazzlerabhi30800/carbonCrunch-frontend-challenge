import React from "react";

const Header = () => {
  const links = [
    { label: "Home", path: "#" },
    { label: "Services", path: "#" },
    { label: "Blog", path: "#" },
    { label: "About Us", path: "#" },
    { label: "Contact", path: "#" },
  ];
  return (
    <header className="flex items-center justify-between pt-[58px] px-14">
      {/* Logo */}
      <div className="flex items-center gap-[6px] text-[20px]">
        <img
          src="./logo.png"
          alt="Carboncrunch"
          className="w-[50px] h-[50px]"
        />
        <p>Carboncrunch</p>
      </div>
      <nav className="flex justify-between gap-32">
        <ul className="flex items-center gap-11 font-medium">
          {links?.map((item, index) => (
            <li key={index} className="hover:text-slate-500 hover:underline">
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 [&_button]:py-[9px] [&_button]:px-4 [&_button]:rounded-md [&_button]:hover:brightness-[0.9]">
          <button className="bg-green-200 min-w-28 text-green-600">
            Login
          </button>
          <button className="bg-green-500 text-black font-bold">
            Book Demo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
