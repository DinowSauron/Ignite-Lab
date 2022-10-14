import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";

export default {
  title: "components/TextInput",
  component: TextInput.Root,
  args: { //props...
    children: [ // hide fragment
      <TextInput.Icon>
        <EnvelopeSimple/>
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your email address"/>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<TextInputRootProps>;


// necessita exportar uma variação
export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  name: "Without Icon", // opcional
  args:{
    children: (
      <TextInput.Input placeholder="Type your email address"/>
    )
  }
}
