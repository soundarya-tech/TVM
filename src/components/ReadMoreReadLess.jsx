
import { useState } from "react";


const ReadMoreReadLess = ({children}) => {
    const [isReadMoreShown, setReadMorShown] =
    useState(false) 

const toggleBtn = () => {
    setReadMorShown(prevState => !prevState)

}

    return(
        <div className="read-more-read-less">
          {isReadMoreShown ? children : children.substr(0,250)}
          <button className="button" onClick={toggleBtn}>{isReadMoreShown ? 'Read Less' : 'Read More'}</button>
             </div>
    )
}
export default ReadMoreReadLess; 