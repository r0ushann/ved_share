'use client'
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreatePrompt= ()=> {

  const router = useRouter();
  const {data: session} = useSession();

    const [submitting, setSubmitting]  = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });


//create prompt code starts here
    const createPrompt = async(e)=>{

      e.preventDefault();
      setSubmitting(true);

      try{
        //api call for new post
        const response = await fetch('/api/prompt/new', {
          method: 'POST',
          body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user.id,
            tag: post.tag
          })
        })
// redirects to the home page after creating a prompt
        if(response.ok){
          router.push('/');
        }

      }catch(error){
        console.log(error);
      }finally{
        setSubmitting(false);
      }

    }

  return (
    <Form 
    type="Create"
    post = {post}
    setPost={setPost}
    submitting ={submitting}
    handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt
