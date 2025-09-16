import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, 
         UserGroupIcon, 
         AcademicCapIcon } from "@heroicons/react/24/solid"
import { MotionConfig, motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";

const benefits: Array<{BenefitType}> = [
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
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return <section id="benefits"
          className="mx-autio min-h-full w-5/6 py-20">
            <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>

            {/* HEADER */}
                <div className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness eqiuipment, trainers and classes to
                        get you in your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </div>


            {/* BENEFITS */}
            <div className="md:flex items-center justify-between gap-8 mt-5">
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                    key= {benefit.title}
                    icon={benefit.icon}
                    title= {benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                    ))}
            </div>
            </motion.div>
  </section>
};

export default Benefits;