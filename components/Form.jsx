import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>

      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>

        
        <label>
          <span className='font-satoshi font-semibold text-base formcolor'>
            Title
          </span>
          <input value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} type='text' placeholder='First Trip Abroad' required className='form_input' />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base formcolor'>
            First Name
          </span>
          <input value={post.firstName} onChange={(e) => setPost({ ...post, firstName: e.target.value })} type='text' placeholder='John' required className='form_input' />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base formcolor'>
            Last Name
          </span>
          <input value={post.lastName} onChange={(e) => setPost({ ...post, lastName: e.target.value })} type='text' placeholder='Smith' required className='form_input' />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base formcolor'>
            Image Address
          </span>
          <input value={post.photo} onChange={(e) => setPost({ ...post, photo: e.target.value })} type='text' required className='form_input' />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base formcolor'>Blog</span>
          <textarea value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} placeholder='Write your post here' required className='form_textarea ' />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base formcolor'>
            Country Visited
          </span>
          <input value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} type='text' placeholder='United Kingdom' required className='form_input' />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='formcolor1 text-sm'>Cancel</Link>

          <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm formcolor3 rounded-full formcolor2'>
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form