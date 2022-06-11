const fetchUserCredentials=async (username) =>{
    let UserData= await fetch(`/usersByName/${username}`)
    let UserDataJson= await UserData.json()
    return UserDataJson
}
const getUserData=async()=>{
    let jsonData=await fetchUserCredentials('username')
    console.log(jsonData[0])
    console.log(jsonData[0].username)
    console.log(jsonData[0].password)
    
}

getUserData()
