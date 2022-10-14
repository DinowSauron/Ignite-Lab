import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "components/Heading",
  component: Heading,
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
} as Meta<HeadingProps>;


// necessita exportar uma variação
export const Default: StoryObj<HeadingProps> = {}
export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm"
  }
}
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg"
  }
}


export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Componente customizado com 'h1'</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
  
}

