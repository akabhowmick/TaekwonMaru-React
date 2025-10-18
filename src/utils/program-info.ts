import { ClassInfo } from "../types/interfaces";
import adultClassPicture from "../assets/ClassPictures/adult.png";
import littleTigerPicture from "../assets/ClassPictures/lt.jpg";
import preTeenClassPicture from "../assets/ClassPictures/teen.png";
import advancedTeenClassPicture from "../assets/ClassPictures/adv.png";
import childrenClassPicture from "../assets/ClassPictures/children.jpg";
import kpopPicture from "../assets/ClassPictures/kpop-group.jpg";
import demoPicture from "../assets/ClassPictures/demo.jpg";
import jlPicture from "../assets/ClassPictures/jl.jpg";
import sparringPicture from "../assets/ClassPictures/sparring.jpg";

const adultClass: ClassInfo = {
  title: "Adult (18+)",
  subtitle: "Click to learn more!",
  details: [
    "This class is aimed for adults, whether it be recent high school graduates or parents of other students. This program aims to provide a healthy and engaging option for members to stay healthy, while engaging in taekwondo.",
    "Moreover, just like with the teenager class, taekwondo, martial arts, and exercise in general has proven to be excellent in combating every day stress.",
  ],
  image: adultClassPicture,
};

const littleTigerClass: ClassInfo = {
  title: "Little Tiger (2-5)",
  subtitle: "Click to learn more!",
  details: [
    "This is our Early Childhood Program. The concept for our Little Tiger class is FUN; a fun class based on respect and discipline. We strive to increase confidence with loud, respectful answers and board breaking.",
    "The belt system is different from the regular program for children because we emphasize clarity and accuracy so all kids progress. Classes are 30 minutes; designed specifically to maintain focus during classes.",
  ],
  image: littleTigerPicture,
};

const preTeenClass: ClassInfo = {
  title: "Pre-Teen (10-13)",
  subtitle: "Click to learn more!",
  details: [
    "The Pre-Teen Program is for students approaching the middle school ages. Greater emphasis is placed on taekwondo curriculum and we aim to improve our students' physical and mental attributes.",
    "We also allow students at this age group to take leadership roles through the Junior Leader Program and become part of the Black Hawk Demo Team.",
  ],
  image: preTeenClassPicture,
};

const advTeenClass: ClassInfo = {
  title: "Adv. Teenager (14-17)",
  subtitle: "Click to learn more!",
  details: [
    "This program is aimed at high school students. Similar opportunities as membership as a Junior Leader or Demo Team are available, with even increased emphasis on the students' stamina, strength, and mentality.",
    "Participation in this program also helps greatly reduce students' stress by giving them an outlet, and provides an excellent extracurricular opportunity.",
  ],
  image: advancedTeenClassPicture,
};

const childrenClass: ClassInfo = {
  title: "Children (6-9)",
  subtitle: "Click to learn more!",
  details: [
    "Our Children Program focuses on many of the same elements as our Little Tiger Program, as we strive to keep a fun learning environment.",
    "However, we place greater emphasis on curriculum with longer classes aimed to learn the basics of taekwondo, in particular, discipline and respect. Starting at a young age also aids the students in progressing faster as they get older due to the early exposure.",
  ],
  image: childrenClassPicture,
};

const kpopDanceClass: ClassInfo = {
  title: "KPop Dance Class (7+)",
  subtitle: "Click to learn more!",
  details: [
    "Offered every Friday and Saturday, and taught by our very own Master Rin, we offer KPOP Dance Classes. These classes welcome dance and KPOP enthusiasts of all ages and levels in learning the original choreography of groups such as BTS, NCT, SuperM and SEVENTEEN over the span of 4 weeks.",
    "Participation in ONE BEAT DANCE CREW is also available through audition.",
  ],
  image: kpopPicture,
};

const sparringClass: ClassInfo = {
  title: "Sparring Class",
  subtitle: "Click to learn more!",
  details: [
    "In the taekwondo sparring class, participants engage in dynamic and controlled combat, honing their martial arts skills through strategic kicks, punches, and defensive maneuvers",
    "Under the guidance of experienced instructors, students develop precision, agility, and discipline while fostering a spirit of friendly competition within a supportive training environment.",
  ],
  image: sparringPicture,
};

const juniorLeader: ClassInfo = {
  title: "Junior Leader",
  subtitle: "Click to learn more!",
  details: [
    "The junior leader program comprises of dedicated and skilled practitioners who support and guide their fellow students in their martial arts journey.",
    "Serving as mentors, these assistants exemplify leadership, discipline, and a commitment to fostering a positive and inclusive learning environment within the taekwondo community.",
  ],
  image: jlPicture,
};

const blackHawkDemoTeam: ClassInfo = {
  title: "Demo Team",
  subtitle: "Click to learn more!",
  details: [
    "Our Taekwondo demonstration team, Black Hawk, showcases the artistry and precision of taekwondo through coordinated and high-energy performances.",
    "Comprising skilled practitioners, the team seamlessly executes a blend of powerful kicks, acrobatics, and choreographed sequences, captivating audiences with the athleticism and grace inherent in taekwondo.",
    "The team not only competes in taekwondo competitions, but we also perform in volunteer settings for hospitals, elderly care, schools, and more!",
  ],
  image: demoPicture,
};

export const classList: ClassInfo[] = [
  littleTigerClass,
  childrenClass,
  preTeenClass,
  advTeenClass,
  adultClass,
  kpopDanceClass,
  sparringClass,
  juniorLeader,
  blackHawkDemoTeam,
];
