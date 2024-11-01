import { ID,Avatars,Client,Databases,Account } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();
const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);





//step1
export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.reactnative.aora",
    projectId: "67244b4900034ceb6093",
    databaseId: "67244e4c00141e42ca9e",
    usercollectionId: "67244e9900180c6adc95",
    videocollectionId: "67244ef400157f4dcdd3",
    storageId: "672453e200357a2439ad"
}




client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;


//create user
export const createUser =  async (email, password, username) => {

    try {
        // Register User
       const newAccount= await account.create(
        ID.unique(), email, password, username
    );
    if (!newAccount) throw Error
    const avatarUrl=avatar.getInitials(username)
    await siginin(email,password)

     //storing data of new user
     const newuser=await database.createDocument(
        
    config.databaseId,
      config.usercollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }

     )

     return newuser;       
    }
    catch (error) {
        
            console.error("Error in createUser:", error.message);
            throw new Error(error.message);
        
        
    }





}


//signin 
export  const siginin= async (email, password)=>{
   try{
    const session=await account.createEmailPasswordSession(email,password)
    return session;
   }
   catch(error){
    throw Error(error)
   }
}

