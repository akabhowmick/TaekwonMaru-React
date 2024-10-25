import { MasterInfo } from "../types/interfaces";

import ABPicture from "../assets/Masters/ab.jpg";
import MCPicture from "../assets/Masters/mc.jpg";
import MRPicture from "../assets/Masters/mr.jpg";
// import OSPicture from "../assets/Masters/os.jpg";
// import AMPicture from "../assets/Masters/am.png";
// import AJPicture from "../assets/Masters/aj.jpg";

const ab: MasterInfo = {
  title: "Master Akash",
  subtitle: "Akash Bhowmick",
  image: ABPicture,
  details: [
    "Taekwondo 4th Degree Black Belt",
    "Black Hawk Demo Team Leader 2018 and 2019",
    "TaekwonMaru Junior Leader Program Head",
    "2018/2019 NYS 1st Place Governor’s Cup Demo Team",
    "2015 NYS Sparring: Gold & Bronze Medal",
    "ATU 2021 Form Gold Medal",
    "Completed Kukkiwon - Masters Education Course",
    "M.S. in Computer Engineering – NYU, 2020",
    "Proficient in Spanish, Italian, Bengali, and Hindi",
  ],
};

const mc: MasterInfo = {
  title: "Grand Master Choi",
  subtitle: "Grand Master Seungcheol Choi",
  image: MCPicture,
  details: [
    "Taekwondo 7th Degree Black Belt",
    "Master’s Degree: Martial Arts Science",
    "Completed Kukkiwon - Masters Education Course",
    "W.T.F. Master’s Certificate of Qualification",
    "Certified Handicapped people physical Fitness and safe sports",
    "Certified Physical Fitness Training",
    "Yongmudo 3th Degree Black Belt",
    "Taught NYPD, FDNY, and Special Military Coast Guard",
    "USA Taekwondo Member",
    "Graduated from Yong-In University – Majored in Taekwondo and Special Physical Education",
  ],
};

const mr: MasterInfo = {
  title: "Head Master Rin",
  subtitle: "Head Master Yerin Choi",
  image: MRPicture,
  details: [
    "Taekwondo 5th Dan Degree Black Belt",
    "Completed Kukkiwon - Masters Education Course",
    "KPOP Dance Instructor at Maru Taekwondo",
    "Black Hawk Demo Team Coach",
    "Majored in Early Childhood Education - BMCC, 2015",
    "Certified in Child Abuse Identification",
    "ATU 2021 Form Gold Medal",
    "Poomsae Championship Gold Medalist in Korea",
    "Taekwondo Dance championship Gold Medalist in Korea",
    "National Sparring 2nd place in Korea",
    "Guest performer for Dance at Kollaboration NY and K-CON NY",
    "Guest performer for at Yong-In, Incheon, and Kyunghee Universities",
  ],
};

// const os: MasterInfo = {
//   title: "Master Owen",
//   subtitle: "Master Owen Shin",
//   image: OSPicture,
//   details: [
//     "Taekwondo 4th Degree Black Belt",
//     "Black Hawk Demo Team Leader 2021, 2023, 2024",
//     "St John's University major in Radiology",
//     "2018-2021 NYS 1st Place Governor’s Cup Demo Team",
//     "2016-2018 President Award Scholarship Recipient",
//     "NYS Sparring, Form and Board Breaking Gold Medal",
//   ],
// };

// const am: MasterInfo = {
//   title: "Instructor Ameen",
//   subtitle: "Instructor Ameen Mir",
//   image: AMPicture,
//   details: [
//     "Taekwondo 3rd Degree Black Belt",
//     "Black Hawk Demo Team Leader 2022",
//     "2018-2021 NYS 1st Place Governor’s Cup Demo Team",
//     "2015-2022 NYS Sparring, Form and Board Breaking Gold Medal",
//     "2018-2021 President Award Scholarship",
//     "Certified Lifeguard",
//     "JV Basketball Team Captain",
//     "2020-2022 National Society of Highschool Honors Award",
//     "Founder of Chess club at MDQ Academy",
//     "SAT Math and Advanced Student Math Tutor",
//     "Co-Founder of MDQ Africa Charity Organization",
//   ],
// };

// const aj: MasterInfo = {
//   title: "Instructor Andrew",
//   subtitle: "Instructor Andrew Jung",
//   image: AJPicture,
//   details: [
//     "Taekwondo 3rd Degree Black Belt",
//     "2021 NYS 1st Place Governor’s Cup Demo Team",
//     "NYS Sparring, Form and Board-Breaking Gold Medal",
//     "2019 - 2022 President Award Scholarship Recipient",
//     "2021 APC church TA",
//   ],
// };

export const masterList: MasterInfo[] = [mc, mr, ab,];

// os, am, aj
