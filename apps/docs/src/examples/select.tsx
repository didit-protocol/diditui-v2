import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@diditui/core";
import { Data2Icon } from "@diditui/icons-react";

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];

export function SelectExample() {
  return (
    <Select>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {fruits.map((fruit, index) => (
            <>
              <SelectItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </SelectItem>
              {index < fruits.length - 1 && <SelectSeparator />}
            </>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const options = ["KYC Liveness", "KYC + POA", "Age estimation", "Phone verification"];

export function SelectExampleWithIcons() {
  return (
    <Select>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => (
            <>
              <SelectItem key={option} value={option}>
                <div className="flex items-center gap-1.5">
                  <Data2Icon className="text-neutral-mid size-4" />
                  {option}
                </div>
              </SelectItem>
              {index < options.length - 1 && <SelectSeparator />}
            </>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectSeparator />
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectSeparator />
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectSeparator />
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectSeparator />
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectSeparator />
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
          <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
          <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
