import { InputOTP, InputOTPSlot } from "@diditui/core";
import { useState } from "react";

export function InputOTPDemo() {
  const [value, setValue] = useState("");
  return (
    <InputOTP
      value={value}
      maxLength={6}
      onChange={(e) => setValue(e)}
      containerClassName="border-error min-w-[200px] border"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <InputOTPSlot key={index} index={index} />
      ))}
    </InputOTP>
  );
}
