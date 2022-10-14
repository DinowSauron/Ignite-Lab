import * as CheckboxComponent from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxComponent.CheckboxProps {
  
}

export function Checkbox(props: CheckboxProps) {
  
  return (
    <CheckboxComponent.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      aria-label="Marcar opção"
      {...props}
    >
      <CheckboxComponent.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500"/>
      </CheckboxComponent.Indicator>
    </CheckboxComponent.Root>
  )
}

