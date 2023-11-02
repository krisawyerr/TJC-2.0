import Link from "next/link";

const Post = ({ post}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <p>{post._id}</p>
      <p>{post.creator._id}</p>
      <p>{post.creator.email}</p>
      <p>{post.creator.username}</p>
      <p>{post.creator.image}</p>
      <p>{post.creator.__v}</p>
      <p>{post.prompt}</p>
      <p>{post.tag}</p>
      <p>{post.firstName}</p>
      <p>{post.lastName}</p>
      <p>{post.content}</p>
      <img src={post.photo}/>
    </section>
  );
}

export default Post