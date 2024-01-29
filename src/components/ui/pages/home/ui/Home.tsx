import { Slider } from "../../../organisms/slider/Slider.tsx";
import { SwiperItemType } from "../../../molecules/swiper-item/Swiper-item.tsx";

export const Home = () => {
  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SlidesList: Array<SwiperItemType> = [
    {
      title: "Мы заботимся\n" + "о ваших питомцах",
      text:
        "Записывайтесь в ветклиники\n" +
        "и консультируйтесь с ветеринарным врачом онлайн",
      imageSrc: "../src/app/assets/images/Slide-1-desktop.jpg",
      imageAlt: "Серый полосатый кот сидит.",
      isGradientBtnBg: true,
      textButton: "Связаться с нами",
      onClickButton: scrollToFooter,
    },

    {
      title: "Закажите план заботы",
      text: "Регулярная доставка специально подобранного корма и других товаров для кошек и собак",
      price: "1299",
      imageSrc: "../src/app/assets/images/Slide-2-desktop.jpg",
      imageAlt: "Голова коричневой собаки с красным ошейником.",
      isGradientBtnBg: false,
      textButton: "Подобрать план",
    },
  ];

  return (
    <div>
      <Slider items={SlidesList} />;
    </div>
  );
};
