import type { Meta, StoryObj } from "@storybook/react";
import { IconLogo } from "../../atoms/_icons/Icon-logo.tsx";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer.tsx";

const meta: Meta = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <Footer
          iconLogo={<IconLogo width={200} height={64} />}
          contactsList={[
            {
              to: "tel:+88009998877",
              label: "8 (800) 999-88-77",
            },
            {
              to: "mailto: info@petcare.com",
              icon: "info@petcare.com",
            },
          ]}
          text={"©2021 PetCare. \n" + "Все права защищены"}
        />
      </BrowserRouter>
    );
  },
};