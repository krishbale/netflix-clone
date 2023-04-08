import useCurrentUser from '@/hooks/useCurrentUser';
import  { NextPageContext } from 'next';
import {signOut,getSession} from 'next-auth/react';
export async function getServerSideProps(context:NextPageContext){

const session = await getSession(context); 

if(!session){
  return{
    redirect:{
      destination:'/auth',
      permanent:false,
    }
  }
}
return {
  props:{}
}
}
export default function Home() {
  const {data:user} = useCurrentUser();
  return (
    <>
    <h1 className="text-2xl text-green-500">Netflix Clone</h1>
    <p className='text-white'>Logged in As :{user?.name}</p>
  <button className='g-10 w-full bg-white ' onClick={()=> signOut()}>Logout</button>
    
    </>
  )
}
