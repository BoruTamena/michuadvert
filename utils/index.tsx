import { error } from "console";



export default async function getservice(id:string){

    try{

        const res=await fetch(`http://localhost:3000/service/?id=${id}`,{cache:"no-store"})
        return res.json()

    }catch(err){

        throw new Error("internal server error")
        return []

    }

}