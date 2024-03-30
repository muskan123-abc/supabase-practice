import React from "react";

const LoginUi = () => {
  return (
    <div>
      <form action="/auth/login" method="post">
        <input
          style={{ backgroundColor: "red !important" }}
          type="text"
          name="email"
        />
        <input
          style={{ backgroundColor: "red !important" }}
          type="password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginUi;
