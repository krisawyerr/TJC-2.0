"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleViewPost = () => {
    console.log(post);

    router.push(`/view-post?id=${post._id}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      {pathName !== "/profile" && (
        <div className='aaa'  onClick={handleViewPost}>
          <div className="hhh">
            <div className="ddd">
              <img src={post.photo}/>
            </div>
            <div className="bbb">
              <div>
                <h1 className="zzz">{post.prompt}</h1>
                <h2 className="min_width" onClick={(event) => {event.stopPropagation();handleProfileClick()}}>By {post.firstName} {post.lastName}</h2>
                <p className="zzz">{post.content.slice(0,70) + "..."}</p>
              </div>
              <p className="ccc min_width" onClick={(event) => {event.stopPropagation(); handleTagClick(post.tag)}}>#{post.tag}</p>        
            </div>
          </div>
        </div>
      )}
      {session?.user.id === post.creator?._id && pathName === "/profile" && (
        <div className='aaa2'  onClick={handleViewPost}>
          <div className="hhh">
            <div className="ddd">
              <img src={post.photo}/>
            </div>
            <div className="bbb">
              <div>
                <h1 className="zzz">{post.prompt}</h1>
                <h2 className="min_width" onClick={(event) => {event.stopPropagation();handleProfileClick()}}>By {post.firstName} {post.lastName}</h2>
                <p className="zzz">{post.content.slice(0,70) + "..."}</p>
              </div>
              <p className="ccc min_width" onClick={(event) => {event.stopPropagation(); handleTagClick(post.tag)}}>#{post.tag}</p>        
            </div>
          </div>
            <div className="iii">
              <hr />
              <div className="jjj">
                <p className='font-inter text-sm edit_button cursor-pointer hover_opacity min_width' onClick={(event) => { event.stopPropagation(); handleEdit(); }} >Edit</p>
                <p className='font-inter text-sm delete_button cursor-pointer hover_opacity min_width' onClick={(event) => { event.stopPropagation(); handleDelete(); }} >Delete</p>
              </div>
            </div>
        </div>
      )}
    </>
  );
};

export default PromptCard;