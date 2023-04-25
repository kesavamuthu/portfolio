const user = [
  {
    name: "gokul2908",
    logo: "./images/gokul_logo.png",
    contactNo: 9047234234,
    introText: [
      "I am Gokul",
      "Portfolio using React, Typescript, SCSS and Bootstrap with responsive layout",
    ],
    video: "https://www.youtube.com/watch?v=f02mOEt11OQ",
    navigation: ["Home", "Project", "FAQ", "Contact"],
    projects: [
      [
        "title",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      ],
    ],
    email: "gokulkumar2908@gmail.com",
    filteredProjects: ["ansys-fluent"],
    projectInfo: [{}],
    openSourceProjectsInfo: {
'':null
    }
  },
  {
    name: "kesavamuthu",
    logo: "./images/kesav_logo.jpg",
    introText: [
      " ",
      `My name is kesav. I've ${new Date().getFullYear() - 2017}+ years of experience in software development & team management...`,
    ],
    video: "https://www.youtube.com/embed/_luhn7TLfWU",
    navigation: ["Home", "Project", "Contact"],
    projects: [["title", "content"]],
    email: "kesavamuthu77@gmail.com",
    projectInfo: [{
      name: 'Medium like blogging CMS app.',
      description: "The CMS application, designed for both the Admin and User, was constructed within a single package. I, as a sole contributor, developed this application from start to finish, utilizing the outbox model to publish articles. The determination of various role-based permissions was achieved through the use of a Tree data structure and middleware. Additionally, dynamic loading was implemented to enhance the application's performance for end-users.",
      techStack: ['Next js', 'Prisma', "React Js", "Js", "MUI"],
    }],
    openSourceProjectsInfo: {
      '':null

    }
  },
];

export default user;
