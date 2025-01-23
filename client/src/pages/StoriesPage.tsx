import { useState, useEffect } from 'react'
import catchError from '../utils/catchError'

// import { useAppSelector, useAppDispatch } from '../redux/hooks'

// // import { setStories } from '../redux/storiesSlice'


// type Props = {}

// export default function StoriesPage({}: Props) {
    //     // const story = useAppSelector((state) => state.stories.value)
    //     // const dispatch = useAppDispatch()
    //   return (
        //     <>
        //     <h1>Story post</h1>
        //     {stories.map(story =>{
            //         return<h2>{story}</h2>
            //     })}
            //     </>
            //   )
            // }
            
            
interface InputProps {
                caption:string
            }
            
const StoriesPage = ({caption}:InputProps) => {

    const [stories, setStories] = useState([])
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/stories/',{
        'method':'Get',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Token 20bac1e0859c2918c30ee3e20b61570991f08b4d' 
        }
      })
      .then(response=>response.json())
      .then(response=>setStories(response))
      .catch(error=>{
        catchError(error);
      })
    }, [])
    

    return (
        <>
            <h1>Story Post</h1>
            {stories.map(story =>{
                return (
                    <div key={story.id}>
                        <h2>{story.caption}</h2>
                    </div>
            )
            })}
        </> 
    )
}

export default StoriesPage
