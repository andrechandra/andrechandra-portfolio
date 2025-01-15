// Tailwind Starter
import tailwindStarter from '@/public/projects/next-starter/tailwind-starter.png'

// Math Fantasy
import mathFantasyThumbnail from '@/public/projects/math-fantasy/thumbnail.png'
import mathFantasyCaveLevel from '@/public/projects/math-fantasy/math-fantasy-cavelevel.png'
import mathFantasySwampLevel from '@/public/projects/math-fantasy/math-fantasy-swamplevel.png'
import mathFantasyTaigaLevel from '@/public/projects/math-fantasy/math-fantasy-taigalevel.png'
import mathFantasyGameOver from '@/public/projects/math-fantasy/math-fantasy-gameover.png'
import mathFantasyMainMenu from '@/public/projects/math-fantasy/math-fantasy-mainmenu.png'
import mathFantasyQuestion from '@/public/projects/math-fantasy/math-fantasy-question.png'
import mathFantasyQuestion2 from '@/public/projects/math-fantasy/math-fantasy-question2.png'
import mathFantasyQuestion3 from '@/public/projects/math-fantasy/math-fantasy-question3.png'
import mathFantasyLevelSelect from '@/public/projects/math-fantasy/math-fantasy-levelselect.png'
import mathFantasyHowtoPlay from '@/public/projects/math-fantasy/math-fantasy-howtoplay.png'

// Anugerah Teknik Mandiri
import cvAtmThumbnail from '@/public/projects/cv-atm/cv-atm-thumbnail.png'
import cvAtm from '@/public/projects/cv-atm/cv-atm.png'
import cvAtm2 from '@/public/projects/cv-atm/cv-atm-2.png'

// Orange Burger
import orangeBurgerThumbnail from '@/public/projects/orange-burger/orange-burger-thumbnail.png'
import orangeBurger from '@/public/projects/orange-burger/orange-burger.png'
import orangeBurger2 from '@/public/projects/orange-burger/orange-burger2.png'

// Sei-You
import seiYouThumbnail from '@/public/projects/sei-you/sei-you-thumbnail.png'

import { Project } from '@/types/project'
import { motion } from 'framer-motion'

export const projects: Project[] = [
  {
    href: 'https://next-shadcn-starter-template.vercel.app/',
    repo: 'https://github.com/andrechandra/next-tailwind-starter',
    title: 'Next + Tailwind + Shadcn Starter Template',
    category: 'short-projects',
    description:
      'A starter template for building modern web applications with Next.js, Tailwind CSS, and shadcn/ui components. Pre-configured with TypeScript and ESLint.',
    thumbnail: tailwindStarter,
    images: [tailwindStarter],
    stack: ['Nextjs', 'Tailwindcss', 'Shadcn'],
    slug: 'starter',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-roboto text-gray-400">
          Creating a starter template for Next.js is a valuable endeavor as it
          streamlines the development process by providing a solid foundation
          for building modern web applications. This template is pre-configured
          with powerful tools like Tailwind CSS for styling, shadcn/ui
          components for accessible and customizable UI elements, and TypeScript
          for type safety, ensuring a scalable and maintainable codebase.
        </p>
        <p className="font-roboto text-gray-400">
          By using this template, developers can save significant time setting
          up repetitive configurations and jump straight into building features.
          It&apos;s particularly useful for quickly prototyping ideas or
          starting new projects with best practices already in place. My
          personal website is also built using this starter template, showcasing
          its flexibility and efficiency in real-world applications.
        </p>
      </motion.div>
    ),
  },
  {
    href: '',
    repo: 'https://github.com/AndreChops/MathFantasy',
    title: 'Math Fantasy',
    category: 'university',
    description:
      'Math Fantasy, is a statistics mathematic learning game with a 2D Top Down Syle.',
    thumbnail: mathFantasyThumbnail,
    images: [
      mathFantasyMainMenu,
      mathFantasyHowtoPlay,
      mathFantasyLevelSelect,
      mathFantasyTaigaLevel,
      mathFantasySwampLevel,
      mathFantasyCaveLevel,
      mathFantasyQuestion,
      mathFantasyQuestion2,
      mathFantasyQuestion3,
      mathFantasyGameOver,
    ],
    stack: ['Unity'],
    slug: 'mathfantasy',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-roboto text-gray-400">
          Math Fantasy is my final project at Universitas Multimedia Nusantara,
          where I developed a top-down 2D RPG-style game designed to make
          learning statistics more engaging. The game utilizes the Fisher-Yates
          algorithm to randomly shuffle questions, ensuring that players cannot
          memorize answers and are challenged with new question sets each time
          they play. In the game, players must defeat enemies before reaching a
          sign that contains a series of questions related to statistics. The
          core aim of the game is to enhance learning motivation by
          incorporating educational elements into an interactive, fun gameplay
          experience.
        </p>
        <p className="font-roboto text-gray-400">
          The game was created using Unity Engine version 2021.3.16f1, and I
          used 2D assets obtained from itch.io to bring the game to life. The
          game&apos;s mechanics are focused on rewarding problem-solving and
          learning, offering a dynamic experience where players actively
          participate in their education while also enjoying an adventure. By
          blending education with gaming, Math Fantasy seeks to encourage
          students to stay motivated and improve their knowledge in a fun and
          immersive way.
        </p>
      </motion.div>
    ),
  },
  {
    href: '',
    repo: 'https://github.com/AndreChops/OrangeBurger',
    title: 'Orange Burger',
    category: 'university',
    description:
      'A restaurant website, where users can make food orders. Also includes admin dashboard, where admin can manage transactions.',
    thumbnail: orangeBurgerThumbnail,
    images: [orangeBurger, orangeBurger2],
    stack: ['PHP', 'Javascript', 'CSS'],
    slug: 'orangeburger',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-roboto text-gray-400">
          Orange Burger is a web application developed as a midterm project for
          the Web Programming course during the 4th semester of my university
          studies. The website was designed to simulate a functional restaurant
          platform where users can browse through a menu, customize their
          orders, and place food orders directly through the site.
        </p>
        <p className="font-roboto text-gray-400">
          The project also includes an admin dashboard, allowing restaurant
          administrators to efficiently manage orders and transactions. Through
          the dashboard, admins can track incoming orders, update order
          statuses, and maintain a record of past transactions, ensuring a
          seamless order management experience.
        </p>
        <p className="font-roboto text-gray-400">
          This project not only helped me strengthen my skills in front-end and
          back-end web development but also gave me practical experience in
          building full-stack applications with user authentication, order
          processing, and data management features. The Orange Burger website
          reflects my ability to design and implement user-friendly interfaces
          and robust back-end systems to create a complete and functional web
          solution.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://cv-atm.com/',
    repo: '',
    title: 'Anugerah Teknik Mandiri',
    category: 'freelance',
    description:
      'Company website for Anugerah Teknik Mandiri, made for commercial purposes.',
    thumbnail: cvAtmThumbnail,
    images: [cvAtm, cvAtm2],
    stack: ['HTML', 'CSS', 'Javascript'],
    slug: 'cvatm',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-roboto text-gray-400">
          In 2020, during the COVID-19 pandemic, a friend offered me a freelance
          opportunity to create a website for his parent&apos;s company. Despite
          having no prior experience with web development at the time, I decided
          to take on the challenge. Through determination and self-learning, I
          successfully built and deployed a fully functional website within the
          given timeframe using only HTML, CSS, and JavaScript. This experience
          was particularly rewarding as I managed to achieve this without using
          any frameworks, relying solely on fundamental web development
          principles.
        </p>
      </motion.div>
    ),
  },
]
