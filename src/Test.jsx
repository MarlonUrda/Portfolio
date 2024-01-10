import { motion } from "framer-motion"

const Test = () => {
  return (
    <div className="course">
        <motion.div className="box" animate={{opacity:0}} transition={{duration:2}} />
    </div>
  )
}

export default Test