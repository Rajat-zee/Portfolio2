/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rajat's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rajat Kashyap Portfolio",
    type: "website",
    url: "https://rajat-zee.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Rajat Kashyap",
  logo_name: "RajatKashyap",
  subTitle:
    "A driven individual passionate about developing end-to-end products that build sustainable, scalable social and technical systems to create meaningful impact.",
  resumeLink:
    "https://drive.google.com/file/d/17jD1awOAD2IAMgMyUNphOrFb8BwEvRua/view?usp=sharing",
  githubProfile: "https://github.com/Rajat-zee",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Rajat-zee",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rajat-kashyap-a35b59201",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:rajatt.kashyap@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Application Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experienced C# .NET developer",
        "⚡ Developed scalable applications via REST",
        "⚡ Familiarity with Python, Java and C language",
      ],
      softwareSkills: [
        {
          skillName: "C# DotNet",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#7b2091",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        }
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React.js",
        "⚡ Developed backend in Asp.Net and Django",
        "⚡ Ensured authentication and authorization via JWT and OAuth"
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Asp.Net",
          fontAwesomeClassname: "logos-dotnet",
          style: {
            backgroundColor: "#000000",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "#000000",
            color: "#34eb86",
          },
        },
      ],
    },
    {
      title: "Database and Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in SQL RDBMS",
        "⚡ Familiarity with PostgreSQL and MongoDB",
        "⚡ Experience working on Azure cloud platform",
        "⚡ Familiarity with AWS and Heroku for hosting",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos-mysql",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        }
      ],
    },
    {
      title: "Extras",
      fileName: "DesignImg",
      skills: [
        "⚡ Version control via git (AzureDevops, Gitlab and Github)",
        "⚡ Knowledge of Digital maketing(SEO, Wordpress, Affiliate Marketing, etc)"
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#eb4034",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#205e91",
          },
        }
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Rajat-zee/",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chitkara University Punjab",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "Chitkara.jpg",
      alt_name: "Chitkara",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Studied software engineering subjects like DS, Algorithms, DBMS, OS, CA etc.",
        "⚡ I have done my specialization in Python [Web development , Data science, etc]",
        "⚡ Took part in various activities like hackathons, seminars, webinars ,etc.",
      ],
      website_link: "https://www.chitkara.edu.in/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Az-900",
      subtitle: "- Microsoft",
      logo_path: "microsoft.webp",
      certificate_link:
        "https://www.credly.com/badges/73944907-3614-436f-ad1c-5c2a75c50ead/linked_in_profile",
      alt_name: "Microsoft",
      color_code: "white",
    },
    {
      title: "Cybersecurity",
      subtitle: "- Cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1FrQt1kcx8tvHIpPHyC1jv5CW7If7XnrM/view?usp=sharing",
      alt_name: "Cisco",
      color_code: "#00bcea",
    },
    {
      title: "Python",
      subtitle: "- by NPTEL",
      logo_path: "nptel.png",
      alt_name: "NPTEL",
      color_code: "white",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Experienced in developing and delivering software solutions for US-based clients, with a focus on microservices and cloud. Skilled in collaborating across diverse teams, including onshore and offshore developers, to ensure effective communication and project success.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate 2",
          company: "PwC Acceleration Centre",
          company_url: "https://www.pwc.in/",
          logo_path: "pwc.png",
          duration: "Jul 2023 - Oct 2024",
          location: "Bengaluru, India",
          description:
            "Worked for a US based Telecom giant across numerous joint initiatives led by PwC, engaging with multiple third-party firms. Within diverse teams, I embraced various responsibilities and notably served as an offshore lead. Collaborating seamlessly with both onshore and offshore developers, as well as our client's developers, I facilitated effective communication and synergy. Developed new microservices and improved legacy implementations.",
          color: "white",
        },
        {
          title: "Associate",
          company: "PwC Acceleration Centre",
          company_url: "https://www.pwc.in/",
          logo_path: "pwc.png",
          duration: "Aug 2022 - Jul 2023",
          location: "Bengaluru, India",
          description:
            "Developed solutions across multiple US based client projects as Azure cloud developer. Operating within an offshore Agile environment, I fostered collaborative efforts to drive project success. My focus on writing robust code, coupled with meticulous documentation and rigorous testing, guaranteed the delivery of reliable software solutions.",
          color: "white",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Application Developer Intern",
          company: "PwC Acceleration Centre",
          company_url: "https://www.pwc.in/",
          logo_path: "pwc.png",
          duration: "Mar 2022 - Aug 2022",
          location: "Bengaluru, India",
          description:
            "Trained as a full-stack .NET developer and successfully developed an ecommerce website, applying theoretical learning to practical application. Had the privelage to gain first hand experience by partaking in an internal Azure based project.",
          color: "white",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilePic.png",
    description:
      "I am available on given social media, feel free to reach out. I can help you with C# DotNet, React, Azure cloud and SQL Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I would like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
