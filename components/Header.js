import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../public/me.jpeg'
import { motion } from "framer-motion"

export default function Header({ name }) {


  return (
    <header className="pt-20 pb-25">
      <motion.div
        className="w-20 h-26 rounded-full mx-auto mb-8"
        animate={{
          scale: [1, 3, 3, 1, 2],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <Image className="rounded-full" src={profilePic} />
      </motion.div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
