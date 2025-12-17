import React from "react";

function UserInfo({ name, age }) {
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserInfo;
