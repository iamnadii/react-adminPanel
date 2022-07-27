import React from "react";
import "../sidebar/sidebar.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BorderStyleIcon from "@mui/icons-material/BorderStyle";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">nadiiAdmin</div>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          <p className="items">MAIN</p>
          <li>
            <DashboardCustomizeIcon className="icons" />
            <span>Dashboard</span>
          </li>
          <p className="items">LISTS</p>
          <li>
            <PeopleAltIcon className="icons" />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icons" />
            <span>Products</span>
          </li>
          <li>
            <BorderStyleIcon className="icons" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningIcon className="icons" />
            <span>Delivery</span>
          </li>
          <p className="items">USEFUL</p>
          <li>
            <QueryStatsIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icons" />
            <span>Notifications</span>
          </li>
          <p className="items">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icons" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icons" />
            <span>Settings</span>
          </li>
          <p className="items">USER</p>
          <li>
            <AccountCircleIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <p className="items">THEME</p>
          <li>
            <LightModeIcon className="light" />
            <span>Light</span>
          </li>
          <li>
            <DarkModeIcon className="dark" />
            <span>Dark</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
