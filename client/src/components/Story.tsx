import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../redux/storiesSlice";
import { RootState, AppDispatch } from "../redux/store";



const Story = () => {
    const [Loading, setLoading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const { stories, status, error } = useSelector((state: RootState) => state.stories);
    
    
    
  useEffect(() => {
      dispatch(fetchStories());
  }, [dispatch]);
  return (
      <>
        {stories.map((Story)=>(
            <div key={Story.id} className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
            <div>
            <img className="size-48 shadow-xl rounded-md" alt="" src={Story.image} />
            </div>
            <div className="flex items-center md:items-start">
            <span className="text-2xl font-medium">{Story.caption}</span>
            <span className="font-medium text-sky-500">{Story.author}</span>
            <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>{Story.likes}</span>
            <span>{Story.created_at}</span>
            <span>{Story.updated_at}</span>
            <span>{Story.tags}</span>
            </span>
            </div>
            </div>
          )) 
        }
      </>
    )
}

export default Story
