import React, { useState } from "react";
import "../css/sidemenu.css";

function SideMenu() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side_menu ${inactive ? "inactive" : ""}`}>
      <div className="top_menu">
        <div className="logo">
          {/* <img src={logo} /> 
            나중에 DB 에서 데이터 파일 받아서 넣기 
        */}
        </div>
        <div className="menu_toggle_btn">
          <i
            onClick={() => setInactive(!inactive)}
            class="bi bi-arrow-left-square"
          ></i>
          {/* <i class="bi bi-arrow-right-square"></i>
          열고 닫는거 바꿔서 넣기 
          */}
        </div>
        <div className="menu_search">
          <button className="search_icon_btn">
            <i class="bi bi-search"></i>
          </button>
          <input type="text" placeholder="search"></input>
        </div>
        <div className="section_divider"></div>

        <div className="main_content">
          <ul>
            <li>
              <p className="menu_item">
                <div className="menu_icon">
                  <i class="bi bi-speedometer" />
                </div>
                <span>Dash Board</span>
              </p>
            </li>
            <li>
              <p className="menu_item">
                <div className="menu_icon">
                  <i class="bi bi-calendar2-range-fill"></i>
                </div>
                <span>게시판</span>
              </p>
              <ul className="sub_menu">
                <li>
                  <p>Sub_Menu</p>
                </li>
                <li>
                  <p>Sub_Menu</p>
                </li>
              </ul>
            </li>
            <li>
              <p className="menu_item">
                <div className="menu_icon">
                  <i class="bi bi-book"></i>
                </div>
                <span>공부</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="side_menu_footer">
        <div className="user_icon">
          사진
          {/* <img src={ } alt={ }/>
            나중에 DB 에서 데이터 파일 받아서 넣기 
          */}
        </div>
        <div className="user_info">
          <h5>user info</h5>
          <p>SNS Icon</p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
