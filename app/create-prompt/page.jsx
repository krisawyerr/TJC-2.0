"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" , firstName: "" , lastName: "" , content: "" , photo: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new/", 
      {
        method: "POST",
        body: JSON.stringify({ prompt: post.prompt, userId: session?.user.id, tag: post.tag, firstName: post.firstName, lastName: post.lastName, content: post.content, photo: post.photo}),
      });

      if (response.ok) {
        router.push("/");
      }
    } 
    catch (error) {
      console.log(error);
    } 
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form type='Create' post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt}/>
  );
};

export default CreatePrompt;