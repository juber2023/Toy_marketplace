import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`${title} -Action Toys`
    },[title])
}

export default useTitle