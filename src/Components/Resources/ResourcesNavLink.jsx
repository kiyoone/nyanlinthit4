import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DisplayTheme } from "../../Context/context";
import { Dropdown } from "flowbite-react";
import { useGetClashQuery } from "../../features/api/apiSlice";

const ResourcesNavLink = ({ tag }) => {
  const theme = useContext(DisplayTheme);
  const { darkMode } = theme;

  if (tag.to === "others") {
    const { data } = useGetClashQuery("resources/category?type=OTHERS");

    return (
      <p className="md:text-lg px-2 py-1 sm:w-fit w-[100%] rounded-lg active:border active:border-black">
        <Dropdown
          id="OhtersDropdown"
          inline={true}
          dismissOnClick={true}
          label="Others"
        >
          {data?.category.map((cate) => (
            <Dropdown.Item>
              <NavLink to={`${tag.to}?category=${cate}`}>
                {({ isActive }) => (
                  <p
                    className={`md:text-lg px-2 py-1 sm:w-fit w-[100%] rounded-lg ${
                      darkMode ? "border-white" : "border-black"
                    } ${isActive ? "border " : ""}`}
                  >
                    {cate}
                  </p>
                )}
              </NavLink>
            </Dropdown.Item>
          ))}
        </Dropdown>
      </p>
    );
  }

  return (
    <NavLink to={tag.to}>
      {({ isActive }) => (
        <p
          className={`md:text-lg px-2 py-1 sm:w-fit w-[100%] rounded-lg ${
            darkMode ? "border-white" : "border-black"
          } ${isActive ? "border " : ""}`}
        >
          {tag.name}
        </p>
      )}
    </NavLink>
  );
};

export default ResourcesNavLink;
