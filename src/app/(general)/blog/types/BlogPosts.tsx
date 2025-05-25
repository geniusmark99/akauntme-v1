import { BlogPost } from "./Blog";


const BlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How I Got My Dream Job: From Customer Support Rep To Software Engineer',
    slug: 'from-customer-support-to-software-engineer',
    author: 'Temitope Akintola',
    date: '2024-06-10',
    category: 'People',
    image: '/images/lady.webp', // place this image in your /public/images folder
    content: `
      <p>This is a story of transformation and persistence. I started in customer support but always had an interest in tech...</p>
      <p>I eventually learned frontend development, built projects, and applied for jobs until I got my first role.</p>
    `,
  },
  {
    id: 2,
    title: 'From One Country To Another: My Tech Journey Across Borders',
    slug: 'tech-journey-across-borders',
    author: 'Amarachi Okafor',
    date: '2024-06-15',
    category: 'People',
    image: '/images/victoria-ambah.jpeg',
    content: `
      <p>Relocating while staying consistent in my tech journey was a huge challenge. Here's how I navigated learning and adapting across two countries...</p>
    `,
  },
  {
    id: 3,
    title: 'Dear Techies: 10 Job Sites You Should Be Using in 2025, best Bookkeepping app',
    slug: 'top-10-tech-job-sites-2024',
    author: 'Smart Innovative Tech',
    date: '2024-06-20',
    category: 'Career',
    image: '/images/Fastest-checkout-copy.webp',
    content: `
      <ul>
        <li>1. LinkedIn</li>
        <li>2. Indeed</li>
        <li>3. HNG Careers</li>
        <li>...and more.</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: 'Code From Anywhere: Why Remote Work is the Future of Tech',
    slug: 'remote-work-future-of-tech',
    author: 'David Ibikunle',
    date: '2024-07-01',
    category: 'Workplace',
    image: '/images/man-seating.webp',
    content: `
      <p>The flexibility of remote work is reshaping how teams collaborate. Developers are no longer tied to one location...</p>
    `,
  },
];

export default BlogPosts;