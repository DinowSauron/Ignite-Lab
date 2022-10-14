import { Button, ButtonProps } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "components/Button",
  component: Button,
  args: { //props...
    children: "Confirmar",
  }
} as Meta<ButtonProps>;


// necessita exportar uma variação
export const Default: StoryObj<ButtonProps> = {}