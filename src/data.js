// Edit your content here. The page in App.jsx reads everything from this file.
import framerLogo from "./assets/framer.webp";
import figmaLogo from "./assets/figma.svg";
import openCodeLogo from "./assets/opencode.svg";
import notionLogo from "./assets/notion.svg";
import nextjsLogo from "./assets/nextdotjs.svg";
import githubLogo from "./assets/github.svg";
import vercelLogo from "./assets/vercel.svg";
import reactBitsLogo from "./assets/reactbits.svg";
import magicUiLogo from "./assets/magicui.svg";
import openaiLogo from "./assets/openai.svg";
import profilePic from "./assets/carlpic.jpg";
import semPic from "./assets/Sempic.png";
import awsCert from "./assets/AWS AI FUNDAMENTALS CERT.pdf";
import awsCertPreview from "./assets/aws-cert-preview.png";
import awsCloudCert from "./assets/AWS CLOUD COMPUTING CERTIFICATE.pdf";
import awsCloudPreview from "./assets/aws-cloud-cert-preview.png";
import networkCert from "./assets/NETWORKING BASICS CERT.pdf";
import networkPreview from "./assets/networking-cert-preview.png";

export const navItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "tools", label: "Tools", icon: "wrench" },
  { id: "blog", label: "Blog", icon: "edit" },
];

// ===== PROFILE (your avatar card, top left) =====
export const profile = {
  name: "Carl Gallano",
  pic: profilePic,
  bio: "A frontend developer and UI/UX designer that loves creating intuitive and engaging user experiences.",
  socials: [
    { icon: "facebook", href: "https://www.facebook.com/carl.gallano.507" },
    { icon: "instagram", href: "https://www.instagram.com/pitchickoy/" },
    { icon: "github", href: "https://github.com/CarlGallano" },
    { icon: "linkedin", href: "#" },
  ],
};

export const hero = {
  title: "FRONT END/UI\u00a0 UX DESIGNER",
  lead:
    "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
};

export const skillCards = [
  { color: "orange", label: "DYNAMIC ANIMATION, MOTION DESIGN", href: "#" },
  { color: "green", label: "FRAMER, FIGMA, WORDPRESS, REACTJS", href: "#" },
];

// gradient placeholder for project cards that don't have a real pic yet
const placeholder = (from, to) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="600" height="400" fill="url(#g)"/></svg>`
  );

// ===== MY DEVELOPMENT PROJECTS =====
// Row list under the hero: thumbnail, title, subtitle, arrow.
// Swap the gradient placeholders for real thumbnails when you have them.
export const developmentProjects = [
  { title: "SemMigo", subtitle: "Student productivity dashboard", image: semPic, url: "https://carlgallano.github.io/SemMigo/" },
  { title: "NajmAI", subtitle: "SaaS Framer Template", image: placeholder("#8b5cf6", "#1b1530"), url: "#" },
  { title: "Damas", subtitle: "Free Framer Template", image: placeholder("#3ec9a7", "#10231f"), url: "#" },
  { title: "Majd", subtitle: "Free Portfolio Template", image: placeholder("#ef4444", "#2b0d0d"), url: "#" },
  { title: "Faseelh", subtitle: "Free Framer Template", image: placeholder("#e3e6de", "#66796d"), url: "#" },
];

// ===== MY DESIGN PROJECTS =====
// Add real design projects here; an empty list hides the section's carousel.
// image: real pic file, accent: card spotlight color, url: optional link
export const designProjects = [
  { title: "UI/UX Project", subtitle: "Design study — replace with your project", image: placeholder("#f46c38", "#7a2e12"), url: "#" },
];

// ===== GALLERY (coverflow carousel under the projects) =====
// Swap these placeholder gradients for real pics.
export const galleryShots = [
  { src: placeholder("#f46c38", "#7a2e12"), alt: "Gallery shot 1" },
  { src: placeholder("#c5ff41", "#2e4a0a"), alt: "Gallery shot 2" },
  { src: placeholder("#3fb8ff", "#12345a"), alt: "Gallery shot 3" },
  { src: placeholder("#b16cff", "#2a1055"), alt: "Gallery shot 4" },
  { src: placeholder("#ff4d6d", "#5a0f24"), alt: "Gallery shot 5" },
  { src: placeholder("#ffd23f", "#5a3a05"), alt: "Gallery shot 6" },
];

// ===== DESIGN SHOTS (coverflow carousel under DESIGN PROJECTS) =====
// Swap these placeholder gradients for real pics.
export const designShots = [
  { src: placeholder("#f46c38", "#7a2e12"), alt: "Design shot 1" },
  { src: placeholder("#c5ff41", "#2e4a0a"), alt: "Design shot 2" },
  { src: placeholder("#3fb8ff", "#12345a"), alt: "Design shot 3" },
  { src: placeholder("#b16cff", "#2a1055"), alt: "Design shot 4" },
  { src: placeholder("#ff4d6d", "#5a0f24"), alt: "Design shot 5" },
  { src: placeholder("#ffd23f", "#5a3a05"), alt: "Design shot 6" },
];

// Replace these placeholders with your real certifications.
export const certifications = [
  { name: "AWS AI Fundamentals", issuer: "Amazon Web Services", year: "2026", url: awsCert, bg: awsCertPreview },
  { name: "AWS Cloud Essentials", issuer: "Amazon Web Services", year: "2026", url: awsCloudCert, bg: awsCloudPreview },
  { name: "Networking Basics", issuer: "Cisco Networking Academy", year: "2026", url: networkCert, bg: networkPreview },
  { name: "Certification name", issuer: "Issuing organization", year: "2023", url: "#" },
  { name: "Certification name", issuer: "Issuing organization", year: "2022", url: "#" },
  { name: "Certification name", issuer: "Issuing organization", year: "2021", url: "#" },
];

// ===== MY LEARNING JOURNEY =====
// Each row: title (bold), place (small gray), status (right side)
export const experience = [
  { title: "BS Information Technology - 3rd Year (Current)", place: "Western Institute of Technology", status: "2026" },
  { title: "Senior High School Graduate", place: "RG Hechanova Memorial National High School", status: "Completed" },
  { title: "Junior High School Graduate", place: "RG Hechanova Memorial National High School", status: "Completed" },
  { title: "Elementary Graduate", place: "Liningawan Central Elementary School", status: "Completed" },
];

export const tools = [
  { name: "Framer", subtitle: "Website Builder", logo: framerLogo },
  { name: "Figma", subtitle: "Design Tool", logo: figmaLogo },
  { name: "OpenCode", subtitle: "AI Coding Agent", logo: openCodeLogo },
  { name: "ChatGPT", subtitle: "AI Assistant", logo: openaiLogo },
  { name: "Notion", subtitle: "Productivity Tool", logo: notionLogo },
  { name: "Next.js", subtitle: "React framework", logo: nextjsLogo },
  { name: "GitHub", subtitle: "Code Hosting", logo: githubLogo },
  { name: "Vercel", subtitle: "Deployment Platform", logo: vercelLogo },
  { name: "ReactBits", subtitle: "Animation Components", logo: reactBitsLogo },
  { name: "Magic UI", subtitle: "UI Components", logo: magicUiLogo },
];
