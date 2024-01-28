import { Styles } from "../../../app/assets/styles/styles.tsx";
import { Header } from "../organisms/header/Header.tsx";
import { Container } from "../../../app/assets/styles/Container.ts";
import { Outlet } from "react-router-dom";
import React from "react";
import { LinkType } from "../molecules/links-list/Links-list.tsx";
import { IconInstagram } from "../atoms/_icons/Icon-instagram.tsx";
import { IconTelegram } from "../atoms/_icons/Icon-telegram.tsx";
import { IconVk } from "../atoms/_icons/Icon-vk.tsx";
import { IconLogo } from "../atoms/_icons/Icon-logo.tsx";
import { Footer } from "../organisms/footer/Footer.tsx";

export const Layout = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(window.innerWidth <= 1024);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleResize = () => {
    setIsTablet(window.innerWidth <= 1024);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderIconLogo = () => {
    const iconLogoSize = isTablet
      ? { width: 120, height: 38 }
      : { width: 200, height: 64 };
    return <IconLogo {...iconLogoSize} />;
  };

  const NavListMock: Array<LinkType> = [
    { to: "/news", label: "Новости", onClickLink: toggleBurgerMenu },
    { to: "/about", label: "О нас", onClickLink: toggleBurgerMenu },
    { to: "/blog", label: "Блог", onClickLink: toggleBurgerMenu },
    { to: "/services", label: "Услуги", onClickLink: toggleBurgerMenu },
    { to: "/contacts", label: "Контакты", onClickLink: toggleBurgerMenu },
  ];

  const SocialListMock: Array<LinkType> = [
    {
      to: "https://instagram.com/",
      icon: <IconInstagram width={40} height={40} />,
    },
    {
      to: "https://telegram.org/",
      icon: <IconTelegram width={40} height={40} />,
    },
    { to: "https://vk.ru/", icon: <IconVk width={40} height={40} /> },
  ];

  const ContactsListMock: Array<LinkType> = [
    {
      to: "tel:+88009998877",
      label: "8 (800) 999-88-77",
    },
    {
      to: "mailto: info@petcare.com",
      icon: "info@petcare.com",
    },
  ];

  return (
    <Styles>
      <Container>
        <Header
          isBurgerMenuOpen={isBurgerMenuOpen}
          toggleBurgerMenu={toggleBurgerMenu}
          isTablet={isTablet}
          navList={NavListMock}
          socialList={SocialListMock}
          iconLogo={renderIconLogo()}
        />

        <main>
          <Outlet />
        </main>

        <Footer
          contactsList={ContactsListMock}
          text={"©2021 PetCare. \n" + "Все права защищены "}
          iconLogo={renderIconLogo()}
        />
      </Container>
    </Styles>
  );
};
