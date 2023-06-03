import { useEffect, useState } from "react"
import { useWindowWidth } from "./useWindowWidth"

export const useMediaQuery = ( maxWidth: number ) => {
    const {windowWidth: {windowWidth}, handleResize} = useWindowWidth()
    const [isMedia, setIsMedia] = useState(false);

    // console.log('watchHook', maxWidth, windowWidth, isMedia)
    useEffect(()=> {
        if(windowWidth <= maxWidth) {
            setIsMedia(true)
        } else {
            setIsMedia(false)
        }
    },[ handleResize ,maxWidth, windowWidth])

    return isMedia;
}
