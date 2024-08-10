"use client";
import React from "react";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import PrelineScript from "@/PrelineScript";

import StoreProvider from "@/providers/StoreProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import { ToastContainer } from "react-toastify";
import Toast from "@/components/common/alert/Toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <PrelineScript>
        <body className=" bg-base-white dark:bg-solid-dark-base font-base overflow-hidden">
          <StoreProvider>
            <ThemeProvider
              attribute="class"
              enableSystem
              disableTransitionOnChange
            >
              <ReactQueryClientProvider>
                {children}
                <Toast/>
                {/* <ToastContainer /> */}
              </ReactQueryClientProvider>
            </ThemeProvider>
          </StoreProvider>
        </body>
      </PrelineScript>
    </html>
  );
}
