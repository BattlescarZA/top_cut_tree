import { motion } from 'framer-motion';
import { FaStar, FaGoogle, FaQuoteLeft, FaCheck } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      author: 'David van der Merwe',
      rating: 5,
      text: 'Top Cut did an amazing job removing a massive old tree from our property. Their team was professional, efficient, and took all safety precautions. Highly recommend their services!',
      date: '2 weeks ago',
      verified: true
    },
    {
      author: 'Sarah Naidoo',
      rating: 5,
      text: 'We\'ve been using Top Cut for all our tree maintenance needs for the past 3 years. They are always reliable, professional, and do excellent work. The team is knowledgeable and friendly.',
      date: '1 month ago',
      verified: true
    },
    {
      author: 'Johan Pretorius',
      rating: 5,
      text: 'Very impressed with their palm tree cleaning service. They were punctual, professional, and left our property spotless. Fair pricing and great communication throughout.',
      date: '2 months ago',
      verified: true
    },
    {
      author: 'Michelle Thompson',
      rating: 5,
      text: 'Outstanding service! They handled a complex tree removal near power lines with utmost precision and care. The team was well-equipped and highly skilled.',
      date: '2 months ago',
      verified: true
    },
    {
      author: 'Peter Smith',
      rating: 5,
      text: 'Best tree service in the area! They did an excellent job pruning our fruit trees. Very knowledgeable about proper tree care and maintenance.',
      date: '3 months ago',
      verified: true
    },
    {
      author: 'Lisa van Wyk',
      rating: 5,
      text: 'Fantastic experience with Top Cut. They removed several stumps from our garden and did a great job cleaning up afterward. Very reasonable prices too!',
      date: '3 months ago',
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`}
      />
    ));
  };

  const stats = [
    { label: 'Average Rating', value: '4.9' },
    { label: 'Total Reviews', value: '50+' },
    { label: 'Years Active', value: '15+' }
  ];

  return (
    <div className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What Our <span className="text-primary">Clients</span> Say
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Don't just take our word for it - hear what our satisfied customers have to say about our tree services
        </p>

        {/* Google Reviews Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-24 h-24 mx-auto mb-3 flex items-center justify-center shadow-lg">
                <div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                </div>
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <a
          href="https://g.page/r/your-google-review-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center btn-primary gap-2 text-lg px-8 py-4 mb-16"
        >
          <FaGoogle className="text-xl" />
          Leave a Review on Google
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group"
          >
            <FaQuoteLeft className="text-primary/10 text-4xl absolute top-4 left-4" />
            <div className="flex items-center mb-4">
              <div className="flex gap-1">
                {renderStars(review.rating)}
              </div>
              <span className="ml-2 text-gray-600">
                {review.rating}.0
              </span>
            </div>
            <p className="text-gray-700 mb-6 relative z-10">{review.text}</p>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-800 flex items-center gap-2">
                  {review.author}
                  {review.verified && (
                    <span className="text-primary text-sm flex items-center">
                      <FaCheck className="w-3 h-3" />
                    </span>
                  )}
                </div>
                <div className="text-gray-500 text-sm">{review.date}</div>
              </div>
              <FaGoogle className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full">
          <FaGoogle className="text-xl text-primary" />
          <span className="font-semibold text-gray-800">4.9 Rating on Google</span>
          <span className="text-gray-500 border-l border-gray-300 pl-3">based on 50+ reviews</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Reviews;