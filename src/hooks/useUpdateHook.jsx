import { useEffect, useState } from "react"

const useUpdateHook = (fnUpdate) => {

    const [isUpdated, setIsUpdated] = useState(false) 

    useEffect(() => {
        if(isUpdated) {
            fnUpdate()
            setIsUpdated(false)
        }
    },[isUpdated])

    return {setIsUpdated}
}
 
export default useUpdateHook