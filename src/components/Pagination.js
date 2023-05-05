import React from "react";
import '../App.css';
import prev from '../assets/images/left.png';
import next from '../assets/images/double.png';

const Pagination=({currentPage,setCurrentPage,numberOfTotalPages,pages})=>{
  
    const previousPage=()=>{
        if(currentPage !== 1) setCurrentPage(currentPage-1);
       }
      
       const nextPage=()=>{
        if(currentPage !== numberOfTotalPages) setCurrentPage(currentPage+1);
       }

    return (
<div className='pagination'>
<button onClick={previousPage}><img src={prev}/>Prev</button>
<div className='page-container'>
  {pages.map(page=> 
  <span key={page} 
  onClick={()=>setCurrentPage(page)} 
  className={`${currentPage===page?"active":""}`} >
  {page}
  </span>)}
  </div>
  <button onClick={nextPage}>Next<img src={next}/></button>
</div>
 );
}
export default Pagination; 