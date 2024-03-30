"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect } from "react";

export const User = () => {
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchUserData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("useruser", user);
    }

    fetchUserData();
  }, []);
  const clickHandler = () => {
    supabase.auth.signOut();
  };
  return (
    <>
      <button onClick={() => clickHandler()}>logout</button>
    </>
  );
};
