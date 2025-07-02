"use client";

import { Button, cn, Spinner } from "@diditui/core";
import { Icon3dcubeBold, IconAddCircle } from "@diditui/icons-react";
import { SheetDemoLeft, SheetDemoRight, SheetDemoTop, SheetDemoBottom } from "./components/Sheet";

export default function Home() {
  const colorCard = cn(
    "flex size-20 items-center justify-center rounded-sm border border-neutral-200 text-center text-white",
  );
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-display-large">Display Large Web Desktop</h1>
            <h1 className="text-display-mid">Display Mid Web Desktop</h1>
            <h1 className="text-display-small">Display Small Web Desktop</h1>
          </div>
          <div>
            <h2 className="text-headline-large">Headline Large Web Desktop</h2>
            <h2 className="text-headline-mid">Headline Mid Web Desktop</h2>
            <h2 className="text-headline-small">Headline Small Web Desktop</h2>
          </div>
          <div>
            <p className="text-paragraph-large">Paragraph Large Web Desktop</p>
            <p className="text-paragraph-mid">Paragraph Mid Web Desktop</p>
            <p className="text-paragraph-small">Paragraph Small Web Desktop</p>
            <p className="text-paragraph-small-regular">Paragraph Small Regular Web Desktop</p>
          </div>
          <div>
            <h3 className="text-label-large">Label Large Web Desktop</h3>
            <h3 className="text-label-mid">Label Mid Web Desktop</h3>
            <h3 className="text-label-small">Label Small Web Desktop</h3>
            {/* text-neutral-mid */}
            <h3 className={cn("text-label-extra-small text-neutral-mid")}>
              Label Extra Small Web Desktop
            </h3>
            <h3 className="text-label-styled uppercase">Label Styled Web Desktop</h3>
            <h3 className="text-label-bold">Label Bold Web Desktop</h3>
            <h3 className="text-label-inputs uppercase">Label Inputs Web Desktop</h3>
          </div>
          <div>
            <h4 className="text-link-button">Link Button Web Desktop</h4>
            <h4 className="text-link-mid">Link Mid Web Desktop</h4>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className={`${colorCard} bg-[var(--color-neutral-white)]`}>neutral-white</div>
            <div className={`${colorCard} bg-[var(--color-neutral-black)]`}>neutral-black</div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className={`${colorCard} bg-[var(--color-gray-100)]`}>gray-100</div>
            <div className={`${colorCard} bg-[var(--color-gray-200)]`}>gray-200</div>
            <div className={`${colorCard} bg-[var(--color-gray-300)]`}>gray-300</div>
            <div className={`${colorCard} bg-[var(--color-gray-400)]`}>gray-400</div>
            <div className={`${colorCard} bg-[var(--color-gray-500)]`}>gray-500</div>
            <div className={`${colorCard} bg-[var(--color-gray-600)]`}>gray-600</div>
            <div className={`${colorCard} bg-[var(--color-gray-700)]`}>gray-700</div>
            <div className={`${colorCard} bg-[var(--color-gray-800)]`}>gray-800</div>
            <div className={`${colorCard} bg-[var(--color-gray-900)]`}>gray-900</div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className={`${colorCard} bg-[var(--color-blue-100)]`}>blue-100</div>
            <div className={`${colorCard} bg-[var(--color-blue-200)]`}>blue-200</div>
            <div className={`${colorCard} bg-[var(--color-blue-300)]`}>blue-300</div>
            <div className={`${colorCard} bg-[var(--color-blue-400)]`}>blue-400</div>
            <div className={`${colorCard} bg-[var(--color-blue-500)]`}>blue-500</div>
            <div className={`${colorCard} bg-[var(--color-blue-600)]`}>blue-600</div>
            <div className={`${colorCard} bg-[var(--color-blue-700)]`}>blue-700</div>
            <div className={`${colorCard} bg-[var(--color-blue-800)]`}>blue-800</div>
            <div className={`${colorCard} bg-[var(--color-blue-900)]`}>blue-900</div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className={`${colorCard} bg-[var(--color-lime-100)]`}>lime-100</div>
            <div className={`${colorCard} bg-[var(--color-lime-200)]`}>lime-200</div>
            <div className={`${colorCard} bg-[var(--color-lime-300)]`}>lime-300</div>
            <div className={`${colorCard} bg-[var(--color-lime-400)]`}>lime-400</div>
            <div className={`${colorCard} bg-[var(--color-lime-500)]`}>lime-500</div>
            <div className={`${colorCard} bg-[var(--color-lime-600)]`}>lime-600</div>
            <div className={`${colorCard} bg-[var(--color-lime-700)]`}>lime-700</div>
            <div className={`${colorCard} bg-[var(--color-lime-800)]`}>lime-800</div>
            <div className={`${colorCard} bg-[var(--color-lime-900)]`}>lime-900</div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className={`${colorCard} bg-[var(--color-green-100)]`}>green-200</div>
            <div className={`${colorCard} bg-[var(--color-green-300)]`}>green-300</div>
            <div className={`${colorCard} bg-[var(--color-green-400)]`}>green-400</div>
            <div className={`${colorCard} bg-[var(--color-green-500)]`}>green-500</div>
            <div className={`${colorCard} bg-[var(--color-green-600)]`}>green-600</div>
            <div className={`${colorCard} bg-[var(--color-green-700)]`}>green-700</div>
            <div className={`${colorCard} bg-[var(--color-green-800)]`}>green-800</div>
            <div className={`${colorCard} bg-[var(--color-green-900)]`}>green-900</div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className={`${colorCard} bg-[var(--color-orange-100)]`}>orange-100</div>
            <div className={`${colorCard} bg-[var(--color-orange-200)]`}>orange-200</div>
            <div className={`${colorCard} bg-[var(--color-orange-300)]`}>orange-300</div>
            <div className={`${colorCard} bg-[var(--color-orange-400)]`}>orange-500</div>
            <div className={`${colorCard} bg-[var(--color-orange-600)]`}>orange-600</div>
            <div className={`${colorCard} bg-[var(--color-orange-700)]`}>orange-700</div>
            <div className={`${colorCard} bg-[var(--color-orange-800)]`}>orange-800</div>
            <div className={`${colorCard} bg-[var(--color-orange-900)]`}>orange-900</div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className={`${colorCard} bg-[var(--color-navy-100)]`} />
            <div className={`${colorCard} bg-[var(--color-navy-200)]`}>navy-200</div>
            <div className={`${colorCard} bg-[var(--color-navy-300)]`}>navy-300</div>
            <div className={`${colorCard} bg-[var(--color-navy-400)]`}>navy-400</div>
            <div className={`${colorCard} bg-[var(--color-navy-500)]`}>navy-500</div>
            <div className={`${colorCard} bg-[var(--color-navy-600)]`}>navy-600</div>
            <div className={`${colorCard} bg-[var(--color-navy-700)]`}>navy-700</div>
            <div className={`${colorCard} bg-[var(--color-navy-800)]`}>navy-800</div>
            <div className={`${colorCard} bg-[var(--color-navy-900)]`}>navy-900</div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className={`${colorCard} bg-[var(--color-measurement)]`}>measurement</div>
            <div className={`${colorCard} bg-[var(--color-measurement-2)]`}>measurement-2</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className="gradient-gray-100-900 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-gray-100-900
            </div>
            <div className="gradient-gray-100-300 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-black">
              gradient-gray-100-300
            </div>
            <div className="gradient-gray-600-500 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-gray-600-500
            </div>
            <div className="gradient-gray-700-500 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-gray-700-500
            </div>
            <div className="gradient-gray-900-800 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-gray-900-800
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center gap-2 sm:flex-row">
            <div className="gradient-brand-custom flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-brand-custom
            </div>
            <div className="gradient-brand-100-300 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-brand-100-300
            </div>
            <div className="gradient-brand-600-500 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-brand-600-500
            </div>
            <div className="gradient-brand-700-500 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-brand-700-500
            </div>
            <div className="gradient-brand-900-800 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-brand-900-800
            </div>
            <div className="gradient-brand-custom-2 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-brand-custom-2
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <div className="size-30 shadow-xs flex items-center justify-center rounded-sm">
            shadow-xs
          </div>
          <div className="size-30 flex items-center justify-center rounded-sm shadow-sm">
            shadow-sm
          </div>
          <div className="size-30 flex items-center justify-center rounded-sm shadow-md">
            shadow-md
          </div>
          <div className="size-30 flex items-center justify-center rounded-sm shadow-lg">
            shadow-lg
          </div>
          <div className="size-30 flex items-center justify-center rounded-sm shadow-xl">
            shadow-xl
          </div>
          <div className="size-30 flex items-center justify-center rounded-sm shadow-2xl">
            shadow-2xl
          </div>
          <div className="size-30 shadow-3xl flex items-center justify-center rounded-sm">
            shadow-3xl
          </div>
        </div>
        <div className="flex w-full justify-between rounded-sm bg-[url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center p-4">
          <div className="flex flex-col gap-2">
            <div className="flex h-[120px] w-[420px] items-center justify-center overflow-hidden rounded-sm bg-white/50 backdrop-blur-sm">
              backdrop-blur-sm - light
            </div>
            <div className="flex h-[120px] w-[420px] items-center justify-center overflow-hidden rounded-sm bg-white/50 backdrop-blur-md">
              backdrop-blur-md - light
            </div>
            <div className="flex h-[120px] w-[420px] items-center justify-center overflow-hidden rounded-sm bg-white/50 backdrop-blur-lg">
              backdrop-blur-lg - light
            </div>
            <div className="flex h-[120px] w-[420px] items-center justify-center overflow-hidden rounded-sm bg-white/50 backdrop-blur-xl">
              backdrop-blur-xl - light
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex h-[120px] w-[420px] items-center justify-center overflow-hidden rounded-sm bg-black/60 text-white backdrop-blur-sm">
              backdrop-blur-sm - dark
            </div>
            <div className="flex h-[120px] w-[420px] items-center justify-center overflow-hidden rounded-sm bg-black/60 text-white backdrop-blur-md">
              backdrop-blur-md - dark
            </div>
            <div className="flex h-[120px] w-[420px] items-center justify-center overflow-hidden rounded-sm bg-black/60 text-white backdrop-blur-lg">
              backdrop-blur-lg - dark
            </div>
            <div className="flex h-[120px] w-[420px] items-center justify-center overflow-hidden rounded-sm bg-black/60 text-white backdrop-blur-xl">
              backdrop-blur-xl - dark
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <div className="flex w-14 flex-col items-center justify-center rounded-sm bg-white p-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
          <div className="bg-neutral-high flex w-14 flex-col items-center justify-center rounded-sm p-4">
            <Spinner size="sm" className="text-neutral-soft" />
            <Spinner size="md" className="text-neutral-soft" />
            <Spinner size="lg" className="text-neutral-soft" />
            <Spinner size="xl" className="text-neutral-soft" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg">
            <IconAddCircle />
            <span>Deploy now</span>
          </Button>
          <Button variant="secondary" size="lg">
            <span>Deploy now</span>
          </Button>
          <Button variant="tertiary" size="lg">
            <Icon3dcubeBold />
            <span>Deploy now</span>
          </Button>
          <Button variant="destructive" size="lg">
            <span>Deploy now</span>
          </Button>
          <Button variant="destructive_secondary" size="lg">
            <Icon3dcubeBold />
            <span>Deploy now</span>
          </Button>
          <Button variant="success" size="lg">
            <span>Deploy now</span>
          </Button>
          <Button variant="ghost" size="lg">
            <IconAddCircle />
            <span>Deploy now</span>
          </Button>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" isLoading>
            <IconAddCircle />
            <span>Deploy now</span>
          </Button>
          <Button variant="secondary" size="lg" isLoading>
            <span>Deploy now</span>
          </Button>
          <Button variant="tertiary" size="lg" isLoading>
            <Icon3dcubeBold />
            <span>Deploy now</span>
          </Button>
          <Button variant="destructive" size="lg" isLoading>
            <span>Deploy now</span>
          </Button>
          <Button variant="destructive_secondary" size="lg" isLoading>
            <Icon3dcubeBold />
            <span>Deploy now</span>
          </Button>
          <Button variant="success" size="lg" isLoading>
            <span>Deploy now</span>
          </Button>
          <Button variant="ghost" size="lg" isLoading>
            <IconAddCircle />
            <span>Deploy now</span>
          </Button>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <Button variant="primary" size="md">
            <IconAddCircle />
            <span>Button</span>
            <IconAddCircle />
          </Button>
          <Button variant="secondary" size="md">
            <IconAddCircle />
            <span>Button</span>
            <IconAddCircle />
          </Button>
          <Button variant="tertiary" size="md">
            <Icon3dcubeBold />
            <span>Button</span>
            <Icon3dcubeBold />
          </Button>
          <Button variant="destructive" size="md">
            <IconAddCircle />
            <span>Button</span>
            <IconAddCircle />
          </Button>
          <Button variant="destructive_secondary" size="md">
            <Icon3dcubeBold />
            <span>Button</span>
            <Icon3dcubeBold />
          </Button>
          <Button variant="success" size="md">
            <IconAddCircle />
            <span>Button</span>
            <IconAddCircle />
          </Button>
          <Button variant="ghost" size="md">
            <IconAddCircle />
            <span>Button</span>
            <IconAddCircle />
          </Button>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <Button variant="primary" size="md" isLoading>
            <IconAddCircle />
            <span>Button</span>
          </Button>
          <Button variant="secondary" size="md" isLoading>
            <IconAddCircle />
            <span>Button</span>
          </Button>
          <Button variant="tertiary" size="md" isLoading>
            <Icon3dcubeBold />
            <span>Button</span>
          </Button>
          <Button variant="destructive" size="md" isLoading>
            <IconAddCircle />
            <span>Button</span>
          </Button>
          <Button variant="destructive_secondary" size="md" isLoading>
            <Icon3dcubeBold />
            <span>Button</span>
          </Button>
          <Button variant="success" size="md" isLoading>
            <IconAddCircle />
            <span>Button</span>
          </Button>
          <Button variant="ghost" size="md" isLoading>
            <IconAddCircle />
            <span>Button</span>
          </Button>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <Button variant="primary" size="icon">
            <IconAddCircle />
          </Button>
          <Button variant="secondary" size="icon">
            <IconAddCircle />
          </Button>
          <Button variant="tertiary" size="icon">
            <Icon3dcubeBold />
          </Button>
          <Button variant="destructive" size="icon">
            <IconAddCircle />
          </Button>
          <Button variant="destructive_secondary" size="icon">
            <Icon3dcubeBold />
          </Button>
          <Button variant="success" size="icon">
            <IconAddCircle />
          </Button>
          <Button variant="ghost" size="icon">
            <IconAddCircle />
          </Button>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <Button variant="primary" size="icon" isLoading>
            <IconAddCircle />
          </Button>
          <Button variant="secondary" size="icon" isLoading>
            <IconAddCircle />
          </Button>
          <Button variant="tertiary" size="icon" isLoading>
            <Icon3dcubeBold />
          </Button>
          <Button variant="destructive" size="icon" isLoading>
            <IconAddCircle />
          </Button>
          <Button variant="destructive_secondary" size="icon" isLoading>
            <Icon3dcubeBold />
          </Button>
          <Button variant="success" size="icon" isLoading>
            <IconAddCircle />
          </Button>
          <Button variant="ghost" size="icon" isLoading>
            <IconAddCircle />
          </Button>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <SheetDemoRight />
          <SheetDemoLeft />
          <SheetDemoTop />
          <SheetDemoBottom />
        </div>
      </main>
    </div>
  );
}
