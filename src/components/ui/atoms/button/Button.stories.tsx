import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.tsx";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      description: "Свойство onClick это функция, вызываемая по клику",
      table: {
        defaultValue: { summary: "Любая функция" },
      },
    },

    isGradientBtnBg: {
      description: "Свойство isGradientBg отображает цвет фона кнопки",
      table: {
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },

    text: {
      description: "Свойство text отображает текст кнопки",
      table: {
        defaultValue: { summary: "Любой текст" },
      },
      control: "text",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    isGradientBtnBg: false,
    text: "Button",
  },
};

export const GradientButton: Story = {
  args: {
    isGradientBtnBg: true,
    text: "Button",
  },
};
