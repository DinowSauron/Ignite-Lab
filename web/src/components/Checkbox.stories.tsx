import { Checkbox, CheckboxProps } from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text"

export default {
  title: "components/Checkbox",
  component: Checkbox,
  args: { //props...
  },
  decorators: [ // adiciona elementos a mais (uma decoração)
    (Story) => {
      return (
        <label className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </label>
      )
    }
  ]
} as Meta<CheckboxProps>;


// necessita exportar uma variação
export const Default: StoryObj<CheckboxProps> = {}