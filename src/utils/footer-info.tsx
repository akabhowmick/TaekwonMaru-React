import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { OpeningHour, ContactInfo, SocialLink } from "../types/interfaces";



export const OPENING_HOURS: OpeningHour[] = [
  { days: "Mon,Wed,Thu:", hours: "3:00pm - 9:00pm" },
  { days: "Tues & Fri:", hours: "3:00pm - 8:00pm" },
  { days: "Saturday", hours: "10:00am - 2:30 pm" },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "fas fa-home mr-3",
    href: "https://www.google.com/maps/place/Maru+TaeKwonDo/@40.7412438,-73.4996425,17z/data=!3m1!4b1!4m6!3m5!1s0x89c280690b8faf85:0x1445eec347bb2097!8m2!3d40.7412398!4d-73.4970622!16s%2Fg%2F1ptx7d04z?entry=ttu",
    text: "611 Hicksville Rd. Bethpage, NY 11714",
  },
  {
    icon: "fas fa-envelope mr-3",
    href: "mailto:usataekwonmaru@gmail.com",
    text: "usataekwonmaru@gmail.com",
  },
  {
    icon: "fas fa-phone mr-3",
    href: "tel://5164331887",
    text: "(516) 433-1887",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.facebook.com/profile.php?id=100057127915552",
    icon: <FacebookIcon fontSize="large" />,
    ariaLabel: "Link to Facebook Account",
  },
  {
    href: "https://www.instagram.com/marutkd1/",
    icon: <InstagramIcon fontSize="large" />,
    ariaLabel: "Link to Instagram Account",
  },
];