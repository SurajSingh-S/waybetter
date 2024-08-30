import config from "../config/config";
import {Client,Account,ID} from "appwrite";


export class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriterurl)
            .setProject(config.appwriteprojectid);
        this.account= new Account(this.client)
    }

    async createaccount ({email,password,name}){
        try{
            const useraccount = await this.account.create(ID.unique(),email,password,name);
            if(useraccount){
                //call another method{if account do exist then let it login at the same time }
                return this.login(email,password);
            }
            else{
                return useraccount;
            }
        }
        catch(error){
            throw error;
        }

    }

    async login({email,password}){
        try{
            await this.account.createEmailPasswordSession(email,password)
        }
        catch(error){
            throw error;
        }
    }
    
    async getcurrentuser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("appwrite service :: getcurrentuser :: error",error);
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            console.log("appwrite service :: logout :: error", error);
        }

    }
    
}

const authservice= new Authservice()  //authservice is an object here 

export default authservice;

//why we constructor here , as itcall itself whenever a new object is created.{ object-> new info or new profile}
// we have done same work as in documentation but in a good practices 
//why we use async await -> as it is used in documentation, because we dont wanna be forward till the previous taks {creation} gets complete . {we can use promises as well}
// why we took id in aysnc {useraccount} cuz as per documentation we have take first argument an ID.
//create account mei hmne if k andr useraccount pass nhi kiya kyuki we want if account exist then login it directlt hence we are passing login method to it
//getcurrentaccount kyu use krenge if we wanna know is there any account that is currently logedin if any return that account else return null 
