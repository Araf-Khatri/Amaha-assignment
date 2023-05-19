import {
  FC,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import Axios from "axios";

import Article from "../Components/article";
import { PopupData } from "../Types/popup-data";

export type FetchData = {
  id: string;
  reading_time: string;
  short_description: string;
  slug: string;
  thumb: string;
  title: string;
};

const Articles: FC<{
  filter: string;
  openpopup: (data: PopupData) => void;
}> = ({ filter, openpopup }) => {
  const [articles, setArticles] = useState<FetchData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10"
      );
      setArticles(res.data.data);
    };
    fetchData();
  }, []);

  const onClickHandler = async (
    e: SyntheticEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as Element;
    if (!target.closest(".article")) return;

    const slug: string | undefined = (target.closest(".article") as HTMLElement)
      .dataset.slug;
    const {
      data: { blog },
    } = await Axios.get(
      `https://api.theinnerhour.com/v1/blogdetail/${slug ?? ""}`
    );
    const popupWindowData: PopupData = {
      image: `https:${blog.cover}`,
      title: blog.title,
      body: blog.body,
    };
    openpopup(popupWindowData);
  };

  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      onClick={onClickHandler}
    >
      {articles.map((data: FetchData) => {
        const trimmedFilter = filter.trim();
        if (
          !trimmedFilter.length ||
          data.title.toLowerCase().includes(trimmedFilter.trim())
        )
          return <Article key={data.id} data={data} />;
      })}
    </div>
  );
};

export default Articles;
