"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Data Engineer',
      company: 'Techlogix',
      location: 'Lahore, Pakistan',
      period: 'Dec 2021 – Present',
      type: 'Full-time',
      achievements: [
        'Designed and deployed scalable ETL pipelines using AWS S3, Databricks, and PySpark, reducing Databricks costs by 25% through Delta Lake optimizations',
        'Architected data warehousing solutions on AWS, integrating structured (PostgreSQL) and unstructured (DynamoDB) data sources for analytics',
        'Automated complex workflows using shell scripting and Stonebranch, improving operational efficiency by 30%',
        'Managed petabyte-scale healthcare data for Blue Cross Blue Shield (BCBS), ensuring compliance with AWS security best practices',
        'Collaborated with compliance teams to implement TBAML/KYC frameworks, leveraging ODI 12c and SQL Server'
      ],
      technologies: ['AWS EMR', 'PySpark', 'Databricks', 'Delta Lake', 'PostgreSQL', 'DynamoDB', 'Shell Scripting', 'Stonebranch']
    },
    {
      title: 'Software Engineer',
      company: 'Hypoters',
      location: 'Remote',
      period: 'Oct 2020 – Nov 2021',
      type: 'Full-time',
      achievements: [
        'Developed RESTful APIs using Node.js and MongoDB, enabling real-time data access for international clients',
        'Optimized MySQL databases for performance and scalability',
        'Contributed to web development projects and technical support for international clients'
      ],
      technologies: ['Node.js', 'MongoDB', 'MySQL', 'REST APIs', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            4+ years of delivering scalable data solutions and financial compliance systems
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
       
          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-start gap-8`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: (i = index) => ({
                    opacity: 1,
                    transition: {
                      delay: i * 0.3,
                      duration: 0.8,
                    },
                  }),
                }}
              >
                {/* Animated Timeline Dot */}
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10 mx-auto md:mx-0 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-blue-500 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.3 + 0.2, type: "spring" }}
                  />
                </motion.div>

                {/* Animated Experience Card */}
                <motion.div
                  className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  >
                    {/* Animated Header */}
                    <motion.div 
                      className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 + 0.1 }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <motion.h3 
                            className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="font-semibold text-gray-900">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <motion.span 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mt-4 lg:mt-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.3 + 0.3, type: "spring" }}
                      >
                        {exp.period}
                      </motion.span>
                    </motion.div>

                    {/* Animated Achievements */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.4 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li 
                            key={achievementIndex}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.3 + 0.5 + achievementIndex * 0.1 }}
                          >
                            <motion.span 
                              className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 + 0.6 + achievementIndex * 0.1 }}
                            >
                              •
                            </motion.span>
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Animated Technologies */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.6 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Technologies Used
                      </h4>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.3 + 0.7 }}
                      >
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium border border-blue-100 inline-block"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}