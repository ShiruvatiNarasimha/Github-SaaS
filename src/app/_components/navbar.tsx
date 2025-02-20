"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Github, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type React from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between rounded-full border-b border-white/10 bg-black/50 px-6 py-4 backdrop-blur-lg transition-all"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Github className="h-8 w-8 text-purple-500" />
        <span className="text-xl font-medium text-white"> GitHub SaaS</span>
      </Link>

      <div className="hidden items-center space-x-8 md:flex">
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/how-it-works">How it Works</NavLink>
        <NavLink href="/examples">Examples</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
      </div>

      <div className="hidden items-center space-x-4 md:flex">
        <Button
          variant="ghost"
          className="rounded-full text-white hover:text-purple-400"
        >
          Sign In
        </Button>
        <Button className="rounded-full bg-purple-600 text-white hover:bg-purple-700">
          <Link href={"/dashboard"}>Get Started</Link>
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="text-white md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full flex flex-col items-center bg-black/90 p-4 md:hidden">
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/how-it-works">How it Works</NavLink>
          <NavLink href="/examples">Examples</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <Button
            variant="ghost"
            className="w-full rounded-full text-white hover:text-purple-400"
          >
            Sign In
          </Button>
          <Button className="w-full rounded-full bg-purple-600 text-white hover:bg-purple-700">
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
        </div>
      )}
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative text-gray-300 transition-colors hover:text-white"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  );
}
