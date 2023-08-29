import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Photo from '../../assets/images/side-photo.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray= ['K','o',' ','P','h','y','o']
  const jobArray= ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
    <img src={Photo} alt='P' />
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} -12`}>i,</span>
        <br />
        <span className={`${letterClass} -13`}>I</span>
        <span className={`${letterClass} -14`}>'m</span>
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22} />
        </h1>
        <h2>Frontend Developer
        </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}



export default Home