import React from 'react';
import './Sidenav.css'
import { Link } from 'react-router-dom';


const Sidenav = () => {

  return (
    <>
      <div className="sidenav-container">
      <div className="course-btns" ><Link to="videoedit" > <div ><img className='img-cat'  src="/src/components/Side-Nav/video.png" alt="" height={20} width={20} />Video Editing</div> </Link></div>
        <div className="course-btns"><Link to="/webdeveloper"><div><img className='img-cat'  src="/src/components/Side-Nav/webdev.png" alt="" height={20} width={20} />Web Developer</div></Link></div>
        <div className="course-btns"><Link to="digitalmark"><div><img className='img-cat'  src="/src/components/Side-Nav/digitalmar.png" alt="" height={20} width={20} />Digital Markiting</div></Link></div>
        <div className="course-btns"><Link to="threed"><div><img className='img-cat'  src="/src/components/Side-Nav/3dani.png" alt="" height={20} width={20} />3d Animation </div></Link></div>
        <div className="course-btns"><Link to="twod"><div><img className='img-cat'  src="/src/components/Side-Nav/2dani.png" alt="" height={20} width={20} />2d Animation </div></Link></div>
        <div className="course-btns"><Link to="videoedit"><div><img className='img-cat'  src="/src/components/Side-Nav/video.png" alt="" height={20} width={20} />Video Editing</div></Link></div>
        <div to="webdeveloper" className="course-btns"><Link to="webdeveloper"><div><img className='img-cat'  src="/src/components/Side-Nav/webdev.png" alt="" height={20} width={20} />Web Developer</div></Link></div>
        <div className="course-btns"><Link to="digitalmark"><div><img className='img-cat'  src="/src/components/Side-Nav/digitalmar.png" alt="" height={20} width={20} />Digital Markiting</div></Link></div>
        <div className="course-btns"><Link to="threed"><div><img className='img-cat'  src="/src/components/Side-Nav/3dani.png" alt="" height={20} width={20} />3d Animation</div></Link></div>
        <div className="course-btns"><Link to="twod"><div><img className='img-cat'  src="/src/components/Side-Nav/2dani.png" alt="" height={20} width={20} />2d Animation</div></Link></div>
        <div className="course-btns"><Link to="videoedit"><div><img className='img-cat'  src="/src/components/Side-Nav/video.png" alt="" height={20} width={20} />Video Editing</div></Link></div>
        <div className="course-btns"><Link to="digitalmark"><div><img className='img-cat'  src="/src/components/Side-Nav/digitalmar.png" alt="" height={20} width={20} />Digital Markiting</div></Link></div>

      </div>
    </>
  )
}

export default Sidenav
