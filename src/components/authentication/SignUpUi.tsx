"use client";
import React, { useState } from "react";

const SignUpUi = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <form action="/auth/signup" method="post">
        <input
          style={{ backgroundColor: "red !important" }}
          type="text"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          name="email"
        />
        <input
          style={{ backgroundColor: "red !important" }}
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpUi;
