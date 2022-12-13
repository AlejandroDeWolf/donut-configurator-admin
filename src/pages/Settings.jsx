import React, { useState } from "react";
import { Sidebar } from "../components";
import { SettingsForm } from "../components";

const Settings = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  } else {
    console.log("logged in");
  }

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = this.state;

    fetch("http://localhost:5000/api/users/update-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="wrapper__content section__padding">
          <div className="settings">
            <div className="settings__title">
              <h1>Settings</h1>
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
