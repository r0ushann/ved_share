'use client'
import React, {useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter , useSearchParams} from 'next/navigation'

import Form from '@components/Form'

const EditPrompt = ()=> {

  const router = useRouter();
//   const {data: session} = useSession();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id')

    const [submitting, setSubmitting]  = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }
        if(promptId) getPromptDetails();

    },[promptId])


//create prompt code starts here
    const updatePrompt = async(e)=>{

      e.preventDefault();
      setSubmitting(true);

      if(!promptId) return alert('Prompt Id not found')

      try{
        //api call for new post
        const response = await fetch('/api/prompt/${pomptId}', {
          method: 'PATCH',
          body: JSON.stringify({
            prompt: post.prompt,
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
    type="Edit"
    post = {post}
    setPost={setPost}
    submitting ={submitting}
    handleSubmit={()=> {}}
    />
  )
}

export default EditPrompt;
