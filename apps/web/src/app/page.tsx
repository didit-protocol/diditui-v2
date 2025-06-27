import { Button, cn } from "@diditui/core";
import { Icon3dcubeBold, IconAddCircle } from "@diditui/icons-react";

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
            <h3 className="text-label-extra-small">Label Extra Small Web Desktop</h3>
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
            <div className="gradient-band-custom flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-band-custom
            </div>
            <div className="gradient-band-100-300 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-band-100-300
            </div>
            <div className="gradient-band-600-500 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-band-600-500
            </div>
            <div className="gradient-band-700-500 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-band-700-500
            </div>
            <div className="gradient-band-900-800 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-band-900-800
            </div>
            <div className="gradient-band-custom-2 flex size-36 items-center justify-center rounded-sm border border-neutral-200 text-center text-white">
              gradient-band-custom-2
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
        <div className="flex w-full justify-between rounded-sm bg-red-100 p-4">
          <div className="flex flex-col gap-2">
            <div className="relative h-[120px] w-[420px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-white/60 blur-sm" />
              <div className="relative z-10 flex size-full items-center justify-center">
                backdrop-blur-sm - light
              </div>
            </div>
            <div className="relative h-[120px] w-[420px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-white/60 blur-md" />
              <div className="relative z-10 flex size-full items-center justify-center">
                backdrop-blur-md - light
              </div>
            </div>
            <div className="relative h-[120px] w-[420px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-white/60 blur-lg" />
              <div className="relative z-10 flex size-full items-center justify-center">
                backdrop-blur-lg - light
              </div>
            </div>
            <div className="relative h-[120px] w-[420px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-white/60 blur-xl" />
              <div className="relative z-10 flex size-full items-center justify-center">
                backdrop-blur-xl - light
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative h-[120px] w-[420px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-black/60 blur-sm" />
              <div className="relative z-10 flex size-full items-center justify-center">
                backdrop-blur-sm - dark
              </div>
            </div>
            <div className="relative h-[120px] w-[420px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-black/60 blur-md" />
              <div className="relative z-10 flex size-full items-center justify-center">
                backdrop-blur-md - dark
              </div>
            </div>
            <div className="relative h-[120px] w-[420px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-black/60 blur-lg" />
              <div className="relative z-10 flex size-full items-center justify-center">
                backdrop-blur-lg - dark
              </div>
            </div>
            <div className="relative h-[120px] w-[420px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-black/60 blur-xl" />
              <div className="relative z-10 flex size-full items-center justify-center">
                backdrop-blur-xl - dark
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
          <Button variant="primary" size="large" reversed icon={IconAddCircle} label="Deploy now" />
          <Button variant="secondary" size="large" label="Deploy now" />
          <Button variant="tertiary" size="large" icon={Icon3dcubeBold} label="Deploy now" />
          <Button variant="destructive" size="large" label="Deploy now" />
          <Button
            variant="destructive_secondary"
            size="large"
            icon={Icon3dcubeBold}
            label="Deploy now"
          />
          <Button variant="success" size="large" label="Deploy now" />
          <Button variant="ghost" size="large" icon={IconAddCircle} label="Deploy now" />
        </div>
      </main>
    </div>
  );
}
