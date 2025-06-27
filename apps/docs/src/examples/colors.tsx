import { cn } from "@diditui/core";

const ColorCard = ({
  className,
  number,
  hex,
}: {
  className: string;
  name: string;
  number: string;
  hex: string;
}) => {
  return (
    <div className="flex h-[156px] w-[160px] flex-col gap-3 overflow-hidden rounded-sm border border-neutral-200 shadow-md">
      <div
        className={cn(
          "text-paragraph-large bg-brand-primary flex grow items-center justify-center rounded-sm mix-blend-color",
          className,
        )}
      ></div>
      <div className="flex flex-col p-3 pt-0">
        <span className="text-paragraph-large text-[var(--color-gray-900)]">{number}</span>
        <span className="text-paragraph-mid font-normal text-[var(--color-gray-600)]">{hex}</span>
      </div>
    </div>
  );
};

const GradientCard = ({
  className,
  fromNumber,
  fromHex,
  toNumber,
  toHex,
  deg,
}: {
  className: string;
  fromNumber: string;
  fromHex: string;
  toNumber: string;
  toHex: string;
  deg: string;
}) => {
  return (
    <div className="flex h-[276px] w-[280px] flex-col gap-3 overflow-hidden rounded-sm border border-neutral-300 shadow-sm">
      <div
        className={cn(
          "text-paragraph-large flex grow items-center justify-center rounded-sm",
          className,
        )}
      />
      <div className="flex items-center justify-between p-3 pt-0">
        <div className="flex flex-col">
          <span className="text-paragraph-large text-[var(--color-gray-900)]">{fromNumber}</span>
          <span className="text-paragraph-mid font-normal text-[var(--color-gray-600)]">
            {fromHex}
          </span>
        </div>
        <div className="flex h-full grow flex-col items-center justify-end">
          <span className="text-paragraph-mid font-normal text-[var(--color-gray-600)]">{deg}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-paragraph-large text-[var(--color-gray-900)]">{toNumber}</span>
          <span className="text-paragraph-mid font-normal text-[var(--color-gray-600)]">
            {toHex}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Colors = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-display-mid">Colors</h1>
        <p className="text-paragraph-mid">
          Our design system leverages a purposeful set of color styles as the perfect starting point
          for any brand or project. When it comes to color, contrast is critical for ensuring text
          is legible. We've added WCAG 2.2 contrast ratios to our color system so you can make sure
          you're designing with accessibility in mind.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-headline-mid">Primary colors</h2>
        <p className="text-paragraph-small">
          These are the main colors that make up the majority of the colors used in the design
          system.
        </p>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Black and white</h2>
          <p className="text-paragraph-small-regular">
            Black and white are the most basic colors and are used to create contrast.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard className="bg-white" name="white" number="white" hex="#fefefe" />
          <ColorCard className="bg-black" name="black" number="black" hex="#1a1a1a" />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Gray</h2>
          <p className="text-paragraph-small-regular">
            Gray is a neutral color and is the foundation of the color system. Almost everything in
            UI design — text, form fields, backgrounds, dividers — are usually gray.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard className={`bg-gray-100`} name={`Gray 100`} number={`100`} hex={`#F8F8F8`} />
          <ColorCard className={`bg-gray-200`} name={`Gray 200`} number={`200`} hex={`#E1E1E1`} />
          <ColorCard className={`bg-gray-300`} name={`Gray 300`} number={`300`} hex={`#C4C7C7`} />
          <ColorCard className={`bg-gray-400`} name={`Gray 400`} number={`400`} hex={`#9DA1A1`} />
          <ColorCard className={`bg-gray-500`} name={`Gray 500`} number={`500`} hex={`#868B8B`} />
          <ColorCard className={`bg-gray-600`} name={`Gray 600`} number={`600`} hex={`#6E6E73`} />
          <ColorCard className={`bg-gray-700`} name={`Gray 700`} number={`700`} hex={`#4B5058`} />
          <ColorCard className={`bg-gray-800`} name={`Gray 800`} number={`800`} hex={`#2F2F2F`} />
          <ColorCard className={`bg-gray-900`} name={`Gray 900`} number={`900`} hex={`#0B1B2E`} />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Blue</h2>
          <p className="text-paragraph-small-regular">
            The brand color is your `primary` color, and is used across all interactive elements
            such as buttons, links, inputs, etc. This color can define the overall feel and can
            elicit emotion.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard className={`bg-blue-100`} name={`Blue 100`} number={`100`} hex={`#E8EAF8`} />
          <ColorCard className={`bg-blue-200`} name={`Blue 200`} number={`200`} hex={`#D4E1FF`} />
          <ColorCard className={`bg-blue-300`} name={`Blue 300`} number={`300`} hex={`#80AEFF`} />
          <ColorCard className={`bg-blue-400`} name={`Blue 400`} number={`400`} hex={`#4D94FF`} />
          <ColorCard className={`bg-blue-500`} name={`Blue 500`} number={`500`} hex={`#3B7FFF`} />
          <ColorCard className={`bg-blue-600`} name={`Blue 600`} number={`600`} hex={`#2567FF`} />
          <ColorCard className={`bg-blue-700`} name={`Blue 700`} number={`700`} hex={`#0049F0`} />
          <ColorCard className={`bg-blue-800`} name={`Blue 800`} number={`800`} hex={`#07479E`} />
          <ColorCard className={`bg-blue-900`} name={`Blue 900`} number={`900`} hex={`#070F1C`} />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Brand Lime</h2>
          <p className="text-paragraph-small-regular">
            The brand color is your `primary` color, and is used across all interactive elements
            such as buttons, links, inputs, etc. This color can define the overall feel and can
            elicit emotion.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard className="bg-lime-100" name="Lime 100" number="100" hex="#FCFDE7" />
          <ColorCard className="bg-lime-200" name="Lime 200" number="200" hex="#F8FCCE" />
          <ColorCard className="bg-lime-300" name="Lime 300" number="300" hex="#F5FBB6" />
          <ColorCard className="bg-lime-400" name="Lime 400" number="400" hex="#F2FA9E" />
          <ColorCard className="bg-lime-500" name="Lime 500" number="500" hex="#EFF985" />
          <ColorCard className="bg-lime-600" name="Lime 600" number="600" hex="#ECF86E" />
          <ColorCard className="bg-lime-700" name="Lime 700" number="700" hex="#C0CD32" />
          <ColorCard className="bg-lime-800" name="Lime 800" number="800" hex="#869207" />
          <ColorCard className="bg-lime-900" name="Lime 900" number="900" hex="#596105" />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Success</h2>
          <p className="text-paragraph-small-regular">
            Success colors communicate a positive action, positive trend, or a successful
            confirmation. If you're using green as your primary color, it can be helpful to
            introduce a different hue for your success green.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard className="bg-green-100" name="Green 100" number="100" hex="#41d97f1a" />
          <ColorCard className="bg-green-200" name="Green 200" number="200" hex="#BFF2D4" />
          <ColorCard className="bg-green-300" name="Green 300" number="300" hex="#95EAB7" />
          <ColorCard className="bg-green-400" name="Green 400" number="400" hex="#80E5A9" />
          <ColorCard className="bg-green-500" name="Green 500" number="500" hex="#55DD8C" />
          <ColorCard className="bg-green-600" name="Green 600" number="600" hex="#41D97F" />
          <ColorCard className="bg-green-700" name="Green 700" number="700" hex="#25B667" />
          <ColorCard className="bg-green-800" name="Green 800" number="800" hex="#19934F" />
          <ColorCard className="bg-green-900" name="Green 900" number="900" hex="#0E7037" />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Error</h2>
          <p className="text-paragraph-small-regular">
            Error colors are used across error states and in `destructive` actions. They communicate
            a destructive/negative action, such as removing a user from your team.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard className="bg-red-100" name="Red 100" number="100" hex="#ff414133" />
          <ColorCard className="bg-red-200" name="Red 200" number="200" hex="#FFC6C6" />
          <ColorCard className="bg-red-300" name="Red 300" number="300" hex="#FF9999" />
          <ColorCard className="bg-red-400" name="Red 400" number="400" hex="#FF6666" />
          <ColorCard className="bg-red-500" name="Red 500" number="500" hex="#FF5252" />
          <ColorCard className="bg-red-600" name="Red 600" number="600" hex="#FF4141" />
          <ColorCard className="bg-red-700" name="Red 700" number="700" hex="#D93636" />
          <ColorCard className="bg-red-800" name="Red 800" number="800" hex="#B32B2B" />
          <ColorCard className="bg-red-900" name="Red 900" number="900" hex="#8C2020" />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Warning</h2>
          <p className="text-paragraph-small-regular">
            Warning colors can communicate that an action is potentially destructive or `on-hold`.
            These colors are commonly used in confirmations to grab the users' attention.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard className="bg-orange-100" name="Orange 100" number="100" hex="#e66e0033" />
          <ColorCard className="bg-orange-200" name="Orange 200" number="200" hex="#FFCC99" />
          <ColorCard className="bg-orange-300" name="Orange 300" number="300" hex="#FFB366" />
          <ColorCard className="bg-orange-400" name="Orange 400" number="400" hex="#FF9933" />
          <ColorCard className="bg-orange-500" name="Orange 500" number="500" hex="#FF7F2E" />
          <ColorCard className="bg-orange-600" name="Orange 600" number="600" hex="#FF7426" />
          <ColorCard className="bg-orange-700" name="Orange 700" number="700" hex="#E66E00" />
          <ColorCard className="bg-orange-800" name="Orange 800" number="800" hex="#CC5D1F" />
          <ColorCard className="bg-orange-900" name="Orange 900" number="900" hex="#B2531A" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-headline-mid">Secondary colors</h2>
        <p className="text-paragraph-small">
          Along with primary colors, it's helpful to have a selection of secondary colors to use in
          components such as pills, alerts and labels. These secondary colors should be used
          sparingly or as accents, while the primary color(s) should take precedence.
        </p>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Navy</h2>
          <p className="text-paragraph-small-regular">
            Navy is a color of the sea and is often used to create a sense of calmness and serenity.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard className="bg-navy-100" name="Navy 100" number="100" hex="#E8EDF3" />
          <ColorCard className="bg-navy-200" name="Navy 200" number="200" hex="#C9D3E0" />
          <ColorCard className="bg-navy-300" name="Navy 300" number="300" hex="#AAB8CC" />
          <ColorCard className="bg-navy-400" name="Navy 400" number="400" hex="#7C92AB" />
          <ColorCard className="bg-navy-500" name="Navy 500" number="500" hex="#4F6C89" />
          <ColorCard className="bg-navy-600" name="Navy 600" number="600" hex="#2D4A69" />
          <ColorCard className="bg-navy-700" name="Navy 700" number="700" hex="#193553" />
          <ColorCard className="bg-navy-800" name="Navy 800" number="800" hex="#0B1B2E" />
          <ColorCard className="bg-navy-900" name="Navy 900" number="900" hex="#070F1C" />
        </div>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Measurement</h2>
          <p className="text-paragraph-small-regular">
            Measurement is a color of the sea and is often used to create a sense of calmness and
            serenity.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ColorCard
            className={`bg-[var(--color-measurement)]`}
            name={`Measurement 1`}
            number={`primary`}
            hex={"#ab008d"}
          />
          <ColorCard
            className={`bg-[var(--color-measurement-2)]`}
            name={`Measurement 2`}
            number={`secondary`}
            hex={"#ffd7f8"}
          />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-headline-mid">Gradients</h2>
        <p className="text-paragraph-small">
          Gradients are used to create a sense of depth and movement.
        </p>
      </div>

      <div className="mb-6">
        <div className="mb-4">
          <h2 className="text-label-mid">Gray gradients</h2>
          <p className="text-paragraph-small-regular">
            Gray is a neutral color and is the foundation of the color system. Almost everything in
            UI design — text, form fields, backgrounds, dividers — are usually gray.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <GradientCard
            className="gradient-gray-100-900"
            fromNumber={`100-900`}
            fromHex={`#535862`}
            toNumber={``}
            toHex={``}
            deg={``}
          />
          <GradientCard
            className="gradient-gray-100-300"
            fromNumber={`100`}
            fromHex={`#F8F8F8`}
            toNumber={`300`}
            toHex={`#E1E1E1`}
            deg={`78deg`}
          />
          <GradientCard
            className="gradient-gray-600-500"
            fromNumber={`600`}
            fromHex={`#6E6E73`}
            toNumber={`500`}
            toHex={`#4B5058`}
            deg={`45Deg`}
          />
          <GradientCard
            className="gradient-gray-700-500"
            fromNumber={`700`}
            fromHex={`#4B5058`}
            toNumber={`500`}
            toHex={`#2F2F2F`}
            deg={`35Deg`}
          />
          <GradientCard
            className="gradient-gray-900-800"
            fromNumber={`900`}
            fromHex={`#0B1B2E`}
            toNumber={`800`}
            toHex={`#070F1C`}
            deg={`35Deg`}
          />
        </div>
      </div>
      <div>
        <div className="mb-4">
          <h2 className="text-label-mid">Brand gradients</h2>
          <p className="text-paragraph-small-regular">
            The brand color is your "primary" color, and is used across all interactive elements
            such as buttons, links, inputs, etc. This color can define the overall feel and can
            elicit emotion.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <GradientCard
            className="gradient-brand-custom"
            fromNumber={`custom`}
            fromHex={`#86D2FF`}
            toNumber={``}
            toHex={``}
            deg={``}
          />
          <GradientCard
            className="gradient-brand-100-300"
            fromNumber={`100`}
            fromHex={`#F8F8F8`}
            toNumber={`300`}
            toHex={`#E1E1E1`}
            deg={`78deg`}
          />
          <GradientCard
            className="gradient-brand-600-500"
            fromNumber={`600`}
            fromHex={`#6E6E73`}
            toNumber={`500`}
            toHex={`#4B5058`}
            deg={`78Deg`}
          />
          <GradientCard
            className="gradient-brand-700-500"
            fromNumber={`700`}
            fromHex={`#4B5058`}
            toNumber={`500`}
            toHex={`#2F2F2F`}
            deg={`45Deg`}
          />
          <GradientCard
            className="gradient-brand-custom-2"
            fromNumber={`custom`}
            fromHex={`#4F4DC6`}
            toNumber={``}
            toHex={``}
            deg={`117Deg`}
          />
        </div>
      </div>
    </div>
  );
};
