import { HomeCardInfo } from "../types/interfaces";
import trialImage from "../assets/children-home.png";
import promoImage from "../assets/Promo/summer_2024_promo.jpg";
// import promoImage from "../assets/Promo/new year promo.jpg";
import homePageImage from "../assets/home-page.png";
import schoolIcon from "../assets/tkd-logo.png";
import schedule from "../assets/Schedule/summer-2025.png";
import demoImage from "../assets/demo3.png"; 

export const homeImage = homePageImage;
export const taekwonMaruLogo = schoolIcon;
export const scheduleImage = schedule;

const trialClassInfo: HomeCardInfo = {
  title: "$10 - TRIAL LESSON",
  src: trialImage,
  description: "Take one regular class with our members, and meet our masters and students!",
  type: "image",
};

// Summer Promo
// const promoInfo: HomeCardInfo = {
//   title: "$199 - SUMMER PROMOTION!",
//   src: promoImage,
//   description:
//     "$199 for 6 weeks, 2 classes/week as a easy to start promotional package for all new students! This offer includes a t-shirt and TaekwonMaru shorts!!",
//   type: "image",
// };

const promoInfo: HomeCardInfo = {
  title: "$29 - PROMOTION!",
  src: promoImage,
  description:
    "$29 for 2 weeks, 2 classes/week as a easy to start promotional package for all new students!",
  type: "image",
};

export const HomeCardImageBoxes: HomeCardInfo[] = [trialClassInfo, promoInfo];

const govCupFirstPlace: HomeCardInfo = {
  title: "NYS Governor's Cup 2024: 1st Place!",
  src: demoImage,
  description: "",
  type: "image",
};

const foxFive: HomeCardInfo = {
  title: "Featured on FOX5 News",
  src: "https://www.youtube.com/embed/kXjyzx4wJi8",
  description: "",
  type: "video",
};

export const HomeCardVideoBoxes: HomeCardInfo[] = [govCupFirstPlace, foxFive];

const kpopTrial: HomeCardInfo = {
  title: "$25 - TRIAL CLASS",
  src: "https://www.youtube.com/embed/wgeDuo1tvYU?si=qx9s1ILjkTSGSmm5",
  description: "Take one regular className with our members!",
  type: "video",
};

const kpopMonthly: HomeCardInfo = {
  title: "$80 - MONTHLY CLASS",
  src: "https://www.youtube.com/embed/RfVxg0ij3rc?si=o5JFkR56VELz3-MX",
  description: "Learn one full choreography in 4 weeks!",
  type: "video",
};

export const HomeCardKPOPVideoBoxes: HomeCardInfo[] = [kpopTrial, kpopMonthly];

const birthdayParty: HomeCardInfo = {
  title: "Birthday Party!",
  src: "https://www.youtube.com/embed/E1LwJ5kS08I",
  description:
    "Celebrate your child's birthday at our school! Parties feature a mini-taekwondo class, games and more!!",
  type: "video",
};

const summerCamp: HomeCardInfo = {
  title: "Summer Camp!",
  src: "https://www.youtube.com/embed/yvk6skuwp-E",
  description:
    "Have your children enjoy a camp featuring Taekwondo, coding, games, arts and crafts,and much more!",
  type: "video",
};

export const HomeCardAdVideoBoxes: HomeCardInfo[] = [summerCamp, birthdayParty];

const teenClassVideo: HomeCardInfo = {
  title: "Teen and Adults!",
  src: "https://www.youtube.com/embed/uhGYAW_hvm4",
  description: "",
  type: "video",
};

const childrenClassVideo: HomeCardInfo = {
  title: "Children Classes!",
  src: "https://www.youtube.com/embed/SSplA3C-nUE",
  description: "",
  type: "video",
};

export const HomeCardKnowUsBoxes: HomeCardInfo[] = [childrenClassVideo, teenClassVideo];
