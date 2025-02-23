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
              Supercharge Your GitHub Projects with
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
              className="rounded-full border-purple-500 text-black hover:bg-purple-500/20 hover:text-white"
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
