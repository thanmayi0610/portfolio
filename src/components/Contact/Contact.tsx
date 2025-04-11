// import React, { useState } from 'react';
// import portfolioData from '../../data/portfolioData';
// import './Contact.css';

// const Contact: React.FC = () => {
//   const { contact } = portfolioData;
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [showForm, setShowForm] = useState(false); // added for toggling

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//     setShowForm(false);
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <h2 className="section-title">Contact</h2>
//       <div className="contact-container">
//         <div className="contact-info">
//           <div className="contact-item">
//             <span className="contact-label">Email:</span>
//             <a href={`mailto:${contact.email}`} className="contact-value">{contact.email}</a>
//           </div>
//           {contact.phone && (
//             <div className="contact-item">
//               <span className="contact-label">Phone:</span>
//               <a href={`tel:${contact.phone}`} className="contact-value">{contact.phone}</a>
//             </div>
//           )}
//           {contact.address && (
//             <div className="contact-item">
//               <span className="contact-label">Location:</span>
//               <span className="contact-value">{contact.address}</span>
//             </div>
//           )}
//           <button className="connect-btn" onClick={() => setShowForm(prev => !prev)}>
//             {showForm ? 'Close' : 'Connect'}
//           </button>
//         </div>

//         {showForm && (
//           <div className="contact-form-container">
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   name="name" 
//                   value={formData.name}
//                   onChange={handleChange} 
//                   required 
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   name="email" 
//                   value={formData.email}
//                   onChange={handleChange} 
//                   required 
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea 
//                   id="message" 
//                   name="message" 
//                   rows={6} 
//                   value={formData.message}
//                   onChange={handleChange} 
//                   required 
//                 ></textarea>
//               </div>
//               <button type="submit" className="submit-btn">Send Message</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import portfolioData from '../../data/portfolioData';
import './Contact.css';

const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/thanmayi-j-r-a0965224b/', '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href={`mailto:${contact.email}`} className="contact-value">{contact.email}</a>
          </div>
          {contact.phone && (
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href={`tel:${contact.phone}`} className="contact-value">{contact.phone}</a>
            </div>
          )}
          {contact.address && (
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-value">{contact.address}</span>
            </div>
          )}
          <button className="connect-btn" onClick={handleConnectClick}>
            Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
