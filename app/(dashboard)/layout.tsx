import type { Metadata } from "next";
import { Sidebar } from "./dashboard/components/sidebar";

export const metadata: Metadata = {
  title: "dashboard.",
  description: "dashboard.as",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[48px_1fr]">
      <Sidebar />
      {children}
    </div>
  );
}
