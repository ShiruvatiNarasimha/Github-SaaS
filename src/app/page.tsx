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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="relative overflow-hidden">
        <div className="container relative mx-auto px-4 py-8">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-2">
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
      </section>

      <section className="relative bg-gradient-to-b from-gray-900/30 to-black/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-400">
              Start for free and upgrade when you're ready
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-gray-800/50 bg-gray-900/30 backdrop-blur-lg transition-all hover:border-blue-500/30 ${
                  index === 1 ? "border-2 border-blue-500/30" : ""
                }`}
              >
                <CardHeader className="relative">
                  <CardTitle className="text-2xl font-bold text-white">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-6">
                  <div className="flex items-end gap-2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    size="lg"
                    className={`w-full rounded-full transition-transform ${
                      index === 1
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
