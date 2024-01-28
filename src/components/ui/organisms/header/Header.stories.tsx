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
  argTypes: {
    iconLogo: {
      description: "Свойство iconLogo принимает иконку логотипа",
      control: {
        disable: true,
      },
    },

    isBurgerMenuOpen: {
      description:
        "Свойство isBurgerMenuOpen отображает открыто ли бургер-меню",
      control: {
        type: "boolean",
      },
    },

    toggleBurgerMenu: {
      description:
        "Свойство toggleBurgerMenu это функция для открытия/закрытия бургер-меню",
      control: {
        disable: true,
      },
    },

    isTablet: {
      description:
        "Свойство isTablet предназначено для отображения контента для планшетов",
      control: {
        type: "boolean",
      },
    },

    navList: {
      description: "Свойство navList принимает список элементов навигации",
      control: {
        disable: true,
      },
    },

    socialList: {
      description:
        "Свойство socialList принимает список элементов иконок соц. сетей",
      control: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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
