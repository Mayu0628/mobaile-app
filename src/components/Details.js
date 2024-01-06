import React from "react";
import "./css/Details.css";
import { useParams } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import CreatePost from "./CreatePost";
import { Posts } from "./Posts";

const events = [
  {
    id: 1,
    title: "金沢城・兼六園四季物語～冬の段～",
    date: "2024年2月3日（土）10日（土）11日（日）17日（土）",
  },
  {
    id: 2,
    title: "金沢港クルーズターミナル ベイサイドクリスマスイルミネーション",
    date: "2022年12月6日(火)～",
  },
  {
    id: 3,
    title: "金沢芸妓のほんものの芸にふれる旅 2023-24",
    date: "2023年4月22日(土)～2024年3月30日(土)",
  },
  {
    id: 4,
    title: "金沢城・兼六園四季物語～秋の段～",
    date: "2023年9月30日(土)、10月7日(土)・8日(日)・14日(土)・21日(土)",
  },
  {
    id: 5,
    title: "金沢城・兼六園四季物語（観桜期）2023",
    date: "2023年3月27日(月)～4月2日(日)",
  },
  { id: 6, title: "近江町市場 カニまつり", date: "2023年11月11日（土）" },
];

const Details = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id.toString() === eventId);

  if (!event) {
    return <div>イベントが見つかりません。</div>;
  }

  const images = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
  };

  const getImageByEventId = (eventId) => images[eventId] || "";

  return (
    <div>
      <div className="EventHeader">
        <img src={getImageByEventId(eventId)} alt={event.title} />
        <div className="EventInfo">
          <h2>{event.title}</h2>
          <p>{event.date}</p>
        </div>
      </div>
      <div className="ReviewsSection">
        <Posts className="Posts" />
        <CreatePost className="CreatePost" />
      </div>
    </div>
  );
};

export default Details;
