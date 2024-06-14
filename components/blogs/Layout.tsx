import Alert from "./Alert";
import Meta from "./Meta";
import React from "react";

interface LayoutProps {
  preview: boolean;
  children: React.ReactNode;
}

export default function Layout({ preview, children }: LayoutProps) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
