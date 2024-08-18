import React,{useEffect} from 'react';
import './main.css'
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from '../../Assets/img (1).jpg';
import img2 from '../../Assets/img (2).jpg';
import img3 from '../../Assets/img (3).jpg';
import img4 from '../../Assets/img (4).jpg';
import img5 from '../../Assets/img (5).jpg';
import img6 from '../../Assets/img (6).jpg';
import img7 from '../../Assets/img (7).jpg';
import img8 from '../../Assets/img (8).jpg';
import img9 from '../../Assets/img (9).jpg';

import AOS from "aos";
import "aos/dist/aos.css";


const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle:'Grindelwald',
        location:'Switzerland',
        grade:'CULTURAL RELAX',
        fees:"$700",
        description:'Schwendi bei Grindelwald railway station: Located in the municipality of Grindelwald and is part of the Berner Oberland Bahn, which runs trains to Interlaken Ost and Grindelwald.'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle:'Place St-Clair',
        location:'France',
        grade:'CULTURAL RELAX',
        fees:"$600",
        description:' Annecy is situated on the northern tip of Lake Annecy, 22 miles south of Geneva, Switzerland. Its known as the Pearl of the French Alps because of its location between the lake and mountains.'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle:'Babeli',
        location:'India',
        grade:'CULTURAL RELAX',
        fees:"$70",
        description:'Located near kullu, the most popular rafting spot in Kullu Manali and also in Himachal.Here you can enjoy rafting ride from 7- 10 kms, with in next one year the tourism of Kullu Manali & Himachal are organizing a championship for river rafting .'
    },

    {
        id:4,
        imgSrc: img4,
        destTitle:'Laganas Beach',
        location:'Greece',
        grade:'CULTURAL RELAX',
        fees:"$800",
        description:'A few steps from Laganas Beach in Laganas, Salty Angel Sea Front Villa offers accommodations with access to beauty services. This beachfront property offers access to a terrace, free private parking, and free Wifi.'
    },

    {
        id:5,
        imgSrc: img5,
        destTitle:'Yacht Charter',
        location:'Sri Lanka',
        grade:'CULTURAL RELAX',
        fees:"$200",
        description:'The island has a myriad of pristine beaches, lush rainforests, and ancient ruins, making it an idyllic destination to charter a yacht. From observing splendid wildlife to admiring stunning landscapes, a boat rental in Sri Lanka presents an unparalleled experience.'
    },

    {
        id:6,
        imgSrc: img6,
        destTitle:'Lguazu Fall',
        location:'Argentina',
        grade:'CULTURAL RELAX',
        fees:"$900",
        description:'Iguazú Falls is located on the border of Argentina and Brazil, in the Iguazú River that runs through Iguazú National Park in Argentina and Iguaçu National Park in Brazil.'
    },

    {
        id:7,
        imgSrc: img7,
        destTitle:'Phuket',
        location:'Thailand',
        grade:'CULTURAL RELAX',
        fees:"$800",
        description:'Phuket is an ideal tourist place in Thailand, providing many traditional activities and experiences in addition to all the glitz and luxury. '
    },

    {
        id:8,
        imgSrc: img8,
        destTitle:'Salalah',
        location:'Oman',
        grade:'CULTURAL RELAX',
        fees:"$750",
        description:'The many beautiful landscapes of Oman are unlike anything in the world. Salalah stands out in terms of its lush landscapes compared to its neighbouring areas which are of the typical desert landscape with its many Wadis and waterfalls'
    },

    {
        id:9,
        imgSrc: img9,
        destTitle:'Moraine Lake',
        location:'Canada',
        grade:'CULTURAL',
        fees:"$850",
        description:'Moraine Lakes brilliant blue-green waters are sheltered in the Valley of the Ten Peaks. Take a forested stroll along the shore or climb atop the Rockpile for breathtaking vantage points. Canoeing, hiking, walking, and photography are popular here.'
    },


]

const Main = ()=>{
    //lets create a react hook to add a scroll animation
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return(
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destination
                </h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle} </h4>
                                    <span className="continent flex">
                                        <HiLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex '>
                                        DETAILS<HiOutlineClipboardCheck  className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Main;