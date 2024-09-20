
const Blog = () => (
  <>

    <section className="bg-[#26304F] lg:py-16 py-10">
      <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12  ">
        <div className="titleRow mb-10">
          <div className="menus-block my-auto ">
            <h3 className="title-bg text-white " style={{ color: '#fff' }}>Blog</h3>
            <h2 className="xl:text-4xl text-3xl text-[#fff] text-center font-bold">Read Updated Blogs</h2>
            <p className="text-lg text-white text-center font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni, excepturi in incidunt, possimus suscipit neque quia nihil, enim alias perspiciatis iusto voluptatem sunt commodi et aliquam exercitationem nostrum. Maxime!
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8">
          <div className="bg-[#fff] border border-[#26304F] rounded-[18px]">
            <img className="rounded-tr-lg w-full rounded-tl-lg" src="/image/dummy-blog-img.webp" alt="" />
            <div className="py-6 px-4">
              <h2 className="font-semibold text-black text-2xl">Best Cross Platform Mobile App Development Frameworks</h2>
              <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio.....</p>
              <span className="text-[#0000008e]">September 18 2024</span>
              <div className="mt-6">
              <button className="blog-item-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] border border-[#26304F] rounded-[18px]">
            <img className="rounded-tr-lg rounded-tl-lg" src="/image/dummy-blog-img.webp" alt="" />
            <div className="py-6 px-4">
              <h2 className="font-semibold text-black text-2xl">Best Cross Platform Mobile App Development Frameworks</h2>
              <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio.....</p>
              <span className="text-[#0000008e]">September 18 2024</span>
              <div className="mt-6">
              <button className="blog-item-btn">Read More</button>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] border border-[#26304F] rounded-[18px]">
            <img className="rounded-tr-lg rounded-tl-lg" src="/image/dummy-blog-img.webp" alt="" />
            <div className="py-6 px-4">
              <h2 className="font-semibold text-black text-2xl">Best Cross Platform Mobile App Development Frameworks</h2>
              <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio.....</p>
              <span className="text-[#0000008e]">September 18 2024</span>
              <div className="mt-6">
              <button className="blog-item-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
        <button className="btn btn-fix lazyloaded  border border-[#00000042]">
        View All Blogs <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
        </div>
      </div>
    </section>
  </>

);

export default Blog;
