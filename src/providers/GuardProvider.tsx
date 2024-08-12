"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function GuardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAuth = false;

  useEffect(() => {
    // router.replace("dashboard");
  }, []);

  return <div>{children}</div>;
}
