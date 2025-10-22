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
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4+ years of delivering scalable data solutions and financial compliance systems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
        
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start gap-8`}>
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10 mx-auto md:mx-0">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>

                {/* Experience Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h3>
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
                      <div className="mt-4 lg:mt-0 lg:text-right">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}