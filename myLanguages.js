function myLanguages(results) {
    const res = Object.entries(results).filter(([key, value]) => value >=60)
    
    console.log(res[0], res[1])

    return res 
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}))