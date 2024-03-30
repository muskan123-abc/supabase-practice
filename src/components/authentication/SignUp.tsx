"use client";
import React, { useState } from "react";
import ButtonReuse from "../reuse-ui/ButtonReuse";
import Fields from "../reuse-ui/Fields";
const SignUp = () => {
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
      <div className="max-w-[550px] mx-auto px-3 h-screen flex flex-col justify-center">
        <h3 className="text-4xl text-center mb-8 font-semibold">Sign Up</h3>
        <form action="">
          <Fields id="email" label="Email" className="w-full" type="email" />
          <Fields
            id="password"
            label="Password"
            className="w-full mt-6"
            type="password"
          />
          <ButtonReuse text="Sign Up" className="mt-6 w-full py-1" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
