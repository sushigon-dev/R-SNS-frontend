import React from "react";
import { useState, useEffect } from "react";

import Account from "../account/Account";
import AuthField from "./AuthField";
import { AuthFieldProps } from "./AuthField";
import type UserInfo from "./user_info";

interface AuthAccountFieldProps extends AuthFieldProps {}

function AuthAccountField({
  className,
  ...authFieldProps
}: AuthAccountFieldProps) {
  const userExample = {
    username:
      "寿限無寿限無五却のすりきれ海砂利水魚の水行末雲来末風来末食う寝る処に住む処藪ら柑子の藪柑子パイポパイポパイポのシューリンガンシューリンガンのグーリンダイグーリンダイのポンポコピーのポンポコナーの長久命の長助",
    userlink: "/profile",
  };

  const [user, setUser] = useState<UserInfo>(null);

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8080/user-info", {
  //         credentials: "include",
  //       });

  //       if (!res.ok) throw new Error("未ログイン");

  //       const data = await res.json();
  //       setUser(data);
  //     } catch {
  //       setUser(null);
  //     }
  //   };
  //   fetchUserInfo();
  // }, []);
  // setUser(userExample);

  return user ? (
    <Account
      username={user.username}
      avatarSrc={user.userlink + "/avatar"}
      className={className}
    />
  ) : (
    <AuthField className={className} {...authFieldProps} />
  );
}

export default AuthAccountField;
