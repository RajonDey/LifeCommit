"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const MakeCommit = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    commitment: "",
    tag: "",
  });

  console.log(post);
  const makeCommit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log(session.user.id);
    try {
      const response = await fetch("/api/commitment/new", {
        method: "POST",
        body: JSON.stringify({
          commitment: post.commitment,
          creator: session.user.id,
          tag: post.tag,
        }),

        headers: {
          "Content-Type": "application/json", // Set the content-type to JSON
        },
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Make"
      post="post"
      setPost={setPost}
      submitting={submitting}
      handleSubmit={makeCommit}
    />
  );
};

export default MakeCommit;
