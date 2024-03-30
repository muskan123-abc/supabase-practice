import * as React from "react";
import ButtonReuse from "../reuse-ui/ButtonReuse";
import Fields from "../reuse-ui/Fields";
import { TextField } from "@mui/material";

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
      <div className="max-w-[550px] mx-auto px-3 h-screen flex flex-col justify-center">
        <h3 className="text-4xl text-center mb-8 font-semibold">Log In</h3>
        <form action="">
          <Fields id="email" label="Email" className="w-full" type="email" />
          <Fields
            id="password"
            label="Password"
            className="w-full mt-6"
            type="password"
          />
          <ButtonReuse text="Log In" className="mt-6 w-full py-1" />
        </form>
      </div>
    </div>
  );
};

export default LoginUi;
