"use client"
import { useEffect, useState } from "react"

export default  function Post({params}) {
    const [post,setPost]=useState([])

    const id =  params.id
console.log(id)
    useEffect(()=>{
      try {
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
          .then((res)=>res.json())
          .then((res)=>setPost(res) )
      } catch (error) {
        res.error
      }
    },[id])
    return (
<>
        {post
         && <main class="container mx-auto px-4 py-6">
        <h2 class="text-4xl font-bold mb-4">{post.title}</h2>
        <p class="text-gray-500">Published on January 1, 2022</p>
        <img src={post.image} alt="Post Image" class="my-4"/>
        <p>{post.description}</p>
    </main>
}
    </>
    )

}