import { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaPhone, FaTree } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Professional Tree Services',
      description: 'Expert tree felling and maintenance in South Africa'
    },
    {
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80',
      title: 'Tree Felling & Pruning',
      description: 'Safe and efficient tree removal services'
    },
    {
      image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Landscaping Excellence',
      description: 'Transform your outdoor space with our expert team'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_, next) => setCurrentSlide(next)
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-gradient z-20" />
      
      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -100,
              rotate: 0,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{
              y: window.innerHeight + 100,
              rotate: 360,
              x: `calc(${Math.random() * 100}vw)`
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaTree size={30} />
          </motion.div>
        ))}
      </div>

      {/* Carousel */}
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms]"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: currentSlide === index ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                y: currentSlide === index ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className="relative z-40 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl">
                {slide.description}
              </p>
=======
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;