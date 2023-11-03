import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className='head_text text-center'>
            Uncover and Share 
            <br className='max-md:hidden' />
            <span className='orange_gradient text-center'>Fascinating Travel Blogs</span>
        </h1>
        <p className='desc text-center'>Travel Journal Collective is an open platform designed for the modern wanderer, offering a creative space to discover, craft, and share captivating travel stories</p>
        <Feed />
    </section>
  )
}

export default Home