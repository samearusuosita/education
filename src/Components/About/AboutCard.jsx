import React from 'react';
import Title from '../Commons/Title/Title';
import { Images } from '../Constant';
import { homeAbout } from '../dummyData';
import AWrapper from './AWrapper';


const AboutCard = () => {
  return (
    <>
     <section className='aboutHome'>
        <div className="container flex5B">
          <div className="left row">
            <img src={Images.about} alt="" />
          </div>
          <div className="right row">
            <Title subtitle="LEARN FASTER" title="Benefits About Scobad Academy"/>
          <div className="items">
            {homeAbout.map((val) => (
              <div className="item flex5B">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div> 
     </section>
     <AWrapper/>
    </>
  )
}

export default AboutCard
