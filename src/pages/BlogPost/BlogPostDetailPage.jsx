import React from "react";
import { useParams } from "react-router-dom"; // To get the post ID from the URL
import Navbar from "../../Components/Navbar/Navbar";
import "./BlogPostDetailPage.css";

const BlogPostDetailPage = () => {
  const { postId } = useParams(); // Get the postId from the route parameters

  // Fake blog post data (you'd fetch this from an API or database)
  const blogPosts = [
    {
      id: "manage-security", // Use a string id to match the URL
      title: "Manage Security: Modern Solutions",
      content: `
        <p>Security technology is constantly evolving, offering more effective ways to protect your home and business.  Explore the latest advancements, including AI-powered surveillance, smart locks, and advanced alarm systems.</p>
        <p>Benefits include real-time threat detection, remote access control, and enhanced data privacy. These modern solutions integrate seamlessly with your existing infrastructure for maximum security.</p>
        <p>Contact us to learn how to upgrade your security with these cutting-edge technologies.</p>
      `,
      image:
        "https://ayurveda.com.np/wp-content/uploads/2024/05/Ayurvedic-Approaches-to-Managing-Diabetes-300x200.jpeg",
      date: "May 26, 2024",
      author: "Amrit Wellness Team",
    },
    {
      id: "easy-home-security",
      title: "Simple and Easy Home Security",
      content: `
        <p>Securing your home doesn't have to be complicated.  Discover easy-to-install wireless security cameras, motion sensors, and door/window alarms that require no professional installation.</p>
        <p>These DIY solutions offer peace of mind with instant mobile alerts, remote monitoring, and customizable settings. They are perfect for renters, homeowners, and small business owners.</p>
        <p>Check out our recommended home security starter kits for affordable and effective protection.</p>
      `,
      image:
        "https://ayurveda.com.np/wp-content/uploads/2024/04/Simple-and-Easy-Ayurveda-Weight-Loss-with-Panchakarma-300x200.jpeg",
      date: "April 28, 2024",
      author: "Amrit Wellness Team",
    },
    {
      id: "reduce-security",
      title: "Best Ways to Reduce Stress with Ayurvedic Herbs",
      content: `
        <p>Our product and services ensures you with all modern techniqes for your personal security. They include benefits such as real-time threat detection, remote access control, and enhanced data privacy.</p>
        <p>These DIY solutions offer peace of mind with instant mobile alerts, remote monitoring, and customizable settings. They are perfect for renters, homeowners, and small business owners.</p>
        <p>Contact us to learn how to upgrade your security with these cutting-edge technologies.</p>
      `,
      image:
        "https://ayurveda.com.np/wp-content/uploads/2024/04/Best-Ways-to-Reduce-Stress-with-Ayurvedic-Herbs-300x200.jpeg",
      date: "April 15, 2024",
      author: "Amrit Wellness Team",
    },
  ];

  // Find the blog post that matches the postId
  const post = blogPosts.find((post) => post.id === postId);

  // If the post is not found, display an error message
  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="blog-post-detail-container">
          <h2>Post Not Found</h2>
          <p>Sorry, the blog post you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <section className="blog-post-hero">
        <h1 className="blog-post-title">{post.title}</h1>
      </section>
      <div className="blog-post-image-container">
        <img src={post.image} alt={post.title} className="blog-post-image" />
      </div>
      <div className="blog-post-detail-container">
        <div className="blog-post-meta">
          <span className="blog-post-date">Date: {post.date}</span>
          <span className="blog-post-author">Author: {post.author}</span>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  );
};

export default BlogPostDetailPage;