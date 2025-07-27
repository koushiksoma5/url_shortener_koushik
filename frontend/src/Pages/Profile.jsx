import React, { useEffect, useState } from 'react'
import Service from '../utils/http'

import { Avatar, Container, Stack, Text } from '@mantine/core'

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
    <Container className='parent-div'>
        <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="lg"
    >
    

        {/* <Avatar className='Avatar' src={profileData?.avatar} alt="Couldnt find" /> */}
      <Avatar variant="filled" radius="xl" size="xl" src={profileData?.avatar} />
        {/* <Avatar src="image.png" /> */}
        <Text className='text' tt="uppercase">{profileData?.name}</Text>
        <Text><strong> Email id: </strong>{profileData?.email}</Text>
        <Text><strong> Account Created On  </strong>{profileData?.createdAt}</Text>
        <Text><strong> Employee id: </strong>{profileData?._id}</Text>

         {/* <Email>{profileData?.email}</Email> */}
           </Stack>
    </Container>
  )
}
