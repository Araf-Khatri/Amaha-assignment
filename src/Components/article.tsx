import { FC } from "react";
import { FetchData } from "../Layout/articles";

const Article: FC<{ data: FetchData }> = ({ data }) => {
  return (
    <div 
      data-slug={data.slug}
      className={`article bg-white border rounded-2xl border-primary-800 
    hover:shadow-xl transition-all overflow-hidden hover:text-main
     cursor-pointer`}
    >
      <img src={`https:${data.thumb}`} />
      <div className="flex flex-col gap-4 p-6">
        <p className="onhover font-semibold">{data.title}</p>
        <p className="text-primary-200">{data.short_description}</p>
      </div>
    </div>
  );
};

export default Article;
