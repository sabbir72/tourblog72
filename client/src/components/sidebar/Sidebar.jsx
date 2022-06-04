import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          className="sideBarImg"
          src="https://sabbir72.github.io/Mind-Fresh-Travelling/resources/img/L4.png"
          alt=""
          srcset=""
        />
        <p className="pera">
          আপনাদের সকলকে জানাই মাইন্ড ফ্রেশ ট্রাভেলিং পরিবারের পক্ষ থেকে
          শুভেচ্ছা। আমাদের এই পেইজটি ভ্রমন প্রিয় মানুষদের জন্য। আমরা বাংলাদেশের
          বিভিন্ন স্থানে ভ্রমন করে থাকি। স্বল্প খরচে ভালো মানের ভ্রমণ উপহার
          দেয়া আমাদের মূল উদ্দেশ্য। বাংলাদেশের ঐতিহাসিক স্থান ও প্রাকৃতিক
          সৌন্দর্যে ঘেরা স্থানগুলো ভ্রমণ করে থাকি। কারণ , আমরা বিশ্বাস করি ভ্রমণ
          মানুষকে ভাবতে শেখায়, প্রকৃতি মানুষকে কবি ,সাহিত্যিক , লেখক হতে
          শেখায়। তাই মূল লক্ষ্য আপনাদের ভ্রমণকে সহজ করা এবং আনন্দদায়ক করে
          তোলা। আমাদের এই পেইজ ছাড়াও ফেসবুকে একটি গ্রুপ এবং পেইজ আছে | পর্যটন
          স্থানগুলো নিজ দায়িত্বে পরিষ্কার রাখবেন । বর্তমানে আমরা বাংলাদেশের
          বিভিন্ন স্থানে ভ্রমণের আয়োজন করে থাকি। আমাদের পরবর্তী লক্ষ্য আমরা
          বাংলাদেশ পেরিয়ে বহির্বিশ্বেও ভ্রমণের প্রয়োজনীয় সকল ব্যবস্থা করব ইন্-শা-আল্লাহ।
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <Link to={`/cat=${c.name}`} className="link">
              <li className="sideBarListItem"> {c.name} </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
        <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="sideBarIcon fab fa-facebook-square"></i></a>
        <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="sideBarIcon fab fa-twitter-square"></i></a>
        <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="sideBarIcon fab fa-instagram-square"></i></a>
        <a target="blank" href="https://www.facebook.com/mind.fresh.travelling"><i className="sideBarIcon fab fa-linkedin"></i></a>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
