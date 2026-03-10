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
      title: "SmartParking",
      description: "A full-featured platform with real-time inventory management, payment processing, and admin dashboard for Parking in Metropolitan cities.",
      technologies: ["SwiftUI ", "Swift", "Stripe", "Storyboard", "CoreData", "MapKit"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Fitness Tracking iOS App",
      description: "Native iOS app for tracking workouts, nutrition, and progress with HealthKit integration and beautiful charts.",
      technologies: ["Swift", "SwiftUI", "CoreData", "HealthKit"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A personal portfolio website",
      technologies: ["React", "JavaScript", "CSS"],
      link: "#",
      github: "#"
    },
    
    {
      id: 5,
      title: "Weather Forecast iOS App",
      description: "Beautiful weather app with animated backgrounds, hourly forecasts, and location-based alerts.",
      technologies: ["Swift", "UIKit", "CoreLocation", "WeatherKit"],
      link: "#",
      github: "#"
    },
    
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
