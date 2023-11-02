"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Post from "@components/Post";

const EditPrompt = () => {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [post, setPost] = useState({ prompt: "", tag: "", _id: "", creator: "" , firstName: "" , lastName: "" , content: "" , photo: "" });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
        _id: data._id,
        creator: data.creator,
        firstName: data.firstName,
        lastName: data.lastName,
        content: data.content,
        photo: data.photo,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);


  return (
    <Post
      post={post}
    />
  );
};

export default EditPrompt;