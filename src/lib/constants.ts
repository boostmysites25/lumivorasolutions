import { CompanyDetails, Service, Testimonial, PortfolioItem } from '@/types'

export const companyDetails: CompanyDetails = {
  phone: "+0000000000",
  whatsapp: "+91 9154689723",
  address: "H.no : 2-11-71,Hanmantha rao Nagar,Vidyaranyapuri,Hanamkonda,Warangal, Pincode:506009",
  email: "abc@xyz.com",
  linkedin: "",
  instagram: "",
  twitter: "",
}

// Web development services
export const webDevelopmentServices: Service[] = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: "/images/icons/online-shopping.png",
    description: "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: "/images/icons/socialmedia.png",
    description: "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: "/images/icons/landing-page.png",
    description: "Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand's message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: "/images/icons/software-development.png",
    description: "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
]

// App development services
export const appDevelopmentServices: Service[] = [
  {
    id: 1,
    title: "iOS App Development",
    icon: "/images/icons/ios-development.png",
    description: "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: "/images/icons/android-development.png",
    description: "We design and develop tailor-made Android apps that align with your vision and business goals. Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: "/images/icons/flutter-development.png",
    description: "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: "/images/icons/hybrid-app-development.png",
    description: "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
]

// All services
export const allServices: Service[] = [
  {
    id: 1,
    title: "AI Development",
    description: "Unlock Next-Gen Customer Experience with Expertly Crafted Conversational AI",
    icon: "/images/icons/ai.png",
    detailContent: "At the heart of AI development is the creation of algorithms and models that enable machines to learn from data and improve their performance over time. Machine learning, a subset of AI, involves training algorithms on large datasets to recognize patterns, make predictions, and automate tasks. Deep learning, a more advanced form of machine learning, utilizes artificial neural networks to process complex data and learn from it.\n\nAI development has a wide range of applications across various domains. In healthcare, AI is being used to diagnose diseases, develop new treatments, and personalize patient care. In finance, AI-powered systems are used for fraud detection, risk assessment, and algorithmic trading. In manufacturing, AI is driving automation, improving efficiency, and enhancing product quality.",
  },
  {
    id: 2,
    title: "Chatbot Development",
    description: "Chatbots to Re-define Customer Interaction, Drive Revenue, and Future-Proof Your Business.",
    icon: "/images/icons/chatbot.png",
    detailContent: "Chatbots are powered by natural language processing (NLP), a field of artificial intelligence that enables machines to understand and interpret human language. NLP techniques allow chatbots to process and analyze text, extract meaning, and generate appropriate responses. This capability has led to the development of chatbots that can engage in meaningful conversations, answer questions, and even provide personalized recommendations.\n\nOne of the primary benefits of chatbots is their ability to improve customer service. By automating routine tasks and providing immediate responses to customer inquiries, chatbots can reduce wait times, enhance customer satisfaction, and free up human agents to handle more complex issues. Additionally, chatbots can be used to collect customer feedback and insights, helping businesses to identify areas for improvement and tailor their offerings to meet customer needs.",
  },
  {
    id: 3,
    title: "Data Analytics & Business Intelligence",
    description: "Our cutting-edge analytics and Business Intelligence capabilities distil complex data in to clear, actionable insights.",
    icon: "/images/icons/dataanalytics.png",
    detailContent: "Data analytics involves the process of examining data to uncover patterns, trends, and insights. It encompasses a wide range of techniques, including statistical analysis, machine learning, and data mining. By applying these methods to large datasets, organizations can extract valuable information that can be used to inform decision-making.\n\nBusiness intelligence, on the other hand, focuses on providing actionable insights to support strategic decision-making. BI tools and platforms enable organizations to collect, store, and analyze data from various sources, transforming raw data into meaningful information that can be easily understood and visualized.",
  },
]

// Portfolio images (web development)
export const webPortfolio: PortfolioItem[] = [
  {
    id: 1,
    img: "/portfolio/web/1.webp",
    title: "FE-Finance",
  },
  {
    id: 2,
    img: "/portfolio/web/2.webp",
    title: "Ocxee",
  },
  {
    id: 3,
    img: "/portfolio/web/3.webp",
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: "/portfolio/web/4.webp",
    title: "Gigzio",
  },
  {
    id: 5,
    img: "/portfolio/web/5.webp",
    title: "FE Group",
  },
  {
    id: 6,
    img: "/portfolio/web/6.webp",
    title: "V Talkz",
  },
]

// Portfolio images (app development)
export const appPortfolio: PortfolioItem[] = [
  {
    id: 1,
    img: "/portfolio/app/1.webp",
    title: "PartEx",
  },
  {
    id: 2,
    img: "/portfolio/app/2.webp",
    title: "Find A Driver",
  },
  {
    id: 3,
    img: "/portfolio/app/3.webp",
    title: "Artisan Express",
  },
  {
    id: 4,
    img: "/portfolio/app/4.webp",
    title: "House of Deliverance",
  },
]

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO of Innovative Tech Corp",
    img: "/images/testimonial1.png",
    desc: "Partnering with Lumivora Solutions has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values",
  },
  {
    id: 2,
    name: "Sarah Jardin",
    position: "Director of Operations at Green Future Ltd",
    img: "/images/testimonial2.png",
    desc: "The exceptional team at Lumivora Solutions took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.",
  },
  {
    id: 3,
    name: "Velicia Jamez",
    position: "CTO of Health Innovations Group",
    img: "/images/testimonial3.png",
    desc: "Lumivora Solutions stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.",
  },
]
