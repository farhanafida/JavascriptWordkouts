

useEffect(()=>{
    const fetchData=async()=>{
        const response=await fetch('http://api')
        const data=await response.json()
        setData(data);
    }
})

memorizedFn=useMemo(()=>data,[data])


{memorizedFn?(

    memorizedFn.map((item))
):
(<p>loading</p>)}