//import.meta.env baar baar likhne se acha h ye kro coz sometimes due to this site crashes

const config={
    appwriterurl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectid:String(import.meta.env.VITE_PROJECT_ID),
    appwritedatabaseid:String(import.meta.env.VITE_DATABASE_ID),
    appwritecollectionid:String(import.meta.env.VITE_COLLECTION_ID),
    appwritebucketid:String(import.meta.env.VITE_BUCKET_ID),
}


export default config