import React from "react";
import { Sidebar } from "../components";

const Settings = () => {
  return (
    <>
      <Sidebar />
      <div className="settings">
        <div className="settings__content">
          <div className="settings__content__title">
            <h2>Settings</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
