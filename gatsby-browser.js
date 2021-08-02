import React from "react";
import MessengerChat from "./src/components/subcomponents/messengerchat.js";

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <MessengerChat />
  </>
);
