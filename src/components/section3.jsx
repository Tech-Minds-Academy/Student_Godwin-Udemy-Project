import w from '../assets/w.png'
import sam from '../assets/sam.png'
import cisco from '../assets/cisco.png'
import vimeo from '../assets/vimeo.png'
import pg from '../assets/pg.png'
import hewlett from '../assets/hewlett.png'
import citi from '../assets/citi.png'
import ericson from '../assets/ericson.png'
function Brand (){
    return(
        <div className="my-16 p-8" style={{backgroundColor: 'oklch(97.59% .0029 264.54deg)'}}>
            <p className='text-center py-4 text-xl'> Trusted by over 17,200 companies and millions of learners around the world</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-8 place-items-center p-4">
                <img src={w} alt="" />
                <img src={sam} alt="" />
                <img src={cisco} alt="" />
                <img src={vimeo} alt="" />
                <img src={pg} alt="" />
                <img src={hewlett} alt="" />
                <img src={citi} alt="" />
                <img src={ericson} alt="" />
            </div>
        </div>
    )
}
export default Brand