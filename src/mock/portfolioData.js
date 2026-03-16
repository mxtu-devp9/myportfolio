export const portfolioData = {
  hero: {
    name: "Miten Mistry",
    title: "Full Stack & iOS Developer",
    subtitle: "Crafting seamless digital experiences across platforms",
    description: "Specialized in building scalable web applications and native iOS apps with modern technologies"
  },
  about: {
    text: "I'm a passionate full-stack developer with expertise in both web and iOS development. With a keen eye for design and a strong foundation in computer science, I create applications that are not only functional but also beautiful and user-friendly.",
    stats: [
      { label: "Years Experience", value: "1 Year" },
      { label: "Projects Completed", value: "10+" },
      { label: "Technologies", value: "15+" },
    ]
  },
  skills: {
    frontend: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "FastAPI", level: 87 },
      { name: "MongoDB", level: 95 }
    ],
    mobile: [
      { name: "Swift", level: 90 },
      { name: "SwiftUI", level: 88 },
      { name: "UIKit", level: 85 },
      { name: "Xcode", level: 92 }
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Figma", level: 85 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "SmartParking n Car Rental Application",
      image: "images/car-rent.png",
      imageSize: "w-40 h-40",
      description: "A full-featured platform with real-time inventory management, payment processing, and admin dashboard for Parking in Metropolitan cities.",
      fullDescription: "SmartParking is a comprehensive parking and car rental management solution designed for metropolitan cities. It allows users to find, book, and pay for parking spots in real time. The car rental module lets users browse available vehicles, make reservations, and process payments securely via Stripe. The admin dashboard provides full control over inventory, pricing, and analytics.",
      screenshots: [
        "images/car-rent.png",
        "images/car-rent.png",
        "images/car-rent.png"
      ],
      techLevels: [
        { name: "SwiftUI", level: 90 },
        { name: "Swift", level: 88 },
        { name: "Stripe", level: 75 },
        { name: "CoreData", level: 85 },
        { name: "MapKit", level: 80 }
      ],
      technologies: ["SwiftUI", "Swift", "Stripe", "Storyboard", "CoreData", "MapKit"],
      link: "https://mxtu-devp9.github.io/Parking-n-Car-Rental-/",
      github: "https://github.com/mxtu-devp9/Parking-n-Car-Rental-"
    },
    {
      id: 2,
      title: "Supermarket Application",
      image: "images/grocery-cart.png",
      imageSize: "w-40 h-40",
      description: "An online superstore application for user where they can buy there daily essentials at one place and get delivered at their homes within 30 minutes.",
      fullDescription: "A full-featured online supermarket app built with Swift and SwiftUI. Users can browse categories, add items to cart, track orders in real time using MapKit, and pay securely via Stripe. The app supports user authentication, order history, and push notifications for delivery updates.",
      screenshots: [
        "images/grocery-cart.png",
        "images/grocery-cart.png",
        "images/grocery-cart.png"
      ],
      techLevels: [
        { name: "Swift", level: 90 },
        { name: "SwiftUI", level: 88 },
        { name: "CoreData", level: 85 },
        { name: "Stripe", level: 75 },
        { name: "MapKit", level: 80 }
      ],
      technologies: ["Swift", "SwiftUI", "CoreData", "Stripe", "Mapkit", "Storyboard"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Fitness Tracking iOS App",
      image: "images/online-coach.png",
      imageSize: "w-40 h-40",
      description: "Native iOS app for tracking workouts, nutrition, and progress with HealthKit integration and beautiful charts.",
      fullDescription: "A native iOS fitness app built with SwiftUI that integrates with Apple HealthKit to track workouts, calories, and progress over time. Features beautiful animated charts, custom workout plans, daily nutrition logging, and weekly progress reports to help users stay on track with their fitness goals.",
      screenshots: [
        "images/online-coach.png",
        "images/online-coach.png",
        "images/online-coach.png"
      ],
      techLevels: [
        { name: "Swift", level: 90 },
        { name: "SwiftUI", level: 88 },
        { name: "CoreData", level: 85 },
        { name: "HealthKit", level: 80 }
      ],
      technologies: ["Swift", "SwiftUI", "CoreData", "HealthKit"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      image: "images/portofolio.png",
      imageSize: "w-40 h-40",
      description: "A modern and responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience as a Full Stack & iOS Developer.",
      fullDescription: "A modern and responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, a dark theme, multi-language support, project showcase with detail pages, skills with progress bars, experience timeline, and a working contact form.",
      screenshots: [
        "images/portofolio.png",
        "images/portofolio.png",
        "images/portofolio.png"
      ],
      techLevels: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 82 },
        { name: "Tailwind CSS", level: 92 },
        { name: "CSS", level: 88 }
      ],
      technologies: ["React", "JavaScript", "CSS"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Interview Coach Application",
      image: "images/coaching.png",
      imageSize: "w-40 h-40",
      description: "An coaching application which can help people to practice and give idea about interviews for getting cracked jobs interview in real time.",
      fullDescription: "An AI-powered interview coaching app built with SwiftUI that helps users prepare for job interviews. Features mock interview sessions, real-time feedback on answers, a library of common interview questions by industry, progress tracking, and tips for improving communication skills.",
      screenshots: [
        "images/coaching.png",
        "images/coaching.png",
        "images/coaching.png"
      ],
      techLevels: [
        { name: "SwiftUI", level: 88 },
        { name: "Swift", level: 90 },
        { name: "CoreData", level: 82 },
        { name: "API", level: 78 }
      ],
      technologies: ["SwiftUI", "Swift", "CoreData", "API"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Weather Forecast iOS App",
      image: "images/weather-app.png",
      imageSize: "w-40 h-40",
      description: "Beautiful weather app with animated backgrounds, hourly forecasts, and location-based alerts.",
      fullDescription: "A visually stunning iOS weather app that uses CoreLocation for real-time location detection and WeatherKit for accurate forecasts. Features animated backgrounds that change based on weather conditions, hourly and 7-day forecasts, customizable weather alerts, and a clean minimal UI built with UIKit.",
      screenshots: [
        "images/weather-app.png",
        "images/weather-app.png",
        "images/weather-app.png"
      ],
      techLevels: [
        { name: "Swift", level: 90 },
        { name: "UIKit", level: 85 },
        { name: "CoreLocation", level: 82 },
        { name: "WeatherKit", level: 78 }
      ],
      technologies: ["Swift", "UIKit", "CoreLocation", "WeatherKit"],
      link: "#",
      github: "#"
    }
  ],
  experience: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Acmegrade",
      period: "2022 - 2023",
      description: "Leading development of cloud-based SaaS products, mentoring junior developers, and implementing CI/CD pipelines."
    },
    {
      id: 2,
      title: "iOS Developer",
      company: "Bharti Soft Tech Pvt. Ltd.",
      period: "2024 - 2025",
      description: "Developed and maintained multiple iOS applications with 100K+ downloads, focusing on performance optimization."
    },
  ],
  contact: {
    email: "mitenmistry09@gmail.com",
    phone: "+49 1639787588",
    location: "Berlin, Germany",
    social: {
      github: "https://github.com/mxtu-devp9",
      linkedin: "www.linkedin.com/in/miten-mistry-39233b259"
    }
  }
};