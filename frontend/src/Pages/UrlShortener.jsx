import { Button, Container, TextInput } from "@mantine/core";
import React, { useState } from "react";
import Service from "../utils/http";
import Response from "../Components/Response";

const service = new Service();

export default function UrlShortener() {
  const [response, setResponse] = useState(null);
  const [input, setInput] = useState({
    originalUrl: "",
    customUrl: "",
    expiresAt: "",
    title: "",
  });

  const generateShortUrl = async () => {
    console.log(input?.originalUrl);
    try {
      const data = await service.post("s", input);
      console.log(data);
      setResponse(data);
    } catch (error) {
      console.error("Error generating short URL:", error);
    }
  };

  return (
    <>
      {!response ? (
        <Container size={"xs"}>
          URL Shortener
          <TextInput
            size="lg"
            label="Original Url "
            withAsterisk
            placeholder="Input placeholder"
            onChange={(e) => {
              setInput({ ...input, originalUrl: e.target.value });
            }}
          />
          <TextInput
            size="lg"
            label="Custom Url "
            //    withAsterisk
            placeholder="Input placeholder"
            onChange={(e) => {
              setInput({ ...input, customUrl: e.target.value });
            }}
          />
          <TextInput
            size="md"
            radius="md"
            label="Title"
            //   withAsterisk
            description=""
            placeholder="Input placeholder"
          />
          <TextInput
            size="md"
            radius="md"
            type="date"
            label="Expiry Date"
            //   withAsterisk
            description=""
            placeholder="Input placeholder"
          />
          <Button
            onClick={generateShortUrl}
            variant="outline"
            color="cyan"
            size="lg"
            radius="lg"
          >
            Button
          </Button>
        </Container>
      ) : (
        <Response response={response} setResponse={setResponse} />
      )}
    </>
  );
}
