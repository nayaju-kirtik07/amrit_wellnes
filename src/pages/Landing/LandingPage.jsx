import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import CustomSnackbar from "../../Components/CustomSnackbar/CustomSnackbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LandingPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const introSectionsData = [
    {
      id: 1,
      title: "Dinacharya (A Day) at Amrit Wellness",
      description:
        "Dinacharya is a way to stay healthy by doing good things every day. At Ayurveda Health Home, you can learn about Dinacharya from our experts. They will help you to do things like yoga, eat well, and take care of yourself. This will help you feel better and live a healthier life.",
      image:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/290/2023/09/03065952/1820-small.jpg",
      alt: "Dinacharya",
    },
    {
      id: 2,
      title: "Ayurvedic Consultation",
      description:
        "Get personalized health advice from our experienced Ayurvedic doctors. They will assess your doshas and recommend a suitable diet, lifestyle, and herbal remedies to promote balance and well-being.",
      image:
        "https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzc2FnZSUyMHNwYXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Consultation",
    },
    {
      id: 3,
      title: "Panchakarma Therapy",
      description:
        "Experience the rejuvenating effects of Panchakarma, a detoxification therapy in Ayurveda. It helps to eliminate toxins from the body, improve digestion, and boost your immunity.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0wXOMNzDO6tRBUlMP3q7EOY160delkiPU-Wo8RRD_Hdj0-STLs1OIZ8z6wypvyGNZO0&usqp=CAU",
      alt: "Panchakarma",
    },
  ];

  const [currentIntroSlide, setCurrentIntroSlide] = useState(0);

  const nextIntroSlide = () => {
    setCurrentIntroSlide((prev) =>
      prev === introSectionsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevIntroSlide = () => {
    setCurrentIntroSlide((prev) =>
      prev === 0 ? introSectionsData.length - 1 : prev - 1
    );
  };

  const blogSection = {
    title: "Latest Blogs",
    description:
      "Stay up-to-date with our latest insights on security and technology.",
    posts: [
      {
        id: 1,
        title: "Manage Security: Modern Solutions",
        excerpt:
          "Explore the latest in security technology that helps you protect your home or business effectively.",
        image:
          "https://ayurveda.com.np/wp-content/uploads/2024/05/Ayurvedic-Approaches-to-Managing-Diabetes-300x200.jpeg",
        link: "/blog/manage-security", // Changed to internal link
      },
      {
        id: 2,
        title: "Simple and Easy Home Security",
        excerpt:
          "Discover how easy it is to keep an eye on your premises with simple setups and our high-tech camera.",
        image:
          "https://ayurveda.com.np/wp-content/uploads/2024/04/Simple-and-Easy-Ayurveda-Weight-Loss-with-Panchakarma-300x200.jpeg",
        link: "/blog/easy-home-security", // Changed to internal link
      },
      {
        id: 3,
        title: "Best Ways to Reduce Security",
        excerpt:
          "Explore modern techniqes to use our product and services for your personal security.",
        image:
          "https://ayurveda.com.np/wp-content/uploads/2024/04/Best-Ways-to-Reduce-Stress-with-Ayurvedic-Herbs-300x200.jpeg",
        link: "/blog/reduce-security", // Changed to internal link
      },
    ],
    buttonText: "Read all blogs",
  };

  const testimonials = [
    {
      content:
        "One of the finest services providing company. Really liked their service.",
      author: "Anupam Vidya Sadan",
      role: "Principal",
    },
    {
      content:
        "Their quality products are amazing. They are so friendly and the service is quick!",
      author: "ROBAM Nepal",
      role: "Director",
    },
    {
      content: "The products were way more better than expected. Liked it!",
      author: "Step Up Kitchen",
      role: "Founder",
    },
    {
      content:
        "Would really like to give 5 stars for the professional installation and amazing quality.",
      author: "Synergy Enterprises",
      role: "CEO",
    },
    {
      content:
        "Their focus in every detailed installation in every point makes this quality special. Highly recommended!",
      author: "Club Faranheit",
      role: "Managing Director",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      const maxSlides = testimonials.length - slidesToShow;
      setCurrentSlide((prev) => (prev + 1 > maxSlides ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      setCurrentSlide((prev) =>
        prev - 1 < 0 ? testimonials.length - slidesToShow : prev - 1
      );
    }
  };

  useEffect(() => {
    if (location.state?.showLoginSuccess) {
      setSnackbar({
        open: true,
        message: `Welcome back, ${location.state.username}! 👋`,
        severity: "success",
      });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Navbar />
      <div className="landing-container">
      <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="hero-fireworks.mp4" type="video/mp4" />  {/* Replace with your video path */}
        Your browser does not support the video tag.
      </video>

      {/* <div className="hero-content">
        <h1>Welcome to Amrit Wellness!</h1>
        <button
          className="inquiry-button"
          onClick={() => navigate("/contact")}
        >
          INQUIRY NOW
        </button>
      </div> */}
    </section>

        <section className="intro-section">
          <button
            className="slider-control prev outside"
            onClick={prevIntroSlide}
          >
            <ArrowBackIosIcon />
          </button>
          <div className="intro-slider-container">
            <div className="intro-card">
              <div className="intro-image">
                <img
                  src={introSectionsData[currentIntroSlide].image}
                  alt={introSectionsData[currentIntroSlide].alt}
                />
              </div>
              <div className="intro-content">
                <h3>{introSectionsData[currentIntroSlide].title}</h3>
                <p>{introSectionsData[currentIntroSlide].description}</p>
                <button
                  className="explore-button"
                  onClick={() => navigate("/products")}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
          <button
            className="slider-control next outside"
            onClick={nextIntroSlide}
          >
            <ArrowForwardIosIcon />
          </button>
        </section>

        <section className="blog-section curved-bottom-section">
          <div className="eael-dual-header-content-align-center">
            <div className="eael-dual-header">
              <h2 className="title">
                <span className="lead solid-color">{blogSection.title}</span>
              </h2>
              <div className="eael-dch-separator-wrap">
                <span className="separator-one"></span>
                <span className="separator-two"></span>
              </div>
              <span className="subtext">
                <p>{blogSection.description}</p>
              </span>
            </div>
          </div>
          <div className="eael-post-grid-container">
            <div
              className="eael-post-grid eael-post-appender eael-post-grid-style-three"
              data-layout-mode="masonry"
            >
              {blogSection.posts.map((post) => (
                <article
                  key={post.id}
                  className="eael-grid-post eael-post-grid-column"
                >
                  <div className="eael-grid-post-holder">
                    <div className="eael-grid-post-holder-inner">
                      <div className="eael-entry-media">
                        <div className="eael-entry-overlay zoom-in">
                          <i
                            className="hm hm-arrow-right1"
                            aria-hidden="true"
                          ></i>
                          <Link to={post.link}></Link>
                        </div>
                        <div className="eael-entry-thumbnail ">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="300"
                            height="200"
                            src={post.image}
                            alt={post.title}
                            className="attachment-medium size-medium lazyload ewww_webp_lazy_load"
                            data-eio-rwidth="300"
                            data-eio-rheight="200"
                          />
                        </div>
                      </div>
                      <div className="eael-entry-wrapper">
                        <header className="eael-entry-header">
                          <h2 className="eael-entry-title">
                            <Link
                              className="eael-grid-post-link"
                              to={post.link}
                              title={post.title}
                            >
                              {post.title}
                            </Link>
                          </h2>
                        </header>
                        <div className="eael-entry-content">
                          <div className="eael-grid-post-excerpt">
                            <p>{post.excerpt}</p>
                            <Link
                              to={post.link}
                              className="eael-post-elements-readmore-btn"
                            >
                              Read Post
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="eael-load-more-button-wrap eael-force-hide">
            <Link
              className="ha-creative-btn ha-stl--symbolab ha-eft--back-in-right"
              to="/blog"
            >
              {blogSection.buttonText}
              <i aria-hidden="true" className="hm hm-arrow-right1"></i>
            </Link>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-container">
            <button className="slider-control prev" onClick={prevSlide}>
              <ArrowBackIosIcon />
            </button>
            <div className="testimonials-slider" ref={sliderRef}>
              {testimonials
                .slice(currentSlide, currentSlide + slidesToShow)
                .map((testimonial, index) => (
                  <div
                    key={currentSlide + index}
                    className="testimonial-card"
                    style={{
                      animation: "slideIn 0.8s ease-out forwards",
                    }}
                  >
                    <div className="testimonial-content">
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="testimonial-author">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                ))}
            </div>
            <button className="slider-control next" onClick={nextSlide}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </section>

        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-info">
                <h3>Amrit Wellness</h3>
                <p>Health is Wealth!</p>
                <div className="social-links">
                  <a href="https://www.facebook.com" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.instagram.com" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.twitter.com" aria-label="Twitter">
                    <TwitterIcon />
                  </a>
                  <a href="https://www.linkedin.com" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>

              <div className="footer-links">
                <div className="link-group">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>

                <div className="link-group">
                  <h4>Visit Us</h4>
                  <ul>
                    <li>
                      <LocationOnIcon className="footer-icon" /> Lazimpat,
                      Kathmandu
                    </li>
                    <li>Near Big Mart</li>
                    <li>
                      <PhoneIcon className="footer-icon" /> +977-9802260017
                    </li>
                    <li>
                      <EmailIcon className="footer-icon" /> info@drishtisurv.com
                    </li>
                  </ul>
                </div>

                <div className="link-group">
                  <h4>Opening Hours</h4>
                  <ul>
                    <li>
                      <AccessTimeIcon className="footer-icon" /> Monday - Friday
                    </li>
                    <li>10:00 AM - 6:00 PM</li>
                    <li>
                      <AccessTimeIcon className="footer-icon" /> Saturday -
                      Sunday
                    </li>
                    <li>12:00 PM - 5:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="newsletter-section">
              <h4>Subscribe to Our Newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2025 Amrit Wellness. All rights reserved.</p>
              <div className="footer-bottom-links">
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </>
  );
};

export default LandingPage;
