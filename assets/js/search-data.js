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
          description: "My efforts towards dissemination of the accumulated knowledge",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
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
            },},{id: "news-joined-university-of-oxford-as-a-postdoctoral-research-fellow",
          title: 'Joined University of Oxford as a postdoctoral research fellow',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/oxford_joining/";
            },},{id: "news-new-insights-into-stratified-line-fountains-published-in-jfm",
          title: 'New insights into stratified line fountains published in JFM',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/jfm_fountains_2026/";
            },},{
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
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Jum9p6sAAAAJ", "_blank");
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
