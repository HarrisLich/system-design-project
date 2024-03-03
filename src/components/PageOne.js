import { easeInOut, motion, useAnimationControls, useInView } from 'framer-motion'
import React from 'react';
import img from "../imgs/image0-removebg-preview.png"
import { FaStar } from "react-icons/fa";





const buttonVariants = {
    initial: {
        opacity: 0,
        translateY: 0
    },
    animate: {
        transition: {
            duration: 1,
            delay: 1.2
        },
        opacity: 1
    },
    rest: {
        rotateX: 0,
        transition: {
            delay: 0.5,
            duration: 0.5
        }
    },
    hover: {
        rotateX: 90,
        transition: {
            delay: 0,
            duration: 0.5
        }
    }
}

const buttonVariants2 = {
    rest: {
        rotateX: -90,
        transition: {
            delay: 0,
            duration: 0.5
        }
    },
    hover: {
        rotateX: 0,
        transition: {
            delay: 0.5,
            duration: 0.5
        }
    }
}

let hasDrawnBlob = false;

function PageOne() {

    const controls = useAnimationControls()
    const controls2 = useAnimationControls()
    const blobControls = useAnimationControls()

    const [canAnimate, setCanAnimate] = React.useState(true);


    return (
        <div className="w-full flex items-center justify-center grid grid-cols-3" style={{ height: "calc(100vh)" }}>
            
            <motion.div animate={{rotate: 360, transition: {repeat: Infinity, repeatDelay: 0.5, duration: 5, ease: easeInOut}}} className="fixed right-10 z-10 top-40 text-yellow-300">
                <FaStar size={300}></FaStar>
                <a href="/" className="fixed transition-all hover:text-white duration-300 right-[115px] top-[150px] text-black font-bold z-20">CLICK ME</a>
            </motion.div>
            <div className="col-span-2 w-full h-full flex flex-col items-start laptop:pl-52 justify-center desktop:translate-x-[70px] desktop:translate-y-[-70px]">
                <motion.div className="flex flex-col" animate={{
                    translateY: 0, opacity: 1, transition: {
                        duration: 1
                    }
                }} initial={{
                    translateY: 30, opacity: 0
                }}>
                    <h1 className="text-zinc-300 text-2xl laptop:text-5xl desktop:text-7xl font-bold bg-red-600 text-green-500">The perfect place to</h1>
                    <h1 className="text-zinc-300 text-2xl laptop:text-5xl desktop:text-7xl font-bold laptop:mt-12 mt-1 bg-red-600 text-green-500">expand your</h1>
                    <h1 className="text-zinc-300 text-2xl laptop:text-5xl desktop:text-7xl font-bold laptop:mt-12 mt-1 bg-red-600 text-green-500">business</h1>
                </motion.div>
                <motion.div className="mt-8 flex flex-col font-[quicksand]" animate={{
                    translateY: 0, opacity: 1, transition: {
                        duration: 1, delay: 0.5
                    }
                }} initial={{
                    translateY: 30, opacity: 0
                }}>
                    <h1 className="text-zinc-400 laptop:text-base text-xs desktop:text-2xl mt-6">Hi! You can call me Harris. I enjoy </h1>
                    <h1 className="text-zinc-400 laptop:text-base text-xs desktop:text-2xl mt-12">developing modern webpages using</h1>
                    <h1 className="text-zinc-400 laptop:text-base text-xs desktop:text-2xl mt-12">the latest design techniques and patterns!</h1>
                </motion.div>

                <div className="mt-12 flex flex-row gap-6">
                    <motion.div className="relative" onHoverStart={() => {
                        if (canAnimate) {
                            controls.start(buttonVariants.hover)
                            controls2.start(buttonVariants2.hover)
                            setCanAnimate(false)
                        }
                    }} onHoverEnd={() => {
                        controls.start(buttonVariants.rest)
                        controls2.start(buttonVariants2.rest)
                        setCanAnimate(true)
                    }} animate={{
                        translateY: 0, opacity: 1, transition: {
                            duration: 1, delay: 1
                        }
                    }} initial={{
                        translateY: 30, opacity: 0
                    }}>
                        <motion.button onLoadStart={() => controls.start(buttonVariants.initial)} onLoad={() => controls.start(buttonVariants.animate)} animate={controls} className="text-blue-400 font-[quicksand] font-bold text-sm desktop:text-xl laptop:px-6 laptop:py-2 px-4 py-1 desktop:px-12 desktop:py-3">Projects</motion.button>
                        <motion.button onClick={() => {
                            document.getElementById("projects").scrollIntoView({ behavior: 'smooth' })
                        }} animate={controls2} className="absolute font-[quicksand] left-0 text-[#262626] font-[quicksand font-bold text-sm desktop:text-xl laptop:px-6 laptop:py-2 px-4 py-1 desktop:px-12 desktop:py-3 bg-blue-400" style={{ rotateX: 90 }}>Projects (CLICK HERE TO SEE MY PROJECTS)</motion.button>
                    </motion.div>
                    <motion.div animate={{
                        translateY: 0, opacity: 1, transition: {
                            duration: 1, delay: 1.5
                        }
                    }} initial={{
                        opacity: 0,
                        translateY: 30
                    }}>
                        <a href="https://drive.google.com/file/d/1VMeHH9wV1VTa2pJO_bCBNDIyVigWH4R5/view?usp=drive_link">
                            <button className="text-blue-400 font-[quicksand] text-sm truncate desktop:text-xl hover:bg-blue-400/10 transition-all duration-500 font-bold laptop:px-6 laptop:py-2 px-4 py-1 desktop:px-12 desktop:py-3 text-blue-400">View Resume (CLICK HERE TO VIEW MY RESUME :D)</button>
                        </a>

                    </motion.div>
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-start py-10 desktop:translate-x-[-150px] laptop:translate-x-[-100px]">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 1.8 } }} className="w-[200px] h-[50px] laptop:w-[400px] laptop:h-[100px] laptop:translate-y-[100px] desktop:translate-y-0 desktop:w-[400px] desktop:h-[150px]  justify-center items-end flex drop-shadow-lg overflow-visible bg-blue-400/50 rounded-lg">
                    <motion.img className="scale-[2.5]" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 2 } }} src={img}></motion.img>
                </motion.div>
            </div>

        </div>
    )
}

export default PageOne