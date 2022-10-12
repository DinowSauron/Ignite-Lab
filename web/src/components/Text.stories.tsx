import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "components/Text",
  component: Text,
  args: { //props...
    children: "Hello, world!",
    size: "md"
  },
  argTypes: {
    size: {
      options: ["sm","md","lg"],
      control: {
        type: "inline-radio"
      }
    }
  }
} as Meta<TextProps>;


// necessita exportar uma variação
export const Default: StoryObj<TextProps> = {}
export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm"
  }
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg"
  }
}


export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Componente customizado</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
  
}

