import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Spinner from '../Components/Spinner';
import Product from "../Components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);

  async function fetchProductData() {
    setloading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setposts(data)

    } catch (error) {
      console.log("Someting is Wrong while fetching the API")
      toast.error("Someting is Wrong")
      setposts([]);
    }
    setloading(false);
  }


  useEffect(() => {
    fetchProductData()
  }, []);


  return (
    <div>
      {
        loading ? (<Spinner />) : posts.length > 0 ?
          (<div className='grid sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
            {posts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>) :
          (
            <div className='flex justify-center items-center'>
              <p>No Data Found</p>
            </div>
          )
      }
    </div>
  )
}

export default Home

