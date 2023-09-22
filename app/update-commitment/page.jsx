"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditCommitment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const commitmentId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    commitment: "",
    tag: "",
  });

  useEffect(() => {
    const getcommitmentDetails = async () => {
      const response = await fetch(`/api/commitment/${commitmentId}`);
      const data = await response.json();

      setPost({
        commitment: data.commitment,
        tag: data.tag,
      });
    };

    if (commitmentId) getcommitmentDetails();
  }, [commitmentId]);

  const updateCommit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!commitmentId) return alert("Missing commitmentId!");
    try {
      const response = await fetch(`/api/commitment/${commitmentId}`, {
        method: "PATCH",
        body: JSON.stringify({
          commitment: post.commitment,
          tag: post.tag,
        }),
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
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateCommit}
    />
  );
};

export default EditCommitment;
