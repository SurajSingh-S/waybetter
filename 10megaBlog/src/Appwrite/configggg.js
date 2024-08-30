import config from "../config.js";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client;
    databases;
    bucket;


    constructor(){
        this.client
        .setEndpoint(config.appwriterurl)
        .setProject(config.appwriteprojectid); 
        this.databases= new Databases(this.client);
        this.bucket= new  Storage(this.client)
    }

    async createpost({title,slug,content,featuredimage, status,userid}){
        try{
            return await this.databases.createDocument(config.appwritedatabaseid,appwritecollectionid,slug,{
                title,content,featuredimage,status,userid
            })
        }
        catch(error){
            console.log("Appwrite serive:: createpost:: error", error)
        }
    }

    async updatepost(slug,{title,content,featuredimage, status}){
         try{
            return await this.databases.updateDocument(config.appwritedatabaseid,config.appwritecollectionid,slug,{
                title,content,featuredimage,status
            })
         }
         catch(error){
            console.log("Appwrite serive:: updatepost:: error", error)

         }
    }

    async deletepost(slug){
        try{
         await this.databases.deleteDocument(config.appwritedatabaseid,config.appwritecollectionid,slug)
         return true;
        }
        catch(error){
            console.log("Appwrite serive:: deletepost :: error", error)
            return false;
        }
    }

    //wanna take one post only
    async getpost(slug){
         try{
            return await this.databases.getDocument(config.appwritedatabaseid,config.appwritecollectionid,slug)
         }
         catch(error){
             console.log("Appwrite serive:: deletepost :: error", error)
             return false;
         }
    }

    async getpost(queries = [Query.equal("status","active")]){
        try{

            return await this.databases.listDocuments(config.appwritedatabaseid,config.appwritecollectionid,queries,100,0)
        }
        catch(error){
            console.log("Appwrite servie :: getpost :: error",error);
            return false;
        }
    }

    //file upload services 

    async uploadfile(file){
        try{
            return await this.bucket.createFile(config.appwritebucketid,ID.unique(),file)
        }
        catch(error){
            console.log("Appwrite :: serive :: iploadfile ", error)
            return false;
        }
    }

    async deletefile(fileid){ 
        try{
            await this.bucket.deleteFile(config.appwritebucketid,fileid)
            return true;
        }
        catch(error){
            console.log("Appwrite serive:: deletefile :: error",error);
            return false;
        }
    }

    getfilepreviwe(fileid){
        return this.bucket.getFilePreview(config.appwritebucketid,fileid)
    }
}


const service= new Service(); 
export default service;  //object ko hi seedha export kr rhe h

//create document mei 3rd mei documentid chahiye to hum slug ko hi documentid maan lenge
//update mei -> id i.e slug ko alg se le lenge kyuki unique id milega seedha jise change krna hoga