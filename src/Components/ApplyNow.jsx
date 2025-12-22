import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  GraduationCap,
  Navigation,
  AlertCircle,
  CheckCircle,
  Menu,
  X,
  User,
  FileText,
  CreditCard,
  Upload,
  Calendar,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  RefreshCw,
} from 'lucide-react';
import "../Styles/ApplyNow.css";
import campusBackground from "../Assets/Subtract.png";
import Footer from './Footer';

const ApplyNow = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Which tab is active: 'register' or 'login'
  const [authTab, setAuthTab] = useState('register');

  // Register form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    institution: '',
    program: '',
    course: '',
    captcha: '',
  });

  // Login form data
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');      // register status
  const [loginStatus, setLoginStatus] = useState('idle');        // login status
  const [selectedProgram, setSelectedProgram] = useState('');
  const [captchaValue, setCaptchaValue] = useState('79c785');

  useEffect(() => {
    setIsVisible(true);
    generateNewCaptcha();
  }, []);

  // Function to generate random captcha
  const generateNewCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaValue(result);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Register submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // Validate captcha
    if (formData.captcha !== captchaValue) {
      alert('Captcha does not match. Please try again.');
      generateNewCaptcha();
      setFormData({ ...formData, captcha: '' });
      return;
    }

    setSubmitStatus('success');
    console.log('Application submitted:', formData);

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  // Login submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginStatus('success');
    console.log('Login attempt:', loginData);

    setTimeout(() => {
      setLoginStatus('idle');
    }, 2000);
  };

  const steps = [
    { id: 1, title: 'Register Yourself', icon: User, description: 'Create your account' },
    { id: 2, title: 'Verify Email', icon: Mail, description: 'Confirm your email' },
    { id: 3, title: 'Fill Application Form Online', icon: FileText, description: 'Complete your details' },
    { id: 4, title: 'Pay Registration Fee', icon: CreditCard, description: 'Secure payment' },
    { id: 5, title: 'Submit Application', icon: CheckCircle, description: 'Final submission' },
  ];

  const programs = [
    { id: 'arts', name: 'Bachelor of Arts', duration: '3 Years', seats: '120', fee: '₹45,000' },
    { id: 'science', name: 'Bachelor of Science', duration: '3 Years', seats: '150', fee: '₹55,000' },
    { id: 'commerce', name: 'Bachelor of Commerce', duration: '3 Years', seats: '100', fee: '₹40,000' },
    { id: 'bca', name: 'Bachelor of Computer Applications', duration: '3 Years', seats: '80', fee: '₹65,000' },
    { id: 'mca', name: 'Master of Computer Applications', duration: '2 Years', seats: '60', fee: '₹75,000' },
    { id: 'mba', name: 'Master of Business Administration', duration: '2 Years', seats: '50', fee: '₹85,000' },
  ];

  const features = [
    { icon: Globe, title: 'Online Application', description: 'Apply from anywhere, anytime with our secure online portal' },
    { icon: Shield, title: 'Secure Process', description: 'Your data is protected with advanced encryption technology' },
    { icon: Zap, title: 'Quick Processing', description: 'Get admission confirmation within 48 hours of submission' },
    { icon: TrendingUp, title: 'Career Growth', description: 'Join 5000+ successful alumni in leading companies' },
  ];

  const faqs = [
    { q: 'What documents are required for admission?', a: '10th & 12th mark sheets, Transfer certificate, Character certificate, and passport size photos.' },
    { q: 'Is the application fee refundable?', a: 'Application fee is non-refundable as per university guidelines.' },
    { q: 'When does the admission process start?', a: 'Admissions are open year-round with multiple intake sessions.' },
    { q: 'Can I change my course after admission?', a: 'Course changes are allowed within the first week of admission subject to seat availability.' },
  ];

  return (
    <div className="apply-now-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">
          {/* Hero Text */}
          <div className="hero-text">
            <h1 className="hero-title">Our Trustee</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a> &gt;{" "}
              <a href="/applyNow" style={{ textDecoration: "none", color: "#f4b400" }}>Apply Now</a>
            </div>
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
          {/* Application Form */}
          <div className={`application-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="application-container">
              <div className="form-section">
                <div className="form-header">
                  <h2>{authTab === 'register' ? 'Admission Application' : 'Admission Open'}</h2>
                  <p>
                    {authTab === 'register'
                      ? 'Fill out the details below to start your admission process'
                      : 'Login to continue your application or check your status'}
                  </p>
                </div>

                {/* Register success message only for Register tab */}
                {authTab === 'register' && submitStatus === 'success' && (
                  <div className="form-message success">
                    <CheckCircle size={20} />
                    <p>Application submitted successfully! Check your email for verification link.</p>
                  </div>
                )}

                {/* Login success / info message */}
                {authTab === 'login' && loginStatus === 'success' && (
                  <div className="form-message success">
                    <CheckCircle size={20} />
                    <p>Login successful! Redirecting to your dashboard...</p>
                  </div>
                )}

                <form
                  className={`application-form ${authTab === 'login' ? 'login-mode' : ''}`}
                  onSubmit={authTab === 'register' ? handleRegisterSubmit : handleLoginSubmit}
                >
                  {/* Tabs */}
                  <div className="form-tabs">
                    <button
                      type="button"
                      className={`tab-btn ${authTab === 'register' ? 'active' : ''}`}
                      onClick={() => setAuthTab('register')}
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      className={`tab-btn ${authTab === 'login' ? 'active' : ''}`}
                      onClick={() => setAuthTab('login')}
                    >
                      Login
                    </button>
                  </div>

                  {/* REGISTER FORM CONTENT */}
                  {authTab === 'register' && (
                    <>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Enter Name *</label>
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
                          <label>Enter Email Address *</label>
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

                      <div className="form-group phone-group">
                        <label>Phone Number *</label>
                        <div className="phone-input">
                          <select className="country-code">
                            <option value="+91">+91</option>
                          </select>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Select State *</label>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select State</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Select City *</label>
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select City</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Kochi">Kochi</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Select Institution *</label>
                          <select
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select Institution</option>
                            <option value="HICAS">HICAS - Hindusthan College of Arts and Science</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Select Program *</label>
                          <select
                            name="program"
                            value={formData.program}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select Program</option>
                            <option value="Bachelor of Arts">Bachelor of Arts</option>
                            <option value="Bachelor of Science">Bachelor of Science</option>
                            <option value="Bachelor of Commerce">Bachelor of Commerce</option>
                            <option value="Bachelor of Computer Applications">Bachelor of Computer Applications</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Select Course *</label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Course</option>
                          <option value="Computer Science">Computer Science</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="Physics">Physics</option>
                          <option value="Chemistry">Chemistry</option>
                          <option value="English Literature">English Literature</option>
                        </select>
                      </div>

                      <div className="captcha-group">
                        <label>Enter Captcha *</label>
                        <div className="captcha-container">
                          <div className="captcha-display">
                            <span className="captcha-text">{captchaValue}</span>
                            <button
                              type="button"
                              className="refresh-captcha"
                              onClick={generateNewCaptcha}
                              title="Refresh Captcha"
                            >
                              <RefreshCw size={16} />
                            </button>
                          </div>
                          <input
                            type="text"
                            name="captcha"
                            value={formData.captcha}
                            onChange={handleInputChange}
                            placeholder="Enter Captcha"
                            required
                          />
                        </div>
                      </div>

                      <div className="agreement-section">
                        <label className="checkbox-label">
                          <input type="checkbox" required />
                          <span className="checkmark"></span>
                          I agree to receive information by signing up on Hindusthan Educational and Charitable Trust *
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={submitStatus === 'success'}
                      >
                        {submitStatus === 'success' ? 'Application Submitted!' : 'Register'}
                      </button>

                      <button type="button" className="resend-btn">
                        RESEND VERIFICATION EMAIL
                      </button>
                    </>
                  )}

                  {/* LOGIN FORM CONTENT */}
                  {authTab === 'login' && (
  <div className="login-content">
    <div className="form-group">
      <label>Your Email *</label>
      <input
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleLoginInputChange}
        placeholder="Your Email *"
        required
      />
    </div>

    <div className="form-group">
      <label>Your Password *</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleLoginInputChange}
        placeholder="Your Password *"
        required
      />
    </div>

    <div className="login-remember">
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="remember"
          checked={loginData.remember}
          onChange={handleLoginInputChange}
        />
        <span className="checkmark"></span>
        Check to remember your login details
      </label>
    </div>

    <button
      type="submit"
      className="submit-btn login-submit-btn"
      disabled={loginStatus === 'success'}
    >
      LOGIN
    </button>

    <button
      type="button"
      className="forgot-password-btn"
      onClick={() => alert('Redirect to forgot password flow')}
    >
      FORGOT PASSWORD?
    </button>
  </div>
)}

                </form>
              </div>

              <div className="info-section">
                <div className="instructions-card">
                  <h3>Instructions</h3>
                  <ul>
                    <li>
                      The online application is for admission to programmes offered in{' '}
                      <strong>Hindusthan Educational and Charitable Trust</strong>.
                    </li>
                    <li><strong>Application Form Fee is Non-Refundable</strong>.</li>
                    <li>
                      Email ID submitted at the time of registration will be used for all correspondences
                      until enrolment is completed. <strong>Change in Email ID will NOT be permitted under any circumstances</strong>.
                    </li>
                  </ul>

                  <div className="query-section">
                    <h4>Hindusthan Educational and Charitable Trust Query Management System</h4>
                    <p>
                      Applicants are strongly advised to use Hindusthan Educational and Charitable Trust
                      Query Management System (Hindusthan Educational and Charitable Trust-QMS), rather
                      than emailing, to get a quick response.
                    </p>

                    <div className="steps-list">
                      <div className="step-item">1. Register and verify your email ID</div>
                      <div className="step-item">2. Click on [Any Queries? Ask US] in your dashboard</div>
                      <div className="step-item">3. Select query category and submit your query</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Steps */}
          <div className={`steps-section ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title">Steps to Follow</h2>
            <div className="steps-container">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className={`step-card ${activeStep >= step.id ? 'active' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="step-number">
                      <span>STEP {step.id}</span>
                    </div>
                    <div className="step-icon">
                      <Icon size={40} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Support */}
          <div className={`support-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="support-card">
              <div className="support-content">
                <h3>Need Help with Your Application?</h3>
                <p>Our admission support team is here to assist you throughout the process</p>
                <div className="support-contact">
                  <div className="contact-method">
                    <Phone size={20} />
                    <span>+91 98431 33333</span>
                  </div>
                  <div className="contact-method">
                    <Mail size={20} />
                    <span>admissions@hindusthan.net</span>
                  </div>
                </div>
              </div>
              <div className="support-hours">
                <Clock size={24} />
                <div>
                  <strong>Support Hours</strong>
                  <p>Mon-Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyNow;
