import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../components/ui/pages/Layout.tsx";
import { Home } from "../../components/ui/pages/home/ui/Home.tsx";
import { News } from "../../components/ui/pages/news/ui/News.tsx";
import { About } from "../../components/ui/pages/about/ui/About.tsx";
import { Blog } from "../../components/ui/pages/blog/ui/Blog.tsx";
import { Services } from "../../components/ui/pages/services/ui/Services.tsx";
import { Contacts } from "../../components/ui/pages/contacts/ui/Contacts.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);
