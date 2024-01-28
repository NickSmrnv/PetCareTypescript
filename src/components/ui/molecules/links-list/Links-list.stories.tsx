import type { Meta, StoryObj } from "@storybook/react";
import { LinksList } from "./Links-list.tsx";
import { IconInstagram } from "../../atoms/_icons/Icon-instagram.tsx";
import { IconTelegram } from "../../atoms/_icons/Icon-telegram.tsx";
import { IconVk } from "../../atoms/_icons/Icon-vk.tsx";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Molecules/LinksList",
  component: LinksList,
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

    links: {
      description: "Свойство onClick это функция, вызываемая по клику",
      table: {
        defaultValue: { summary: "Array<LinkType>" },
      },
    },
  },
} satisfies Meta<typeof LinksList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLinksList: Story = {
  args: {
    links: [
      { to: "/home", label: "Новости" },
      { to: "/about", label: "О нас" },
      { to: "/contact", label: "Контакты" },
    ],
  },

  render: () => {
    return (
      <BrowserRouter>
        <LinksList
          links={[
            { to: "/home", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ]}
        />
      </BrowserRouter>
    );
  },
};

export const IconsLinksList: Story = {
  args: {
    links: [
      {
        to: "https://instagram.com/",
        icon: <IconInstagram width={40} height={40} />,
      },
      {
        to: "https://telegram.org/",
        icon: <IconTelegram width={40} height={40} />,
      },
      {
        to: "https://vk.ru/",
        icon: <IconVk width={40} height={40} />,
      },
    ],
  },

  render: () => {
    return (
      <BrowserRouter>
        <LinksList
          links={[
            {
              to: "https://instagram.com/",
              icon: <IconInstagram width={40} height={40} />,
            },
            {
              to: "https://telegram.org/",
              icon: <IconTelegram width={40} height={40} />,
            },
            {
              to: "https://vk.ru/",
              icon: <IconVk width={40} height={40} />,
            },
          ]}
        />
      </BrowserRouter>
    );
  },
};
