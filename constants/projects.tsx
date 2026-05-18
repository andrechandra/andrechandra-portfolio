// Anugerah Teknik Mandiri
import cvAtmThumbnail from '@/public/projects/cv-atm/cv-atm-thumbnail.png'
import cvAtm from '@/public/projects/cv-atm/cv-atm.png'
import cvAtm2 from '@/public/projects/cv-atm/cv-atm-2.png'

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
