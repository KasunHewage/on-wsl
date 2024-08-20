import Button from "@/components/common/button/Button";
import PageHeader from "@/components/header/PageHeader";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader topChild={<Button>Sample Text</Button>} />
      <div className={`h-[calc(100vh-188px)] overflow-y-auto`}>{children}</div>
    </div>
  );
}
