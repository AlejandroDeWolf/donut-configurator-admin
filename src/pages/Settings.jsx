import React from "react";
import { Sidebar, SettingsForm } from "../components";

const Settings = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  } else {
    console.log("logged in");
  }

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="wrapper__content section__padding">
          <div className="settings">
            <div className="settings__title">
              <h1>Instellingen</h1>
            </div>
            <div className="settings__form">
              <SettingsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
