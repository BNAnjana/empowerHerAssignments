import React, { useState } from "react";
import UserInfo from "./UserInfo";

function UserProfile() {
  const [user] = useState({
    name: "John Smith",
    age: 28,
  });
  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;
