import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SparklesCore } from "./_components/sparkles";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import PricingPage from "./_components/pricing-page";

export default function Home() {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Create unlimited projects",
        "Basic AI file search",
        "Collaborate with team members",
        "Up to 5 AI queries/month",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro Plan",
      description: "Advanced AI-powered project management",
      price: "$99",
      features: [
        "All Free Plan features",
        "Advanced AI search across projects",
        "Priority support",
        "Unlimited AI queries",
        "Custom domain integration",
      ],
      cta: "Upgrade Now",
    },
  ];

  return (
    <main className="bg-grid-white/[0.02] relative min-h-screen overflow-hidden bg-black/[0.96] antialiased">
      <div className="absolute inset-0 z-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Navbar />
      <div className="p-20"></div>
      <Hero />
      <div className="p-20"></div>
      <PricingPage />
    </main>
  );
}
