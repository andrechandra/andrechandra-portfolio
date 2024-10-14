interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Old Portfolio Website',
    description: `My old portfolio website that I built using React, Tailwind, and Threejs.`,
    imgSrc: '/static/images/projects/Portfolio.png',
    href: 'https://andrechips-old.vercel.app',
  },
  {
    title: 'Math Fantasy',
    description: `Math Fantasy, is a statistics mathematic learning game with a 2D Top Down Syle.`,
    imgSrc: '/static/images/projects/MathFantasy.png',
    href: 'https://github.com/AndreChops/MathFantasy',
  },
  {
    title: 'Sei You',
    description: `Application for people that like voice acting. People can upload their voice acting and search other people's voice acting.`,
    imgSrc: '/static/images/projects/SeiYou.png',
    href: 'https://sei-you.vercel.app/',
  },
  {
    title: 'Travelokie',
    description: `Hotel booking system built with Laravel, which focuses on registration functionality of a hotel booking.`,
    imgSrc: '/static/images/projects/Travelokie.png',
    href: 'https://github.com/AndreChops/Travelokie',
  },
  {
    title: 'Anugerah Teknik Mandiri',
    description: `Company website for Anugerah Teknik Mandiri, made for commercial purposes.`,
    imgSrc: '/static/images/projects/ATM.png',
    href: 'https://cv-atm.com',
  },
  {
    title: 'Orange Burger',
    description: `A restaurant website, where users can make food orders. Also includes admin dashboard, where admin can manage transactions.`,
    imgSrc: '/static/images/projects/OrangeBurger.png',
    href: 'https://github.com/AndreChops/OrangeBurger',
  },
  {
    title: 'Genshin Tinder',
    description: `Dating-like application made using Ionic React.`,
    imgSrc: '/static/images/projects/GenshinTinder.png',
    href: 'https://github.com/AndreChops/GenshinTinder',
  },
  // {
  //   title: 'Travelokie',
  //   description: `Hotel booking system built with Laravel, which focuses on registration functionality of a hotel booking.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
