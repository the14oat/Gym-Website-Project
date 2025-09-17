import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, 
         UserGroupIcon, 
         AcademicCapIcon } from "@heroicons/react/24/solid"
import { MotionConfig, motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "STATE OF THE ART FASCILITIES WAHOOO"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Hundreds of Diverse Classes",
        description: "omg so many classes"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "they so buff"
    },
];
const container = {
    hidden: {},
    visible: {
        transition : { staggerChildren: 0.2}
    },

}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return <section id="benefits"
          className="mx-autio min-h-full w-5/6 py-20">
            <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>

            {/* HEADER */}
                <motion.div className="md:my-5 md:w-3/5"
                initial="hidden" whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
                >
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness eqiuipment, trainers and classes to
                        get you in your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>


            {/* BENEFITS */}
            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
                initial = "hidden"
                whileInView = "visible"
                viewport = {{once: true, amount: 0.5}}
                variants = {container}>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                    key= {benefit.title}
                    icon={benefit.icon}
                    title= {benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                    ))}
            </motion.div>

                {/*GRAPHICS AND DESCRIPTION*/}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/*GRAPHIC*/}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />
                    {/*DESCRIPTION*/}
                    <div>
                        {/*TITLE*/}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"></div>
                            <motion.div
                            initial="hidden" whileInView="visible"
                            viewport={{once:true, amount:0.5}}
                            transition={{duration:0.5}}
                            variants={{
                                hidden:{opacity:0, x:-50},
                                visible:{opacity:1, x:0}
                            }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {"  "}
                                    <span className="text-primary-500"> FIT </span>
                                </HText>
                            </motion.div>
                        </div>

                        {/*DESCRIPT*/}
                        <motion.div
                        initial="hidden" whileInView="visible"
                        viewport={{once:true, amount:0.5}}
                        transition={{delay:0.2, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:50},
                            visible:{opacity:1, x:0}
                        }}>
                           <p className="my-5">
                           Unlock your full potential with a gym membership that gives you more 
                           than just access to equipment. From state-of-the-art machines to a wide 
                           range of group classes, you’ll find everything you need to stay motivated, 
                           challenge yourself, and reach your fitness goals faster. Whether you’re aiming 
                           to build strength, improve endurance, or simply stay active, the gym offers the 
                           perfect environment to keep you on track.</p>
                           <p className="mb-5">
                           Beyond fitness, a gym membership connects you to a supportive community of
                            trainers and members who are there to inspire and encourage you. With 
                            professional guidance, flexible schedules, and amenities designed for your 
                            comfort, every visit becomes an investment in your health and well-being. 
                            Join today and experience how the gym transforms not just your body, but your 
                            lifestyle.</p> 
                        </motion.div>

                        {/*BUTTON*/}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now!

                                </ActionButton>

                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
  </section>
};

export default Benefits;