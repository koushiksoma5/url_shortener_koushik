import React, { useEffect, useState } from 'react'
import Service from '../utils/http'
import { Avatar, Text } from '@mantine/core'
const service=new Service();

export default function Profile() {
   const [profileData, setprofiledata]=useState(null);
   async function getProfileData(){
    let data=await service.get("user/me");
    setprofiledata(data);
    console.log(data);
   }

   useEffect( ()=>{
          getProfileData();
   },[]);

  return (
    <div className='parent-div'>
        <Avatar className='Avatar' src={profileData?.avatar} alt="Couldnt find" />
        <Text className='text' tt="uppercase">{profileData?.name}</Text>
        <Text>{profileData?.email}</Text>

         {/* <Email>{profileData?.email}</Email> */}
    </div>
  )
}
