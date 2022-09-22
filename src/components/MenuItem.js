import React from "react";

function MenuItem({ name, subMenu }) {
  return (
    <li>
      <p className="menu_item">
        <div className="menu_icon">
          <i class="bi bi-calendar2-range-fill"></i>
        </div>
        <span>name</span>
      </p>
      <ul className="sub_menu">
        <li>
          <p>{subMenu}</p>
        </li>
        <li>
          <p>{subMenu}</p>
        </li>
      </ul>
    </li>
  );
}

export default MenuItem;
