import { Button } from "@nextui-org/button";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/user");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Page() {
  const { data } = await getData();
  return (
    <div>
      <Button color="primary">hello</Button>
      {data?.map((item: any) => (
        <div>{item.nickname}</div>
      ))}
    </div>
  );
}
