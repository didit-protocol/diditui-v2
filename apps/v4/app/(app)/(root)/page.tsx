import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

const title = "Build your Component Library";
const description =
  "A set of beautifully-designed, accessible components for your React applications. Open Source. Open Code.";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title,
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title,
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
};

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/docs/components">Browse Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper section-soft flex-1 pb-6">
        <div className="container overflow-hidden">
          <section className="flex items-center justify-center py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome to Your Component Library
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
                Start building amazing React applications with our collection of components.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
