import React, { useEffect } from 'react'
import PureCounter from '@srexi/purecounterjs';
import CounterBox from './CounterBox';
import { BsPeople, BsHeadset, BsEmojiSmile, BsJournalRichtext } from "react-icons/bs";
import '../styles/stats.css'




const Stats = () => {
    useEffect(() => {
        new PureCounter();
    }, []);

    return (
        <section id="stats" className="stats section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-4">

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i><BsEmojiSmile className="icon" /></i>
                        <CounterBox start={0} end={232} duration={1}  label='Happy Clients' />
                        
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i><BsJournalRichtext className="icon"  /> </i> 
                        <CounterBox start={0} end={521} duration={1} label='Projects' />
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                       <i><BsHeadset className="icon"  /> </i> 
                        <CounterBox start={0} end={1463} duration={1} label='Hours Of Support' />
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i><BsPeople className='icon' /></i>
                        <CounterBox start={0} end={15} duration={1} label='Hard Workers' />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Stats