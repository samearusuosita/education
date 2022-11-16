import React from 'react';
import { blog } from '../../dummyData';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className='newsletter'>
        <div className="container flex5B">
            <div className="left row">
                <h1>Newsletter - Stay tune and get the latest updates</h1>
                <p>Learn a new way to learn on the latest technologies</p>
            </div>
            <div className="right row">
                <input type="text" placeholder='Enter your email address'/>
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>ACADEMIA</h1>
                <span>online education & learning</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni optio sint similique laboriosam excepturi earum expedita deserunt. Praesentium, repudiandae iusto.</p>
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-youtube icon"></i>

            </div>
            <div className="box link">
                <h3>Explore</h3>
                <ul>
                    <li>About US</li>
                    <li>Our Courses</li>
                    <li>Pricing</li>
                    <li>Journals</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="box link">
                <h3>Quick Links</h3>
                <ul>
                    <li>About US</li>
                    <li>About US</li>
                    <li>About US</li>
                    <li>About US</li>
                    <li>About US</li>
                    
                </ul>
            </div>

            <div className="box">
                <h3>Recent Post</h3>
                {blog.slice(0,3).map((val) => {
                    return (
                    <div className="items flex5B">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <span>
                                <i className='fa fa-user'></i>
                                <label htmlFor="">{val.type}</label>
                            </span>
                            <span>
                                <i className='fa fa-calendar-alt'></i>
                                <label htmlFor="">{val.date}</label>
                            </span>
                            <h4>{val.title}</h4>
                        </div>
                    </div>

                )})}
            </div>
            <div className="box last" >
                <h3>Have a Question?</h3>
                <ul>
                    <li><i className='fa fa-map'></i>7 Bricks Road, Lekki - Lagos</li>
                    <li><i className='fa fa-phone-alt'></i>+2349161142608</li>
                    <li><i className='fa fa-paper-plane'></i>talk@scobad.come</li>
                </ul>
            </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright @2022 All right reserved | SCOBAD ACADEMY 2022 <i className='fa fa-heart'></i></p>
      </div>
    </>
  )
}

export default Footer
