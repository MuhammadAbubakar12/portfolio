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
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px, rgba(59,130,246,0.05)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <span className="font-semibold text-blue-600">Senior Data Engineer</span> with <span className="font-semibold">4+ years</span> of experience 
                specializing in building <span className="font-semibold">scalable cloud-based data pipelines</span>, 
                <span className="font-semibold"> ETL/ELT workflows</span>, and <span className="font-semibold">data warehouses</span> on AWS.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Expert in <span className="font-semibold text-purple-600">financial compliance systems</span> including 
                Oracle FCCM, TBAML, and AML frameworks. Proven ability to optimize data infrastructure, 
                enforce governance, and collaborate with cross-functional teams.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate about leveraging <span className="font-semibold text-cyan-600">big data technologies</span> 
                and cloud platforms to solve complex business problems in the financial sector.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🎓</span> Education
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-gray-900">Bachelor of Science in Computer Science (BSCS)</h5>
                  <p className="text-blue-600 font-medium">National University of Sciences and Technology (NUST)</p>
                  <p className="text-gray-600">2017 – 2021 | Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium border border-blue-100 group-hover:border-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}