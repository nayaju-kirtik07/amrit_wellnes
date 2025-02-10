import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import CustomSnackbar from "../../Components/CustomSnackbar/CustomSnackbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const services = [
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

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change service every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [services.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service
    ) {
      setSnackbar({
        open: true,
        message: "Please fill out all fields!",
        severity: "error",
      });
      return;
    }
    setSnackbar({
      open: true,
      message: "Booking successful! We will contact you shortly.",
      severity: "success",
    });
    setTimeout(() => navigate("/"), 2000);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const currentService = services[currentServiceIndex];

  return (
    <>
      <Navbar />
      <div className="booking-container">
        {/* Hero Section */}
        <section className="book-hero-section">
          <div className="hero">
            <h1>Your Journey to Wellness Starts Here</h1>
            <p>
              At Amrit Wellness, we believe in holistic healing and
              personalized care. Our expert practitioners are dedicated to
              guiding you on a path to optimal health and well-being. Discover
              the transformative power of ancient traditions combined with
              modern techniques.
            </p>
          </div>
        </section>

        <div className="booking-form-container">
          <div className="form-column">
            {/* Service Slideshow */}
            <div className="service-slideshow">
              <h3>Our Services</h3>
              <img
                className="service-image"
                src={currentService.image}
                alt={currentService.alt}
              />
              <h4>{currentService.title}</h4>
              <p>{currentService.description}</p>
            </div>
          </div>

          <div className="form-column">
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Select Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Select Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  className="date-picker"
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Select Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Book Now
              </button>
            </form>
          </div>
        </div>
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

export default BookingPage;