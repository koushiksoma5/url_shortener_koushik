import { Container, Stack } from '@mantine/core'
import React from 'react'

export default function MyUrl() {
  return (
    <Container size={"xs"}> 
       <Stack
             h={300}
             bg="var(--mantine-color-body)"
             align="center"
             justify="center"
             gap="lg"
             style={{marginTop:"80px"}}
           >
           

       This page Contains All the URL you Have Created
      </Stack>
    </Container>
  )
}
