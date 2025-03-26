import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import Navbar from "../../Components/Navbar/Navbar";
import "./BlogPage.css";

const BlogPage = () => {
  const [posts, setPosts] = useState([
    {
      id: "manage-security",
      title: "Ayurvedic Approaches to Managing Diabetes",
      excerpt:
        "Explore how Ayurveda can help manage diabetes through herbs, diet, and lifestyle adjustments.",
      image:
        "https://ayurveda.com.np/wp-content/uploads/2024/05/Ayurvedic-Approaches-to-Managing-Diabetes-300x200.jpeg",
      link: "/blog/manage-security",
      date: "May 26, 2024",
    },
    {
      id: "easy-home-security",
      title: "Simple and Easy Ayurveda Weight Loss with Panchakarma",
      excerpt:
        "Discover an easy-to-follow Ayurvedic weight loss plan using Panchakarma therapies.",
      image:
        "https://ayurveda.com.np/wp-content/uploads/2024/04/Simple-and-Easy-Ayurveda-Weight-Loss-with-Panchakarma-300x200.jpeg",
      link: "/blog/easy-home-security",
      date: "April 28, 2024",
    },
    {
      id: "reduce-security",
      title: "Best Ways to Reduce Stress with Ayurvedic Herbs",
      excerpt:
        "Learn about the best Ayurvedic herbs to effectively reduce stress and promote relaxation.",
      image:
        "https://ayurveda.com.np/wp-content/uploads/2024/04/Best-Ways-to-Reduce-Stress-with-Ayurvedic-Herbs-300x200.jpeg",
      link: "/blog/reduce-security",
      date: "April 15, 2024",
    },
    // Add more posts here
  ]);

  useEffect(() => {
    //  Sort posts by date (assuming you'll have a date field in real data)
    setPosts((prevPosts) =>
      [...prevPosts].sort(
        (a, b) => new Date(b.date) - new Date(a.date) // Sorts in descending order
      )
    );
  }, []);

  return (
    <div className="blog-page">
      <Navbar />
      <section className="blog-hero">
        <h1>Our Blog</h1>
        <p>Stay informed with the latest health and wellness tips.</p>
      </section>

      <section className="blog-content">
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-post">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-content">
                <h2 className="post-title">
                  <Link to={post.link}>{post.title}</Link>
                </h2>
                <p className="post-date">{post.date}</p>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link to={post.link} className="read-more-button">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
