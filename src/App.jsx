import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'; // Ant Design
import { FaPlus } from "react-icons/fa6";
import { MdDriveFolderUpload } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { TiCloudStorageOutline } from "react-icons/ti";
import './page.css'


function App() {
  const [storage, setStorage] = useState(0)

  return (
    <>
    
    <div class="sidebar">
      <div class="name">
        <div class="logo">
          <div className="flex items-center gap-2">
            <img src="/Images/Logo.png" alt=""/>
            <span>PicFinder</span>
          </div>
        </div>
      </div>
        <div class="sidebar-nav">  {/* Starting side nav */}
        
              <div class="new-section">
                <div className="flex items-center gap-2">
                      <FaPlus />
                      <span>New</span>
                  </div>
              </div>
              <div class="second-section">
                <ul>
                <div class="options">
                  <div className="flex items-center gap-2">
                        <IoHome />
                        <span>Home</span>
                    </div>
                </div>
                <div class="options">
                  <div className="flex items-center gap-2">
                      <MdDriveFolderUpload />
                      <span>Upload</span>
                  </div>
                </div>
                <div class="options">
                  <div className="flex items-center gap-2">
                      <GoClock />
                      <span>Recent</span>
                  </div>
                </div>
                <div class="options">
                  <div className="flex items-center gap-2">
                      <RiDeleteBin6Line />
                      <span>Bin</span>
                  </div>
                </div>
                </ul> 
              </div>
        </div>

        {/* second navbar */}
        <div class="sidebar-nav box2">
          <div class="storage">
            <div className='flex text-sm gap-x-2'>
              <div className='glex items-center gap-x-1'>
                <input // this input is the volume bar or range bar
                  type="range"
                  min={0}
                  max={5}
                  step={0.1} // For floating point
                  value={storage}
                  className='cursor-pointer'
                  onChange={(e) =>
                    {setStorage(e.target.value)}
                  }
                />
                <div className='flex items-center gap-2'>
                  <TiCloudStorageOutline />
                <label>Storage {storage}GB of 5 GB Used </label>
                </div>
              </div>
            </div>
          </div>
          <div className='getStorage'>
                <sapn>Get more storage</sapn>
          </div>
        </div>
        
    </div>
    {/*  sidebar section end */}


  

    <div className=' text-white '>
      <div className="w-full flex justify-center mt-4">
        <div className='flex shadow rounded-2xl overflow-hidden mb-4 w-[600px]'>
          <input type='text'
           className='outline-none w-full py-1 px-3 bg-gray-600'
           placeholder='Search'
          />
          <button
          className='outline-none text-white px-3 py-0.5 shrink-0 bg-gray-600'>
            <AiOutlineClose size={18} className="text-gray-400" />
          </button>
        </div>
      </div>
      
    </div>
        {/* ............Main section start here................  */}

      <div class="main-section">
        <div>

        </div>
      </div>

      {/* log out section */}
      <div class="log-out">
        <div className="flex items-center gap-2">
            <GoClock />
            <span>Recent</span>
        </div>
      </div>
    
    </>
  )
}

export default App
