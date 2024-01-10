import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Modern Page",
        img: "/modern.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ut harum assumenda dicta natus sequi iure nihil voluptas!"
    },
    {
        id: 2,
        title: "Old Portfolio",
        img: "/old.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ut harum assumenda dicta natus sequi iure nihil voluptas!"
    },
    {
        id: 3,
        title: "Next JS Event App",
        img: "/event.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ut harum assumenda dicta natus sequi iure nihil voluptas!"
    },
    {
        id: 4,
        title: "Booking App with MERN",
        img: "/book.png",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ut harum assumenda dicta natus sequi iure nihil voluptas!"
    },
];

const Single = ({ item }) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref})

    const y = useTransform(scrollYProgress, [0, 1], [-250, 250])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref, offset: ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

  return (
    <div className="portfolio" ref={ref}>

        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX}}></motion.div>
        </div>

        {items.map(item =>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio