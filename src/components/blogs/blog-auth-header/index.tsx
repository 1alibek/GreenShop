import { SearchOutlined } from "@ant-design/icons"

const BlogAuthHeader = () => {
  return (
    <div>
    <h1 className="font-bold text-2xl text-center py-3"> My Feed</h1>
  
    <div className="flex justify-between items-center h-[35px] overflow-hidden rounded-md border border-primary w-[60%] mx-auto max-[800px]:w-[70%] max-[500px]:w-[100%]">
      <input
        type="text"
        placeholder="Search text"
        className="h-full w-full outline-none px-2"
      />

      <button className="h-full px-[20px] text-white bg-primary border-l border-primary transition-all duration-300 hover:bg-transparent hover:text-primary">
        <SearchOutlined/>
      </button>
    </div>
  </div>
  )
}

export default BlogAuthHeader