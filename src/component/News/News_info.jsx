import { useEffect, useState } from "react";
import data_en from "../../DATA_BLOG/blogs-en.json";
import data_vi from "../../DATA_BLOG/blogs-vn.json";
import { useTranslation } from "react-i18next";
const News_info = () => {
  const { t, i18n } = useTranslation();
  const [data, setdata] = useState(i18n.language === "en" ? data_en : data_vi);
  const language = sessionStorage.getItem("language") || "vi";
  useEffect(() => {
    setdata(language === "en" ? data_en : data_vi);
  }, [language]);
  // console.log(data[0].frontMatter.title_thumbnail)
  return (
    <div>
      <div className="container">
        {/* {data[0].frontMatter.title_thumbnail} */}
        <div class="grid grid-cols-1 lg:grid-cols-10 gap-4">
          <div class="sm:col-span-2 lg:col-span-7 bg-blue-200 p-4">
            <h2 class="text-2xl font-bold">Cột 1 (70%)</h2>
            <p>Nội dung của cột 1...</p>
          </div>
          <div class="sm:col-span-2 lg:col-span-3 bg-green-200 p-4">
            <h2 class="text-2xl font-bold">Cột 2 (30%)</h2>
            <p>Nội dung của cột 2...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News_info;
