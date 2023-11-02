import Link from "next/link";

const Post = ({ post}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col mb-4'>
      <p className="title mb-4">{post.prompt}</p>    
      <div className="name mb-4">
        <p>By</p>
        <p>{post.firstName}</p>
        <p>{post.lastName}</p>        
      </div>
      <div class="post_photo">
        <img src={post.photo}/>
      </div>
      <p>{post.content}</p>
    </section>
  );
}

export default Post