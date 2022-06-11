const fetchUserCredentials=async (username) =>{
    let UserData= await fetch(`/usersByName/${username}`)
    let UserDataJson= await UserData.json()
    return UserDataJson
}
const getUserData=async()=>{
    let jsonData=await fetchUserCredentials('user2')
    console.log(jsonData[0].username)
    console.log(jsonData[0].password)
}

getUserData()
