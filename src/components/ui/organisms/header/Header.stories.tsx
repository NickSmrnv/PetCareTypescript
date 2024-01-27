import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header.tsx";
import { IconLogo } from "../../atoms/_icons/Icon-logo.tsx";
import { BrowserRouter } from "react-router-dom";
import { IconInstagram } from "../../atoms/_icons/Icon-instagram.tsx";
import { IconTelegram } from "../../atoms/_icons/Icon-telegram.tsx";
import { IconVk } from "../../atoms/_icons/Icon-vk.tsx";

const meta: Meta = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    to: "#",
    children: <IconLogo />,
  },

  render: () => {
    return (
      <BrowserRouter>
        <Header
          iconLogo={<IconLogo width={200} height={64} />}
          isBurgerMenuOpen={false}
          toggleBurgerMenu={function (): void {
            throw new Error("Function not implemented.");
          }}
          isTablet={false}
          navList={[
            { to: "/home", label: "Новости" },
            { to: "/about", label: "О нас" },
            { to: "/contact", label: "Контакты" },
          ]}
          socialList={[
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
