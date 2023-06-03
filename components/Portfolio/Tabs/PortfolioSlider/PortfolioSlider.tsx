import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
// import 'react-responsive-carousel/lib/styles'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { PortfolioSliderItem } from "./PortfolioSliderItem";


export function PortfolioSlider({tabItem} : any) {

    const isMobile800 = useMediaQuery(800);
    const isMobile485 = useMediaQuery(485);

    // console.log(tabItem.children)
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Carousel
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                centerMode={true}
                centerSlidePercentage={ isMobile485 ? 75 : isMobile800 ? 49 : 45}
            >

                {tabItem.children.map((item : any) => (
                     <PortfolioSliderItem key={item.id} props={item}/>
                ))} 
            </Carousel>
        </motion.div>
    )
}