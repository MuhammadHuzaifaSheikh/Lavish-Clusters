'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight, FaInstagram, FaYoutube, FaTiktok, FaStar, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import hero from './assets/hero.webp'
import p1 from './assets/p1.webp'
import p2 from './assets/p2.webp'
import p3 from './assets/p3.webp'
import p4 from './assets/p4.webp'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-purple-800">
          Lavish Clusters
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-lg font-semibold hover:text-purple-600 transition-colors duration-200">
            About
          </Link>
          <Link href="#products" className="text-lg font-semibold hover:text-purple-600 transition-colors duration-200">
            Products
          </Link>
          <Link href="#how-it-works" className="text-lg font-semibold hover:text-purple-600 transition-colors duration-200">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-lg font-semibold hover:text-purple-600 transition-colors duration-200">
            Testimonials
          </Link>
          <Link href="#blog" className="text-lg font-semibold hover:text-purple-600 transition-colors duration-200">
            Blog
          </Link>
          <Link href="#contact" className="text-lg font-semibold hover:text-purple-600 transition-colors duration-200">
            Contact
          </Link>
        </nav>
        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://instagram.com/lavishclusters" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors duration-200">
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com/lavishclusters" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors duration-200">
            <FaYoutube size={20} />
          </a>
          <a href="https://tiktok.com/@lavishclusters" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors duration-200">
            <FaTiktok size={20} />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="px-6 py-4 space-y-4">
            <Link href="#about" className="block text-lg font-semibold hover:text-purple-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#products" className="block text-lg font-semibold hover:text-purple-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link href="#how-it-works" className="block text-lg font-semibold hover:text-purple-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="#testimonials" className="block text-lg font-semibold hover:text-purple-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="#blog" className="block text-lg font-semibold hover:text-purple-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="#contact" className="block text-lg font-semibold hover:text-purple-600 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            {/* Mobile Social Icons */}
            <div className="flex space-x-4 mt-4 justify-center">
              <a href="https://instagram.com/lavishclusters" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com/lavishclusters" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors duration-200">
                <FaYoutube size={20} />
              </a>
              <a href="https://tiktok.com/@lavishclusters" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-purple-600 transition-colors duration-200">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  )
}

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-purple-900 text-white">
      <Image
        src={hero} // Online image URL
        alt="Lavish Clusters Eyelash Kits"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 mix-blend-overlay"
      />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Simplify Your Lash Game with Lavish Clusters
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8"
        >
          Premium eyelash kits for influencers, makeup artists, and professionals
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="#products" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105 duration-300">
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Lavish Clusters
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg">
              At Lavish Clusters, our mission is to simplify lash application while maintaining luxury. We believe that everyone deserves to feel confident and beautiful, which is why we've created high-quality, easy-to-use eyelash cluster kits.
            </p>
            <blockquote className="italic text-purple-800 text-xl">
              "I started Lavish Clusters to empower individuals to achieve professional-looking lashes at home. Our kits are designed with you in mind, making luxury accessible and effortless."
            </blockquote>
            <p className="font-semibold">- Ade Jones, Founder</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <FaStar className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">Quality</h3>
            </div>
            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <FaStar className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">Simplicity</h3>
            </div>
            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <FaStar className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">Luxury</h3>
            </div>
            {/* Feature 4 */}
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <FaStar className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">Confidence</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: 'Classic Elegance',
      description: 'Experience timeless beauty with our Classic Elegance lash kit.',
      price: '£29.99',
image:p1,
    },
    {
      id: 2,
      title: 'Voluminous Glam',
      description: 'Add volume and glamour with our Voluminous Glam lash kit.',
      price: '£34.99',
image:p2
    },
    {
      id: 3,
      title: 'Natural Beauty',
      description: 'Enhance your natural lashes with our Natural Beauty lash kit.',
      price: '£24.99',
image:p3
    },
    {
      id: 4,
      title: 'Dramatic Flair',
      description: 'Make a statement with our Dramatic Flair lash kit.',
      price: '£39.99',
image:p4
    },
  ]

  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Premium Eyelash Kits
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: product.id * 0.2 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 font-bold">{product.price}</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition transform hover:scale-105 duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      title: 'Prepare',
      description: 'Cleanse your lashes and apply lash primer for best results.',
    },
    {
      step: 2,
      title: 'Apply',
      description: 'Use our applicator to place clusters along your lash line with ease.',
    },
    {
      step: 3,
      title: 'Enjoy',
      description: 'Blend with your natural lashes and flaunt your stunning new look.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <motion.div
              key={item.step}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.step * 0.2 }}
            >
              <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                <span className="text-3xl font-bold text-purple-600">{item.step}</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Makeup Artist',
image:p1,
      comment: 'Lavish Clusters has revolutionized my lash game! The application is so easy, and the results are stunning. My clients love the look!',
    },
    {
      id: 2,
      name: 'Emily Smith',
      role: 'Beauty Influencer',
image:p1,
      comment: 'The quality of these lashes is unmatched. They last all day without any irritation. Highly recommend Lavish Clusters!',
    },
    {
      id: 3,
      name: 'Sophia Lee',
      role: 'Salon Owner',
image:p1,
      comment: 'Our clients are thrilled with the results. Lavish Clusters offers a perfect balance between luxury and ease of use.',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-purple-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={`Customer ${testimonial.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-purple-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-4">"{testimonial.comment}"</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const GallerySection = () => {
  const galleryImages = [p1,p2,p3,p1,p2,p3,p4,p1]
  

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lavish Looks Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Tips for Perfect Lash Application',
      category: 'Tutorial',
image:p1,
      link: '#',
    },
    {
      id: 2,
      title: 'The History of False Eyelashes',
      category: 'Beauty History',
image:p1,
      link: '#',
    },
    {
      id: 3,
      title: 'Lash Trends for 2023',
      category: 'Trends',
image:p1,
      link: '#',
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Latest from Our Blog
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.2 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-purple-600 font-semibold text-sm mb-2 block">{post.category}</span>
                <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                <Link href={post.link} className="text-purple-600 hover:text-purple-800 inline-flex items-center">
                  Read More <FaChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-extrabold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-purple-900 font-bold py-2 px-6 rounded hover:bg-purple-100 transition transform hover:scale-105 duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-extrabold mb-6">Connect With Us</h2>
            <div className="flex space-x-6 mb-8">
              <a
                href="https://instagram.com/lavishclusters"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-900 p-4 rounded-full hover:bg-purple-100 transition transform hover:scale-110 duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com/lavishclusters"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-900 p-4 rounded-full hover:bg-purple-100 transition transform hover:scale-110 duration-200"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://tiktok.com/@lavishclusters"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-900 p-4 rounded-full hover:bg-purple-100 transition transform hover:scale-110 duration-200"
              >
                <FaTiktok size={24} />
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                className="flex-grow px-4 py-2 rounded-l bg-purple-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="your@email.com"
              />
              <button
                type="submit"
                className="bg-white text-purple-900 font-bold py-2 px-6 rounded-r hover:bg-purple-100 transition transform hover:scale-105 duration-200"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} Lavish Clusters. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link href="#" className="text-sm hover:underline transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline transition-colors duration-200">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline transition-colors duration-200">
            Shipping & Returns
          </Link>
        </div>
      </div>
    </footer>
  )
}

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="mt-16">
        {/* Hero Section */}
        <HeroSection />
        {/* About Us */}
        <AboutSection />
        {/* Products Showcase */}
        <ProductsSection />
        {/* How It Works */}
        <HowItWorksSection />
        {/* Testimonials */}
        <TestimonialsSection />
        {/* Gallery */}
        <GallerySection />
        {/* Blog Highlights */}
        <BlogSection />
        {/* Contact & Social Media */}
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Page
