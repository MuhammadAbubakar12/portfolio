export default function Projects() {
  const projects = [
    {
      title: 'AWS-Based Data Pipeline Optimization',
      company: 'Techlogix | 2023–2024',
      description: 'Built PySpark-powered ETL pipelines on AWS EMR to process large-scale financial data, improving throughput by 40% and reducing processing costs through optimized data workflows.',
      technologies: ['AWS EMR', 'PySpark', 'AWS Glue', 'Athena', 'Step Functions', 'S3', 'Python'],
      achievements: [
        'Improved data processing throughput by 40% through PySpark optimizations',
        'Leveraged AWS Glue for metadata management and data cataloging',
        'Implemented AWS Step Functions for complex workflow orchestration',
        'Reduced manual intervention through automated pipeline monitoring'
      ],
      metrics: [
        { value: '40%', label: 'Throughput Improvement' },
        { value: '99.9%', label: 'Uptime' },
        { value: '25%', label: 'Cost Reduction' }
      ],
      category: 'Data Engineering'
    },
    {
      title: 'Cloud Data Warehouse for BCBS',
      company: 'Techlogix | 2022–2023',
      description: 'Architected petabyte-scale data pipeline processing 50M+ daily records using PySpark on AWS EMR, implementing Medallion Architecture for optimized data processing and analytics.',
      technologies: ['AWS S3', 'PySpark', 'Delta Lake', 'Medallion Architecture', 'AWS Glue Catalog', 'Athena'],
      achievements: [
        'Reduced infrastructure costs by 25% via Delta Lake optimizations',
        'Processed 50M+ daily healthcare records reliably',
        'Automated 30+ workflows cutting manual efforts by 40%',
        'Implemented HIPAA compliance through IAM policies and KMS encryption'
      ],
      metrics: [
        { value: '50M+', label: 'Daily Records' },
        { value: '25%', label: 'Cost Savings' },
        { value: '40%', label: 'Efficiency Gain' }
      ],
      category: 'Healthcare Analytics'
    },
    {
      title: 'Real-Time Trade Monitoring (TMX Repository)',
      company: 'Techlogix | 2023–Present',
      description: 'Designed comprehensive data models and ETL architecture for trade-related red flags in TMX repository, enabling real-time monitoring and compliance reporting.',
      technologies: ['ETL Architecture', 'REST APIs', 'Data Modeling', 'SQL Server', 'Oracle', 'Shell Scripting'],
      achievements: [
        'Built transformation pipelines for normalized trade data',
        'Integrated CBS APIs for real-time data updates',
        'Led production rollout with zero downtime',
        'Provided ongoing L2 support and SLA compliance'
      ],
      metrics: [
        { value: 'Real-time', label: 'Monitoring' },
        { value: '100%', label: 'SLA Compliance' },
        { value: '24/7', label: 'Support' }
      ],
      category: 'Financial Compliance'
    },
    {
      title: 'FCCM Implementation & Customization',
      company: 'Techlogix | Feb 2022 – May 2023',
      description: 'Built custom ETL workflows in ODI 12c to support TBAML scenarios following SBP regulations, enhancing financial crime detection capabilities.',
      technologies: ['ODI 12c', 'TBAML', 'SQL Server', 'Shell Scripting', 'Postman', 'Oracle FCCM'],
      achievements: [
        'Defined comprehensive data mappings for AML detection',
        'Developed DIS files for FCCM engine ingestion',
        'Automated batch executions improving operational efficiency',
        'Performed validation and integration testing'
      ],
      metrics: [
        { value: '95%', label: 'Accuracy' },
        { value: '30%', label: 'Efficiency' },
        { value: '100%', label: 'Compliance' }
      ],
      category: 'Financial Crime'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px, rgba(59,130,246,0.03)_1px,transparent_0)] bg-[length:60px_60px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering scalable data solutions and financial compliance systems for enterprise clients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="px-8 py-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Achievements
                </h4>
                <ul className="space-y-3 mb-6">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-gray-700">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium hover:border-blue-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}