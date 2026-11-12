// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Broad areas in which I have devoted some time",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses and university teaching in fluid mechanics and computational methods",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Research updates, talks, publications and fieldwork, newest first",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-measurements-conducted-in-vande-bharat-train-to-assess-thermal-comfort-and-iaq",
          title: 'Measurements conducted in Vande Bharat train to assess thermal comfort and IAQ',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/vande_bharat_iaq/";
            },},{id: "news-a-preliminary-numerical-study-of-viscosity-stratified-jets",
          title: 'A preliminary numerical study of viscosity-stratified jets',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/animesh_internship/";
            },},{id: "news-phd-thesis-defense-at-iit-delhi",
          title: 'PhD thesis defense at IIT Delhi',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/phd_defense/";
            },},{id: "news-book-chapter-on-the-equivalence-of-top-and-bottom-gravity-currents",
          title: 'Book chapter on the equivalence of top and bottom gravity currents',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/agu_book_chapter_2025/";
            },},{id: "news-joined-department-of-earth-sciences-at-university-of-oxford-as-a-postdoctoral-research-fellow",
          title: 'Joined Department of Earth Sciences at University of Oxford as a Postdoctoral Research...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/oxford_joining/";
            },},{id: "news-new-study-providing-insights-into-turbulent-impinging-line-fountains-published-in-journal-of-fluid-mechanics",
          title: 'New study providing insights into turbulent impinging line fountains published in Journal of...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/jfm_fountains_2026/";
            },},{id: "news-launched-a-youtube-course-aimed-to-introduce-turbulent-flows-to-absolute-beginners",
          title: 'Launched a YouTube course aimed to introduce turbulent flows to absolute beginners',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/turbulence_course_2026/";
            },},{id: "news-new-paper-investigating-the-maximum-sealing-effectiveness-of-air-curtains-published-in-physical-review-fluids",
          title: 'New paper investigating the maximum sealing effectiveness of air curtains published in Physical...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/prfluids_air_curtain_2026/";
            },},{id: "news-presented-a-part-of-my-phd-research-during-the-uk-fluids-conference-2026-at-the-university-of-leeds-elucidating-the-mechanisms-of-fluid-transport-across-air-curtains",
          title: 'Presented a part of my PhD research during the UK Fluids Conference 2026...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%69%74%61%6E%6D%61%79@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/iitanmay", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tanmay-agrawal-65422b2a7", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0777-2527", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Jum9p6sAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.earth.ox.ac.uk/people/tanmay-agrawal", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@TanmayAgrawal7", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
