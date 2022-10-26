import React from 'react'
import Back from '../Commons/Back/Back'

const Contact = () => {

    const map = '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.650422619106!2d3.5323071816353195!3d6.463731293407402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7442fc585df%3A0x642eaefe2c2c7ce2!2sAja%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1666773639985!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'

  return (
    <>
      <Back title="Contact Us"/>
      <section className='contact padding'>
        <div className="container shadow">
            <div className="left row">
                <iframe src={map}></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, exercitationem. Distinctio suscipit sit cumque dolorum, tenetur tempora aliquam maxime eveniet!</p>

                <div className="items grid2">
                    <div className="box">
                        <h4>ADDRESS: </h4>
                        <p>14 James Samuel Road, Lekki Ajah Epress Way</p>
                    </div>
                    <div className="box">
                        <h4>EMAIL: </h4>
                        <p>info@example.com</p>
                    </div>
                    <div className="box">
                        <h4>PHONE: </h4>
                        <p>07065434953</p>
                    </div>
                </div>

                <form action="">
                    <div className="flex5B">
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                    </div>
                    <input type="text" placeholder='Subject'/>
                    <textarea cols="30" rows="10">Create a message here</textarea>
                </form>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
