"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FloatingPaper } from "./floating-page";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex min-h-[calc(100vh-76px)] flex-col items-center justify-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Manage Your GitHub Projects with
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {" "}
                AI Power
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-400"
          >
            Create repositories, ask AI to search files, and collaborate
            seamlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="rounded-full bg-purple-600 px-8 text-white hover:bg-purple-700"
            >
              <Link href={"/dashboard"}>Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-purple-500 text-black hover:bg-purple-500/20"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Dashboard preview below buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative mx-auto mt-16 aspect-video w-full max-w-6xl overflow-hidden rounded-3xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-xl"
          >
            <Image
              src="/Ig-creators.png"
              alt="Dashboard preview"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 h-96 w-96"></div>
    </div>
  );
}

{
  /* <section className="relative overflow-hidden">
        <div className="container relative mx-auto px-4 py-8">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-lg bg-gradient-to-br">
                <span className="text-xl font-bold text-white">GH</span>
              </div>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xl font-semibold text-transparent">
                GitHub SaaS
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/features" className="text-white hover:text-gray-400">
                Features
              </Link>
              <Link href="/pricing" className="text-white hover:text-gray-400">
                Pricing
              </Link>
              <Button asChild variant="ghost" className="rounded-full">
                <Link
                  href="/dashboard"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
                >
                  Dashboard
                </Link>
              </Button>
            </div>
          </nav>

          <div className="mx-auto max-w-6xl text-center">
            <h1 className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-5xl font-bold leading-tight tracking-tighter text-transparent md:text-6xl lg:text-7xl">
              Manage Your GitHub Projects with AI
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
              Create repositories, ask AI to search files, and collaborate
              seamlessly.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 text-lg transition-all hover:from-blue-600 hover:to-purple-700"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-gray-600 px-8 py-6 text-lg text-gray-300 hover:bg-gray-800/50 hover:text-white"
              >
                Watch Demo
              </Button>
            </div>

            <div className="relative mx-auto mt-16 aspect-video w-full max-w-6xl overflow-hidden rounded-3xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-xl">
              <Image
                src="/Ig-creators.png"
                alt="Dashboard preview"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section> */
}
