import { AlertTriangle } from "@untitled-ui/icons-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <AlertTriangle className=" size-8 text-brand-600 dark:text-brand-dark-600" />
      <p className=" text-gray-500 dark:text-gray-dark-500">
        Could not find requested resource
      </p>
    </div>
  );
}
