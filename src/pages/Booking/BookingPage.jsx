import React, { useState } from 'react';
import './BookingPage.css';
import Navbar from '../../Components/Navbar/Navbar'; // Assuming you have a Navbar component
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/en-gb'; // Import the desired locale
import dayjs from 'dayjs';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const BookingPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      dateFrom: null,
      dateTo: null,
      time: '',
      package: '',
      panchakarmaPackage: '',
      wellnessPackage: '',
      otherPackage: '',
      abhyangaPackage: '',
      snehanaPackage: '',
      svedanaPackage: '',
      yogaPackage: '',
      consultationPackage: '',
      message: '',
    });
  
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: '',
      severity: 'success',
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleDateChange = (date, name) => {
      setFormData({
        ...formData,
        [name]: date,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSnackbar({
        open: true,
        message: 'Your booking request has been submitted!',
        severity: 'success',
      });
      setFormData({
      name: '',
      email: '',
      phone: '',
      dateFrom: null,
      dateTo: null,
      time: '',
      package: '',
      panchakarmaPackage: '',
      wellnessPackage: '',
      otherPackage: '',
      abhyangaPackage: '',
      snehanaPackage: '',
      svedanaPackage: '',
      yogaPackage: '',
      consultationPackage: '',
      message: '',
      });
    };
  
    const handleCloseSnackbar = () => {
      setSnackbar({ ...snackbar, open: false });
    };
  
    const packageOptions = [
      'Panchakarma Packages',
      'Wellness Packages',
      'Other Packages',
      'Abhyanga',
      'Snehana',
      'Svedana',
      'Yoga and Meditation',
      'Ayurveda Consultation',
    ];
    const timeOptions = [
        'Undecided', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
        '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
      ];
    const panchakarmaOptions = [
        '7 DAYS PACKAGE', '10 DAYS PACKAGE', '14 DAYS PACKAGE', '21 DAYS PACKAGE', '28 DAYS PACKAGE',
      ];
    const wellnessOptions = [
        '1 HOUR', '3 HOURS', '1 DAY', '3 DAYS', '5 DAYS', '7 DAYS', '14 DAYS',
    ];
    const otherOptions = [
      'Anti Aging',
      'Weight Management',
      'Stress Management',
      'Immuno Boosting',
      'Detox',
      'Chakra Regulation',
      'Post Covid Care Package',
      'Mental Health Management',
      'Yogic Package',
      'Saundarya (Beauty Care) Package',
      'Custom Package',
    ];

    const abhyangaOptions = [
        'Whole Body Relaxation (75 Minutes)',
        'Whole Body Cleansing (90 Minutes)',
        'Whole Body Synchronized Cleansing  (60 Minutes)',
        'Whole Body Ubatan  (50 Minutes)',
        'Whole Body Relaxation Abhyanga For Children Up To 11 Years  (60 Minutes)',
        'Relaxation Spinal  (30 Minutes)',
        'Relaxation Head  (30 Minutes)',
        'Relaxation Foot  (30 Minutes)',
        'Facial Beauty  (60 Minutes)',
        'Relaxation Facial  (30 Minutes)',
      ];
    const snehanaOptions = [
        'Siro Dhara (30 Minutes)',
        'Picu (30 Minutes)',
        'Cakra Basti (15 Minutes)',
        'Bahya Basti (15 Minutes)',
        'Siro Basti (20 Minutes)',
        'Tail Dhara (60 Minutes)',
      ];
    const svedanaOptions = [
        'Avagahana Sveda (Herbal Tub Bath) (30 Minutes)',
        'Sarvanga Sveda (Herbal Steam Bath) (30 Minutes)',
        'Patra Pinda Sveda (15 Minutes)',
        'Nadi Sveda (20 Minutes)',
        'Salvana Pinda Sveda (60 Minutes)',
        'Baluka Pinda Sveda (15 Minutes)',
        'Kati Snan (20 Minutes)',
        'Pada Snan (30 Minutes)',
        'Pinda Sveda (60 Minutes)',
      ];
      
    const yogaOptions = [
        'Foundation Of Yoga (1, 2, 3) (60 Minutes)',
        'Pranayama And Neti (30 Minutes)',
        'Dhyana (30 Minutes)',
      ];
      
    const consultationOptions = [
        'Ayurveda Consultation (A) (15 Minutes)',
        'Ayurveda Consultation (B) (45 Minutes)',
        'Ayurveda Consultation (C) (90 Minutes)',
      ];
      
    return (
      <>
        <Navbar />
        <div className="booking-page-container">
            <Grid container spacing={3} className="booking-container booking-page-grid-container"> {/* Added booking-page-grid-container */}
              <Grid item xs={12} md={6} className="booking-image-section">
                <div className="image-carousel-container">
                  <div className="image-carousel">
                  <div
                    className="image-slide"
                    style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/accomodation5-px1peruj6ue63j9i4x4kkbovxdvoti83xdix85udgg.jpg)' }}
                  ></div>
                  <div
                    className="image-slide"
                    style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/consultation-pw56ew5jq0663v15vb4f8pps2ouk6javp51rk4scyo.jpg)' }}
                  ></div>
                  <div
                    className="image-slide"
                    style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/Panchakarma1-pw5dsxf40ycq2qlnesy5g2xcpnlfqkfylw42cgc1wg.jpg)' }}
                  ></div>
                  <div
                    className="image-slide"
                     style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/Pinda-SWEDA-pw59etycj3xjbu8tkys4kh5btkty39t8jdz1i0qug0.jpg)' }}
                    ></div>
                  <div
                    className="image-slide"
                    style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/Siro-Dhara-px1phld3oy94xf61o50a1m2o2zzbwtf4bbzd21nusg.jpg)' }}
                    ></div>
                 <div
                    className="image-slide"
                    style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/jared-rice-NTyBbu66_SI-unsplash-768x893-1-pwmrvbj5hzpo1cbv15bwglh5ruqa60apckpb46fpgg.jpg)' }}
                  ></div>
                 <div
                    className="image-slide"
                    style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/Group-Recreational-Program--px1peeosj5w5kzsm9rfslf0flzojtqrv7ke4iadvvk.jpg)' }}
                  ></div>
                  <div
                    className="image-slide"
                    style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/training-px1pehib3o00jtoitanoawate5angu327ycky49pcw.jpg)' }}
                    ></div>
                 <div
                     className="image-slide"
                    style={{ backgroundImage: 'url(https://ayurveda.com.np/wp-content/uploads/elementor/thumbs/Head-pw55pke3kpi1a3tjrd0b23snuxois4r8vs8s1qc8m8.jpg)' }}
                  ></div>
                  
                  </div>
                  <Box className="carousel-overlay"  sx={{
                       position: 'absolute',
                    bottom: 0,
                     left: 0,
                    width: '100%',
                   backgroundColor: 'rgba(14, 78, 100, 0.6)',
                    padding: '20px',
                    color: '#fff',
                    }}>
                        <Typography variant="h5" component="h2" className="overlay-title" >Book Now!</Typography>
                        <Typography variant="body1" className="overlay-text">Schedule an appointment now for your interested package with us!</Typography>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="booking-form-section">
                  <Typography variant="h4" component="h2" className="form-title">
                     Initial Booking Form
                    </Typography>
                    <form onSubmit={handleSubmit} className="booking-form">
                    <TextField
                         fullWidth
                         label="Name"
                         name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        margin="normal"
                        className="form-input"
                         InputProps={{
                            startAdornment: <PersonIcon sx={{marginRight: 1}} />,
                             }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        margin="normal"
                         className="form-input"
                          InputProps={{
                            startAdornment: <EmailIcon sx={{marginRight: 1}} />,
                           }}
                    />
                    <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        margin="normal"
                       className="form-input"
                       InputProps={{
                        startAdornment: <PhoneIcon sx={{marginRight: 1}} />,
                      }}
                    />
                <LocalizationProvider dateAdapter={AdapterDayjs}  locale="en-gb">
                        <DatePicker
                         label="Desired Date From"
                         value={formData.dateFrom}
                          onChange={(date) => handleDateChange(date, 'dateFrom')}
                         renderInput={(props) => (
                            <TextField
                            {...props}
                             fullWidth
                            margin="normal"
                             required
                            className="form-input"
                              InputProps={{
                                startAdornment: <CalendarMonthIcon sx={{marginRight: 1}} />,
                             }}
                            />
                                    )}
                            />
                        <DatePicker
                        label="Desired Date To"
                       value={formData.dateTo}
                        onChange={(date) => handleDateChange(date, 'dateTo')}
                        renderInput={(props) => (
                             <TextField
                            {...props}
                            fullWidth
                            margin="normal"
                            required
                             className="form-input"
                             InputProps={{
                                startAdornment: <CalendarMonthIcon sx={{marginRight: 1}} />,
                              }}
                                    />
                                        )}
                                    />
                  </LocalizationProvider>

                  <FormControl fullWidth margin="normal" required className="form-input">
                         <InputLabel id="time-select-label">Desired Time</InputLabel>
                           <Select
                              labelId="time-select-label"
                             name="time"
                              value={formData.time}
                            onChange={handleChange}
                            label="Desired Time"
                                startAdornment={<AccessTimeIcon sx={{ marginRight: 1 }} />}
                            >
                             {timeOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                               ))}
                        </Select>
                    </FormControl>
                  
                  <FormControl fullWidth margin="normal" required className="form-input">
                        <InputLabel id="package-select-label">Package and Service</InputLabel>
                        <Select
                            labelId="package-select-label"
                           name="package"
                         value={formData.package}
                          onChange={handleChange}
                            label="Package and Service"
                            startAdornment={<LocalOfferIcon sx={{ marginRight: 1 }} />}
                                >
                                {packageOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                 </MenuItem>
                             ))}
                             </Select>
                     </FormControl>
    
                 {formData.package === 'Panchakarma Packages' && (
                        <FormControl fullWidth margin="normal" required className="form-input">
                          <InputLabel id="panchakarma-select-label">Panchakarma Packages</InputLabel>
                           <Select
                                 labelId="panchakarma-select-label"
                                   name="panchakarmaPackage"
                                   value={formData.panchakarmaPackage}
                                    onChange={handleChange}
                                    label="Panchakarma Packages"
                                  >
                                {panchakarmaOptions.map((option) => (
                                     <MenuItem key={option} value={option}>
                                           {option}
                                       </MenuItem>
                                    ))}
                             </Select>
                          </FormControl>
                   )}
                   {formData.package === 'Wellness Packages' && (
                        <FormControl fullWidth margin="normal" required className="form-input">
                             <InputLabel id="wellness-select-label">Wellness Packages</InputLabel>
                            <Select
                                 labelId="wellness-select-label"
                                  name="wellnessPackage"
                                 value={formData.wellnessPackage}
                                  onChange={handleChange}
                                   label="Wellness Packages"
                             >
                            {wellnessOptions.map((option) => (
                                   <MenuItem key={option} value={option}>
                                          {option}
                                    </MenuItem>
                                ))}
                             </Select>
                           </FormControl>
                  )}
                  {formData.package === 'Other Packages' && (
                       <FormControl fullWidth margin="normal" required className="form-input">
                            <InputLabel id="other-select-label">Other Packages</InputLabel>
                            <Select
                                 labelId="other-select-label"
                                  name="otherPackage"
                                 value={formData.otherPackage}
                                 onChange={handleChange}
                                   label="Other Packages"
                             >
                             {otherOptions.map((option) => (
                                  <MenuItem key={option} value={option}>
                                     {option}
                                </MenuItem>
                            ))}
                           </Select>
                    </FormControl>
                    )}
              {formData.package === 'Abhyanga' && (
                        <FormControl fullWidth margin="normal" required className="form-input">
                           <InputLabel id="abhyanga-select-label">Abhyanga</InputLabel>
                           <Select
                                 labelId="abhyanga-select-label"
                                  name="abhyangaPackage"
                                 value={formData.abhyangaPackage}
                                   onChange={handleChange}
                                   label="Abhyanga"
                            >
                           {abhyangaOptions.map((option) => (
                                   <MenuItem key={option} value={option}>
                                       {option}
                                 </MenuItem>
                              ))}
                             </Select>
                         </FormControl>
                        )}
                    {formData.package === 'Snehana' && (
                           <FormControl fullWidth margin="normal" required className="form-input">
                           <InputLabel id="snehana-select-label">Snehana</InputLabel>
                            <Select
                                labelId="snehana-select-label"
                                 name="snehanaPackage"
                                 value={formData.snehanaPackage}
                                onChange={handleChange}
                                  label="Snehana"
                             >
                           {snehanaOptions.map((option) => (
                                  <MenuItem key={option} value={option}>
                                    {option}
                                    </MenuItem>
                               ))}
                               </Select>
                              </FormControl>
                        )}
                     {formData.package === 'Svedana' && (
                        <FormControl fullWidth margin="normal" required className="form-input">
                             <InputLabel id="svedana-select-label">Svedana</InputLabel>
                            <Select
                                 labelId="svedana-select-label"
                                   name="svedanaPackage"
                                  value={formData.svedanaPackage}
                                    onChange={handleChange}
                                  label="Svedana"
                            >
                          {svedanaOptions.map((option) => (
                                 <MenuItem key={option} value={option}>
                                       {option}
                                    </MenuItem>
                                 ))}
                               </Select>
                           </FormControl>
                       )}
                    {formData.package === 'Yoga and Meditation' && (
                           <FormControl fullWidth margin="normal" required className="form-input">
                                <InputLabel id="yoga-select-label">Yoga and Meditation</InputLabel>
                                <Select
                                labelId="yoga-select-label"
                                 name="yogaPackage"
                                value={formData.yogaPackage}
                                   onChange={handleChange}
                                label="Yoga and Meditation"
                            >
                            {yogaOptions.map((option) => (
                                   <MenuItem key={option} value={option}>
                                         {option}
                                    </MenuItem>
                                  ))}
                             </Select>
                           </FormControl>
                        )}
                    {formData.package === 'Ayurveda Consultation' && (
                          <FormControl fullWidth margin="normal" required className="form-input">
                             <InputLabel id="consultation-select-label">Ayurveda Consultation</InputLabel>
                                <Select
                                   labelId="consultation-select-label"
                                    name="consultationPackage"
                                  value={formData.consultationPackage}
                                     onChange={handleChange}
                                   label="Ayurveda Consultation"
                                 >
                                 {consultationOptions.map((option) => (
                                     <MenuItem key={option} value={option}>
                                           {option}
                                      </MenuItem>
                                     ))}
                              </Select>
                              </FormControl>
                     )}
                <TextField
                     fullWidth
                    label="Special Requirements/Requests"
                    name="message"
                    value={formData.message}
                   onChange={handleChange}
                     margin="normal"
                     multiline
                     rows={4}
                     className="form-input"
                   />
                    <Button
                        type="submit"
                        variant="contained"
                        className="submit-button"
                    >
                   Submit
                  </Button>
                    </form>
                </Grid>
              </Grid>
    
          <Snackbar
              open={snackbar.open}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
          >
            <Alert
                  onClose={handleCloseSnackbar}
                  severity={snackbar.severity}
                >
                   {snackbar.message}
               </Alert>
          </Snackbar>
        </div>
      </>
    );
  };
  
  export default BookingPage;