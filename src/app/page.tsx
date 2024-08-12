"use client";

import React from "react";
import Image from "next/image";
import images from "@/constants/images";
import TextInput from "@/components/common/input/TextInput";
import Button from "@/components/common/button/Button";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-row flex-1">
      <div className="w-[calc(100vw-60%)] h-dvh ">
        <Image
          src={images.loginImage}
          style={{ objectFit: "cover", height: "100%" }}
          alt="Login left image"
        />
      </div>
      <div className=" h-dvh w-[calc(100vw-40%)] flex flex-col items-center justify-center">
        <div className=" w-[480px] flex flex-col gap-10">
          <Image src={images.bankLogoDark} alt="Bank logo" />
          <div className=" flex flex-col gap-10 ">
            <p className="text-3xl font-semibold text-gray-800 dark:text-gray-dark-800">
              Login to Vishwa Retail Admin
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.replace("/inquiries");
              }}
              className=" flex flex-col gap-7"
            >
              <div className=" flex flex-col gap-5">
                <TextInput label="Username" size="lg" />
                <TextInput label="Passowrd" size="lg" />
              </div>
              <Button size="xl" className="flex flex-col items-center">
                Log In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
