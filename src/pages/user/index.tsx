import React from "react";
import { api } from "@/utils/api";

const User = () => {
  const data = api.post.hello.useQuery({ text: "user" });
  const { mutate } = api.post.create.useMutation();
  const latestData = api.post.getLatest.useQuery();
  return (
    <div>
      <div>{data?.data?.greeting ?? ""}</div>
      <div>latest data: {latestData?.data?.name ?? ""}</div>
      <button
        onClick={() => {
          mutate({ name: `custom name ${Math.random() * 100}` });
        }}
      >
        create
      </button>
    </div>
  );
};

export default User;
