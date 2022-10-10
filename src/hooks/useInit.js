import { useState, useEffect, useCallback } from 'react'
import { sleep } from '../utils/tools'
const useInit = (cb) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getData = useCallback(async () => {
        setLoading(true)
        await sleep(2000)
        const data = cb()
        setData(data)
        setLoading(false)
    }, [])
    useEffect(() => void getData(), [])
    return { data, loading }
}

export default useInit