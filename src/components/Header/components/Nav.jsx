import React from "react";

const Nav = () => {

    const navItems = [
        {
            id:1,
            name: "Home",
            path: "/"
        },
        {
            id:2,
            name: "Discover",
            path: "/"
        },
        {
            id:3,
            name: "Activities",
            path: "/"
        },
        {
            id:4,
            name: "About",
            path: "/"
        },
        {
            id:5,
            name: "Contact",
            path: "/"
        },
    ]

  return (
    <nav>
      <ul className="hidden xl:flex items-center gap-[48px]">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.path} className="text-lg hover:text-primary">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
