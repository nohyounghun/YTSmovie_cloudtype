import React from 'react';

function Contact(props) {
  return (
    <div className='contact'>
      <h2>Contact Us</h2>
      <form>
        <p>
          <label>Name : </label>
          <input type="text" />
        </p>
        <p>
          <label>E-mail : </label>
          <input type="text" />
        </p>
        <p>
          <label className='subject'>Subject : </label>
          <textarea cols='60' rows='15'></textarea>
        </p>
        <input type="submit" value='send'/>
      </form>
    </div>
  );
}

export default Contact;