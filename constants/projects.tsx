// Math Fantasy
import mathFantasyThumbnail from '@/public/projects/math-fantasy/math-fantasy-thumbnail.png'
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
import sei1 from '@/public/projects/sei-you/sei-you.jpg'
import sei2 from '@/public/projects/sei-you/sei-you2.jpg'
import sei3 from '@/public/projects/sei-you/sei-you3.jpg'

// BCS-Serpong
import bcsThumbnail from '@/public/projects/bcs-serpong/bcs-thumbnail.png'
import bcs1 from '@/public/projects/bcs-serpong/bcs-1.png'
import bcs2 from '@/public/projects/bcs-serpong/bcs-2.png'
import bcs3 from '@/public/projects/bcs-serpong/bcs-3.png'
import bcs4 from '@/public/projects/bcs-serpong/bcs-4.png'
import bcs5 from '@/public/projects/bcs-serpong/bcs-5.png'
import bcs6 from '@/public/projects/bcs-serpong/bcs-6.png'
import bcs7 from '@/public/projects/bcs-serpong/bcs-7.png'
import bcs8 from '@/public/projects/bcs-serpong/bcs-8.png'

// Expense-Tracker
import expensetrackerThumbnail from '@/public/projects/expense-tracker/expense-tracker-thumbnail.png'
import expensetracker1 from '@/public/projects/expense-tracker/expense-tracker-1.png'
import expensetracker2 from '@/public/projects/expense-tracker/expense-tracker-2.png'
import expensetracker3 from '@/public/projects/expense-tracker/expense-tracker-3.png'
import expensetracker4 from '@/public/projects/expense-tracker/expense-tracker-4.png'
import expensetracker5 from '@/public/projects/expense-tracker/expense-tracker-5.png'
import expensetracker6 from '@/public/projects/expense-tracker/expense-tracker-6.png'
import expensetracker7 from '@/public/projects/expense-tracker/expense-tracker-7.png'
import expensetracker8 from '@/public/projects/expense-tracker/expense-tracker-8.png'

// Atlantis Realty
import atlantisRealtyThumbnail from '@/public/projects/atlantis-realty/atlantis-realty-thumbnail.png'
import atlantisRealty1 from '@/public/projects/atlantis-realty/atlantis-realty-1.png'
import atlantisRealty2 from '@/public/projects/atlantis-realty/atlantis-realty-2.png'
import atlantisRealty3 from '@/public/projects/atlantis-realty/atlantis-realty-3.png'
import atlantisRealty4 from '@/public/projects/atlantis-realty/atlantis-realty-4.png'
import atlantisRealty5 from '@/public/projects/atlantis-realty/atlantis-realty-5.png'
import atlantisRealty6 from '@/public/projects/atlantis-realty/atlantis-realty-6.png'

// BrokerID
import brokerIdThumbnail from '@/public/projects/brokerid/brokerid-thumbnail.png'
import brokerId1 from '@/public/projects/brokerid/brokerid-1.png'
import brokerId2 from '@/public/projects/brokerid/brokerid-2.png'
import brokerId3 from '@/public/projects/brokerid/brokerid-3.png'
import brokerId4 from '@/public/projects/brokerid/brokerid-4.png'
import brokerId5 from '@/public/projects/brokerid/brokerid-5.png'
import brokerId6 from '@/public/projects/brokerid/brokerid-6.png'
import brokerId7 from '@/public/projects/brokerid/brokerid-7.png'
import brokerId8 from '@/public/projects/brokerid/brokerid-8.png'
import brokerId9 from '@/public/projects/brokerid/brokerid-9.png'
import brokerId10 from '@/public/projects/brokerid/brokerid-10.png'
import brokerId11 from '@/public/projects/brokerid/brokerid-11.png'
import brokerId12 from '@/public/projects/brokerid/brokerid-12.png'

import { Project } from '@/types/project'
import { motion } from 'framer-motion'

export const projects: Project[] = [
  {
    href: 'https://brokerid.app',
    repo: '',
    title: 'BrokerID',
    category: 'freelance',
    description: `BrokerID is an application designed to serve as a bridge and the primary platform for property agents in Indonesia, helping them fulfill all their needs in the real estate brokerage industry.`,
    thumbnail: brokerIdThumbnail,
    // Web screenshots (1-5)
    webImages: [
      brokerId1,
      brokerId2,
      brokerId3,
      brokerId4,
      brokerId5,
    ],
    // Mobile screenshots (6-12)
    mobileImages: [
      brokerId6,
      brokerId7,
      brokerId8,
      brokerId9,
      brokerId10,
      brokerId11,
      brokerId12,
    ],
    stack: ['React Native', 'Supabase', 'Expo Go', 'Nextjs'],
    slug: 'brokerid',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.andrechandra.brokerid&hl=id',
    appStoreUrl: 'https://apps.apple.com/id/app/brokerid/id6754389922',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          BrokerID is here to provide a solution to the vast number of property agent networks in Indonesia, where having too many networks makes inter-agent connections excessive and inefficient. For this reason, BrokerID has a vision to become the primary bridge for agents through thoughtfully designed features.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The problem arising from the abundance of networks is the difficulty in finding supply and demand, as information is unevenly distributed. Therefore, BrokerID, as the main bridge, aims to become the single platform that facilitates all property agent networks. However, it is not only a platform, BrokerID also offers filtering features that allow property agents to search for properties based on specific needs.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The BrokerID application is built using React Native with Expo Go to deliver a fast, flexible, and cross-platform mobile experience, with Supabase powering authentication, database management, and real-time data handling. In addition, the BrokerID website is developed using Next.js to ensure optimal performance and best-in-class SEO for maximum visibility and reach.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://atlantisrealty.id',
    repo: '',
    title: 'Atlantis Realty',
    category: 'freelance',
    description: `A responsive website for Atlantis Realty, designed to showcase the agency's office location, property portfolio, and agents, with agent data managed through a spreadsheet-based CMS.`,
    thumbnail: atlantisRealtyThumbnail,
    images: [
      atlantisRealty1,
      atlantisRealty2,
      atlantisRealty3,
      atlantisRealty4,
      atlantisRealty5,
      atlantisRealty6,
    ],
    stack: ['Nextjs', 'Tailwindcss', 'Shadcn'],
    slug: 'atlantis-realty',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          I built this website for a friend&apos;s property agency, Atlantis
          Realty, to help establish their digital presence and make it easier
          for clients to discover their services. The site includes several main
          pages—Home, Portfolio, Our Agents, Cari Titip, and Tools—each serving
          specific needs for property browsing and agent engagement.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          One of the core features is the "Our Agents" page, which dynamically
          renders agent profiles using data sourced from a spreadsheet, acting
          as a lightweight CMS. This allows the agency to easily update agent
          information without needing to access the codebase. Built with
          Next.js, Tailwind CSS, and Shadcn UI components, the site is designed
          for speed, clarity, and responsiveness across devices.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://ach-expense-tracker.vercel.app',
    repo: 'https://github.com/andrechandra/expense-tracker',
    title: 'Expense Tracker',
    category: 'short-projects',
    description: `A full-stack expense tracking application that helps users manage and visualize their financial transactions.`,
    thumbnail: expensetrackerThumbnail,
    images: [
      expensetracker1,
      expensetracker2,
      expensetracker3,
      expensetracker4,
      expensetracker5,
      expensetracker6,
      expensetracker7,
      expensetracker8,
    ],
    stack: ['Nextjs', 'Tailwindcss', 'Shadcn', 'Clerk', 'Prisma', 'Postgres'],
    slug: 'expense-tracker',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          This expense tracker represents one of my first ventures into
          full-stack web development, combining modern technologies like
          Next.js, Tailwind CSS, and shadcn/ui for the frontend, with Prisma and
          PostgreSQL handling the backend database operations. The application
          features a clean, intuitive interface that allows users to easily
          track their financial transactions and manage their personal finances.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Users can securely log in using Clerk authentication, add and
          categorize their income and expenses, and visualize their financial
          data through interactive charts and summaries. The application
          provides detailed transaction history, category-wise breakdowns, and
          financial trends over time. This project helped me gain hands-on
          experience with full-stack development, database management, and
          implementing secure user authentication in a real-world application.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://bcs-serpong.org',
    repo: '',
    title: 'GKKK BCS Serpong',
    category: 'freelance',
    description: `A dedicated website for GKKK BCS Serpong, showcasing our church's mission, values, and community activities.`,
    thumbnail: bcsThumbnail,
    images: [bcs1, bcs2, bcs3, bcs4, bcs5, bcs6, bcs7, bcs8],
    stack: ['Nextjs', 'Tailwindcss', 'Shadcn'],
    slug: 'bcs-serpong',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          I created a website for my church, GKKK BCS Serpong, to provide a
          comprehensive online platform that represents our community, mission,
          and values. The website serves as a central hub for sharing our
          church&apos;s vision of spreading God&apos;s love and building a
          strong community grounded in faith. It also provides visitors with
          information about our church activities, worship schedules, and
          opportunities to get involved.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          My motivation for building this website was to make it easier for
          people to connect with our church, learn about who we are, and
          understand how they can support our ministry. It&apos;s a tool to
          share updates, encourage participation, and reflect the welcoming
          spirit of GKKK BCS Serpong, extending our reach to those who might be
          seeking a place to grow in their faith.
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
      'Math Fantasy, is a statistics mathematic learning game with a 2D Top Down Syle, designed to help students learn through playing a game.',
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
        <p className="font-geist_mono tracking-tighter text-gray-400">
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
        <p className="font-geist_mono tracking-tighter text-gray-400">
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
    href: 'https://sei-you.vercel.app/',
    repo: 'https://github.com/IArnFredo/WeHearYouAll-SeiYou',
    title: 'Sei-You',
    category: 'university',
    description:
      'SeiYou is a voice-over application and it is hoped that everyone will get passion and work from this application for those who need it.',
    thumbnail: seiYouThumbnail,
    mobileImages: [sei1, sei2, sei3],
    stack: ['Ionic', 'Capacitor', 'React'],
    slug: 'sei-you',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          SeiYou is a voice-over application designed to enable users to express
          themselves through voice recordings. Users can easily record their
          voices and share them with the community, allowing others to discover
          and listen to unique voice content.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          This project was developed using Ionic and Capacitor for
          cross-platform compatibility, combined with React and TypeScript for a
          robust and scalable architecture. The goal was to create a seamless
          user experience with intuitive navigation and smooth audio playback
          functionality.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Through this project, I gained valuable experience in mobile app
          development, integrating audio recording features, and managing
          user-generated content. SeiYou represents my ability to build engaging
          applications that encourage creativity and interaction among users.
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
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Orange Burger is a web application developed as a midterm project for
          the Web Programming course during the 4th semester of my university
          studies. The website was designed to simulate a functional restaurant
          platform where users can browse through a menu, customize their
          orders, and place food orders directly through the site.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The project also includes an admin dashboard, allowing restaurant
          administrators to efficiently manage orders and transactions. Through
          the dashboard, admins can track incoming orders, update order
          statuses, and maintain a record of past transactions, ensuring a
          seamless order management experience.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
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
      'Company website for Anugerah Teknik Mandiri to displays their services and products. Made for commercial purposes.',
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
        <p className="font-geist_mono tracking-tighter text-gray-400">
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
