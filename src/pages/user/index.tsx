import React from "react";
import { api } from "@/utils/api";

const User = () => {
  const data = api.post.hello.useQuery({ text: "user" });
  return <div>{data?.data?.greeting ?? ""}</div>;
};

export default User;
