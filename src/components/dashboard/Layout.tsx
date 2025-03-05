
import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {children}
      </main>
      <Toaster />
    </div>
  );
}
