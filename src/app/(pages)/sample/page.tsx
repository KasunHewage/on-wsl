"use client";
import ChipInput from "@/components/common/input/ChipInput";
import { Tabs, TabsList, TabsTrigger } from "@/components/common/tab/Tabs";
import { Grid01, List, XClose } from "@untitled-ui/icons-react";
import React, { Suspense, useState } from "react";

const Page = () => {
  return (
    <div>
      <Tabs defaultValue={"Dambulla"}>
        <TabsList variant="icon">
          <TabsTrigger variant="icon" value={"Dambulla"}>
            <Grid01 className=" size-5" />
          </TabsTrigger>
          <TabsTrigger variant="icon" value={"Colombo"}>
            <List className="size-5" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <ChipInput />
    </div>
  );
};

async function Card() {
  return (
    <div className=" bg-slate-300 size-28 rounded-md flex flex-col items-center justify-center"></div>
  );
}

export default Page;
