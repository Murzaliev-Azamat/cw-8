import React from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORIES} from "../../types.d";


const CategoryList = () => {

  return (
      <ul className="nav d-flex flex-column mt-2">
        <NavLink to={"/"} className={({ isActive }) => isActive ? 'nav-link disabled p-0' : 'nav-link p-0'}>All</NavLink>
      {CATEGORIES.map((category) => (
          <li key={category.id} className="nav-item">
            <NavLink to={"/quotes/" + category.id} className={({ isActive }) => isActive ? 'nav-link disabled p-0' : 'nav-link p-0'}>{category.title}</NavLink>
          </li>
      ))}
      </ul>
  );
};

export default CategoryList;