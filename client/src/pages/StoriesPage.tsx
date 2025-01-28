import { useState, useEffect } from 'react'
import catchError from '../utils/catchError'
import Story from '../components/Story'



            
const StoriesPage = () => {


    return (
        <>    
            <div  className=''>
            <Story id={"1"} caption={'hello'} img={'$'} author={'dashe'} />
            </div>
        </>
 
    )
}

export default StoriesPage
