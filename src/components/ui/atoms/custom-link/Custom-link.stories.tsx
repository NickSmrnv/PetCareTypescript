import type { Meta, StoryObj } from "@storybook/react";
import { CustomLink } from "./Custom-link.tsx";
import { BrowserRouter } from "react-router-dom";
import { IconLogo } from "../_icons/Icon-logo.tsx";
import { JSX } from "react/jsx-runtime";

const meta = {
  title: "Atoms/CustomLink",
  component: CustomLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Свойство className добавляет класс компоненте",
      table: {
        defaultValue: { summary: "Любой текст" },
      },
      control: "text",
    },

    label: {
      description: "Свойство label отображает текст внутри ссылки",
      table: {
        defaultValue: { summary: "Любой текст" },
      },
      control: "text",
    },

    to: {
      description: "Свойство to отображает URL или путь, куда ведет ссылка",
      table: {
        defaultValue: { summary: "Любой текст" },
      },
      control: "text",
    },

    onClick: {
      description: "Свойство onClick это функция, вызываемая по клику",
      table: {
        defaultValue: { summary: "Любая функция" },
      },
    },

    iconLink: {
      description: "Свойство iconLink позволяет принимать React компоненты",
      table: {
        defaultValue: { summary: "React Node" },
      },
      control: "Node",
    },
  },
} satisfies Meta<typeof CustomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCustomLink: Story = (args: JSX.IntrinsicAttributes) => {
  return (
    <BrowserRouter>
      <CustomLink to={"#"} {...args} />
    </BrowserRouter>
  );
};

DefaultCustomLink.args = {
  label: "Новости",
  to: "#",
};

export const IconCustomLink: Story = {
  args: {
    to: "#",
    iconLink: <IconLogo />,
  },

  render: () => {
    return (
      <BrowserRouter>
        <CustomLink to={"#"} iconLink={<IconLogo width={200} height={64} />} />
      </BrowserRouter>
    );
  },
};
