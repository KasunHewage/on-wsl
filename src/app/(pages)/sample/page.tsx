"use client";
import { fetchDog } from "@/actions/actions";
import { getMessageThreadById } from "@/actions/inquiry/thread";
import Button from "@/components/common/button/Button";
import React, { Suspense } from "react";

const Page = () => {
  const fetchDoggy = async () => {
    fetchDog();
  };
  return (
    <div>
      <Button onClick={() => getMessageThreadById({threadId:23})}>Click me!</Button>
      <br />
      <Suspense fallback={<p>Loading...</p>}>
        <Card />
      </Suspense>
    </div>
  );
};

async function Card() {
  return (
    <div className=" bg-slate-300 size-28 rounded-md flex flex-col items-center justify-center"></div>
  );
}

export default Page;
