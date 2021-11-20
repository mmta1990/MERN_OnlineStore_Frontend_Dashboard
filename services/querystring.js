export const addQueryArg = (query,key,value)=>{
    const queryParams = new URLSearchParams(query)
    if(queryParams.has(key)){
        const prevValue = queryParams.get(key)
       queryParams.set(key,decodeURIComponent(`${prevValue},${value}`)) 
    }else{
        queryParams.set(key,value) 
    }
    return queryParams.toString()
}
export const removeQueryArg = (query,key,value)=>{
    const queryParams = new URLSearchParams(query)
    if(queryParams.has(key)){
        const newValue = queryParams.get(key).split(',').filter(currentValue => currentValue!=value)
        if(newValue.length> 0){
            queryParams.set(key,decodeURIComponent(`${newValue},${value}`)) 
        }else{
            queryParams.delete(key)
        }
    }
    return queryParams.toString()
}