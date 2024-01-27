import type { Meta, StoryObj } from "@storybook/react";
import { ButtonBurger } from "./Button-burger.tsx";

const meta = {
  title: "Atoms/ButtonBurger",
  component: ButtonBurger,
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

    isBurgerMenuOpen: {
      description:
        "Свойство isBurgerMenuOpen отображает открыто ли бургер-меню",
      table: {
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
} satisfies Meta<typeof ButtonBurger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClosedButtonBurger: Story = {
  args: {
    isBurgerMenuOpen: false,
  },
};

export const OpenButtonBurger: Story = {
  args: {
    isBurgerMenuOpen: true,
  },
};
