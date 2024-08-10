import AppHeader from "@/components/header/AppHeader";
import Sidebar from "@/components/sidebar/Sidebar";

export default function PagesRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div
        className={`h-screen border-r-[1px] border-r-gray-200 dark:border-r-gray-800 overflow-hidden overflow-y-auto`}
      >
        <Sidebar />
      </div>
      <div className=" h-screen flex flex-col flex-1">
        <div>
          <AppHeader />
        </div>
        <div className=" px-7 pb-7 h-screen">{children}</div>
      </div>
    </div>
  );
}
