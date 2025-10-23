"use client";
import { motion } from "framer-motion";

export default function About() {
  const skillCategories = [
    {
      title: 'Cloud & Big Data',
      icon: '☁️',
      skills: ['AWS EMR', 'AWS Glue', 'AWS Athena', 'Step Functions', 'AWS S3', 'Redshift', 'Azure Data Factory', 'Databricks']
    },
    {
      title: 'Data Engineering',
      icon: '⚡',
      skills: ['PySpark', 'Delta Lake', 'Medallion Architecture', 'ETL/ELT', 'Data Warehousing', 'Data Pipeline', 'Oracle Data Integrator']
    },
    {
      title: 'Financial Compliance',
      icon: '🔒',
      skills: ['Oracle FCCM', 'TBAML', 'AML', 'KYC', 'ECM', 'Financial Regulations', 'SBP Compliance']
    },
    {
      title: 'Programming & Databases',
      icon: '💻',
      skills: ['Python', 'SQL', 'PL/SQL', 'Shell Scripting', 'PostgreSQL', 'DynamoDB', 'Oracle', 'MongoDB']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px, rgba(59,130,246,0.05)_1px,transparent_0)] bg-[length:40px_40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Summary - Animated */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
              <motion.p 
                className="text-lg text-gray-700 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="font-semibold text-blue-600">Accomplished Data Engineer</span> with <span className="font-semibold">4+ years</span> of expertise in 
                designing, deploying, and optimizing <span className="font-semibold">scalable cloud data solutions</span> for 
                <span className="font-semibold"> financial compliance</span> and <span className="font-semibold">big data analytics</span>.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Proven ability to architect <span className="font-semibold text-purple-600">end-to-end data pipelines</span> 
                leveraging AWS, PySpark, and Delta Lake, resulting in <span className="font-semibold">25% cost reduction</span> 
                and <span className="font-semibold">40% performance improvement</span> in production systems.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Adept at implementing <span className="font-semibold text-cyan-600">regulatory compliance frameworks</span> 
                including Oracle FCCM and TBAML, ensuring adherence to financial regulations while managing 
                <span className="font-semibold"> petabyte-scale datasets</span>.
              </motion.p>
            </motion.div>

            {/* Education - Animated */}
            <motion.div 
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🎓</span> Education
              </h4>
              <div className="space-y-3">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h5 className="font-semibold text-gray-900">Bachelor of Science in Computer Science (BSCS)</h5>
                  <p className="text-blue-600 font-medium">National University of Sciences and Technology (NUST)</p>
                  <p className="text-gray-600">2017 – 2021 | Islamabad, Pakistan</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Grid - Animated */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium border border-blue-100 group-hover:border-blue-200 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.15 + skillIndex * 0.05, duration: 0.4 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}