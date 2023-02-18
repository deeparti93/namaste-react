/** @format */

import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy",
    email: "abc@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
