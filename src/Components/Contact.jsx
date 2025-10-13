import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Linkedin, Youtube, MessageCircle, Clock, Users, Star, Award, BookOpen, GraduationCap, Navigation, AlertCircle, CheckCircle, Menu, X } from 'lucide-react';
import '../Styles/ContactUs.css';
import Footer from './Footer';
import campusBackground from "../Assets/Subtract.png";
const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('success');
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const collegeInfo = {
    name: 'HICE',
    fullName: 'Hindusthan College of Engineering and Technology',
    address: 'Ingur, Perundurai, Erode District, Tamil Nadu – 638052',
    phone: '+91 98431 33333',
    email: 'hice@hindusthan.net',
    courses: ['Arts', 'Science', 'Commerce', 'Computer Applications'],
    established: '2025',
    students: '100+',
    faculty: '50+',
    coordinates: {
      lat: 11.0168,
      lng: 76.9558
    }
  };

  

  const contactMethods = [
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: collegeInfo.phone, 
      action: `tel:${collegeInfo.phone}`, 
      color: '#00929F',
      description: 'Available Mon-Sat, 9 AM - 5 PM'
    },
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: collegeInfo.email, 
      action: `mailto:${collegeInfo.email}`, 
      color: '#007A85',
      description: 'We reply within 24 hours'
    },
    { 
      icon: MapPin, 
      label: 'Visit Us', 
      value: 'Get Directions', 
      action: `https://maps.google.com/?q=${collegeInfo.coordinates.lat},${collegeInfo.coordinates.lng}`, 
      color: '#FFD700',
      description: 'Located in Coimbatore, Tamil Nadu'
    }
  ];

  const GoogleMap = () => (
    <div className="google-map-container">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.5!2d${collegeInfo.coordinates.lng}!3d${collegeInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnMjAuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '16px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="HICAS College Location"
      ></iframe>
    </div>
  );

  return (
    <div className="contact-page">
       {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">

          {/* Hero Text */}
          <div className="hero-text">
            <h1 className="hero-title">Contact us</h1>
            <div className="breadcrumb"><a href="/">Home</a> &gt; <a href="/contact">Contact us</a></div>
            <p className="hero-description">
              If you are passionate and driven, explore our current openings across
              Hindusthan Institutions and apply.
            </p>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Quick Contact Bar */}
          <div className={`quick-contact-section ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title"><span className=""></span> Quick Contact</h2>
            <div className="quick-contact-grid">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a 
                    key={index} 
                    href={method.action}
                    target={method.label === 'Visit Us' ? '_blank' : '_self'}
                    rel={method.label === 'Visit Us' ? 'noopener noreferrer' : ''}
                    className="quick-contact-card"
                    style={{ 
                      '--accent-color': method.color,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="contact-icon">
                      <Icon size={24} />
                    </div>
                    <div className="contact-info">
                      <h3>{method.label}</h3>
                      <p className="contact-value">{method.value}</p>
                      <p className="contact-description">{method.description}</p>
                    </div>
                    <div className="contact-arrow">
                      <Navigation size={16} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              <MessageCircle size={20} />
              <span>Contact Information</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'admissions' ? 'active' : ''}`}
              onClick={() => setActiveTab('admissions')}
            >
              <Send size={20} />
              <span>Admission Queries</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'location' ? 'active' : ''}`}
              onClick={() => setActiveTab('location')}
            >
              <MapPin size={20} />
              <span>Location & Maps</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="content-area">
            {activeTab === 'contact' && (
              <div className="contact-section animate-tab">
                <div className="college-main-card">
                  <div className="card-header">
                    <div className="college-badge">
                      <div className="college-icon">
                        <BookOpen size={32} />
                      </div>
                      <div className="college-info">
                        <h2 className="college-name">{collegeInfo.name}</h2>
                        <h3 className="college-full-name">{collegeInfo.fullName}</h3>
                        <div className="college-meta">
                          <span className="established">
                            <Clock size={16} />
                            Est. {collegeInfo.established}
                          </span>
                          <span className="rating">
                            <Star size={16} />
                            4.5/5 Rating
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="design-element">
                      <img src="/public/Design.png" alt="Design Element" className="design-image" />
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="address-section">
                      <div className="address-header">
                        <MapPin size={20} />
                        <h4>Campus Address</h4>
                      </div>
                      <p>{collegeInfo.address}</p>
                      <button 
                        className="directions-btn"
                        onClick={() => window.open(`https://maps.google.com/?q=${collegeInfo.coordinates.lat},${collegeInfo.coordinates.lng}`, '_blank')}
                      >
                        <MapPin size={16} />
                        Get Directions
                      </button>
                    </div>

                    {/* <div className="courses-section">
                      <h4>Courses Offered</h4>
                      <div className="courses-grid">
                        {collegeInfo.courses.map((course, index) => (
                          <div 
                            key={index} 
                            className="course-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <BookOpen size={16} />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div> */}

                    <div className="contact-details">
                      <div className="contact-row">
                        <div className="contact-item">
                          <Phone size={20} />
                          <div>
                            <strong>Phone</strong>
                            <p>{collegeInfo.phone}</p>
                          </div>
                        </div>
                        <div className="contact-item">
                          <Mail size={20} />
                          <div>
                            <strong>Email</strong>
                            <p>{collegeInfo.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="social-section">
                      <h4>Connect With Us</h4>
                      <div className="social-links">
                        <a href="#" className="social-link linkedin">
                          <Linkedin size={20} />
                          <span>LinkedIn</span>
                        </a>
                        <a href="#" className="social-link facebook">
                          <Facebook size={20} />
                          <span>Facebook</span>
                        </a>
                        <a href="#" className="social-link youtube">
                          <Youtube size={20} />
                          <span>YouTube</span>
                        </a>
                        <a href="#" className="social-link twitter">
                          <MessageCircle size={20} />
                          <span>Twitter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'admissions' && (
              <div className="admission-section animate-tab">
                <div className="section-header">
                  <h2>Admission Queries</h2>
                  <p>Get in touch with our admissions team for any queries regarding courses, fees, and admission process.</p>
                </div>
                
                <div className="admission-content">
                  <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="form-header">
                        <h3>Send us a Message</h3>
                        <p>Fill out the form below and we'll get back to you soon</p>
                      </div>

                      {submitStatus === 'success' && (
                        <div className="form-message success">
                          <CheckCircle size={20} />
                          <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                        </div>
                      )}

                      <div className="form-row">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98431 33333"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Interested Course</label>
                          <select
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Course</option>
                            {collegeInfo.courses.map((course, index) => (
                              <option key={index} value={course}>{course}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your query..."
                          rows="4"
                        ></textarea>
                      </div>

                      <button type="submit" className="submit-btn" disabled={submitStatus === 'success'}>
                        <Send size={18} />
                        {submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                      </button>
                    </form>
                  </div>

                  <div className="admission-info">
                    <div className="info-card">
                      <h3>Admissions Office</h3>
                      <div className="info-item">
                        <Phone size={20} />
                        <div>
                          <strong>Phone</strong>
                          <p>+91 98431 33333</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <Mail size={20} />
                        <div>
                          <strong>Email</strong>
                          <p>admissions@hindusthan.net</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <Clock size={20} />
                        <div>
                          <strong>Office Hours</strong>
                          <p>Mon-Sat: 9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'location' && (
              <div className="location-section animate-tab">
                <div className="section-header">
                  <h2>Campus Location & Directions</h2>
                  <p>Find us easily with detailed location information and directions.</p>
                </div>

                <div className="location-content">
                  <div className="map-container">
                    <GoogleMap />
                    <div className="map-overlay">
                      <div className="map-info">
                        <h4>HICAS Campus</h4>
                        <p>Avinashi Road, Coimbatore</p>
                        <button 
                          className="map-btn"
                          onClick={() => window.open(`https://maps.google.com/?q=${collegeInfo.coordinates.lat},${collegeInfo.coordinates.lng}`, '_blank')}
                        >
                          <MapPin size={16} />
                          Open in Google Maps
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="location-details">
                    <div className="location-card">
                      <h3>Campus Address</h3>
                      <div className="address-detail">
                        <MapPin size={20} />
                        <p>{collegeInfo.address}</p>
                      </div>
                      
                      <div className="transport-info">
                        <h4>How to Reach</h4>
                        <div className="transport-methods">
                          <div className="transport-item">
                            <strong>By Bus:</strong>
                            <p>Take bus routes 12, 45, 67 to Udayampalayam stop</p>
                          </div>
                          <div className="transport-item">
                            <strong>By Train:</strong>
                            <p>Nearest railway station: Coimbatore Junction (15 km)</p>
                          </div>
                          <div className="transport-item">
                            <strong>By Air:</strong>
                            <p>Coimbatore International Airport (20 km)</p>
                          </div>
                        </div>
                      </div>

                      <div className="landmarks">
                        <h4>Nearby Landmarks</h4>
                        <ul>
                          <li>Nava India (Behind campus)</li>
                          <li>Avinashi Road Main</li>
                          <li>Udayampalayam Bus Stop</li>
                          <li>Government Hospital</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Contact;