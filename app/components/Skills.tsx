"use client";

import { motion } from "framer-motion";
import {
  SiDatabricks,
  SiApachehadoop,
  SiPython,
  SiPostgresql,
  SiOracle,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiGithub,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiPycharm,
  SiJupyter,
  SiDocker,
  SiKubernetes,
  SiNpm,
  SiPypi,
  SiAnaconda,
  SiApacheairflow,
} from "react-icons/si";
import {
  FaDatabase,
  FaCloud,
  FaAws,
  FaServer,
  FaTerminal,
} from "react-icons/fa";

export default function Skills() {
  const technicalSkills = {
    "Cloud Technologies": [
      { name: "AWS EMR", level: 95, icon: FaAws },
      { name: "AWS Glue", level: 90, icon: FaAws },
      { name: "AWS Athena", level: 85, icon: FaAws },
      { name: "AWS S3", level: 92, icon: FaAws },
      { name: "Step Functions", level: 88, icon: FaAws },
      { name: "Redshift", level: 82, icon: FaDatabase },
    ],
    "Big Data & ETL": [
      { name: "PySpark", level: 93, icon: SiApachehadoop },
      { name: "Databricks", level: 87, icon: SiDatabricks },
      { name: "Oracle Data Integrator", level: 85, icon: SiOracle },
      { name: "Medallion Architecture", level: 90, icon: SiDatabricks },
      { name: "Delta Lake", level: 88, icon: FaDatabase },
    ],
    "Programming & Databases": [
      { name: "Python", level: 92, icon: SiPython },
      { name: "SQL", level: 95, icon: FaDatabase },
      { name: "PL/SQL", level: 88, icon: SiOracle },
      { name: "Shell Scripting", level: 85, icon: FaTerminal },
      { name: "PostgreSQL", level: 83, icon: SiPostgresql },
      { name: "DynamoDB", level: 80, icon: FaDatabase },
    ],
    "Financial Compliance": [
      { name: "Oracle FCCM", level: 90, icon: SiOracle },
      { name: "TBAML", level: 88, icon: SiOracle },
      { name: "AML", level: 85, icon: FaDatabase },
      { name: "KYC", level: 82, icon: FaDatabase },
      { name: "ECM", level: 80, icon: SiOracle },
    ],
  };

  const achievements = [
    {
      icon: "🏆",
      title: "Achiever of the Month",
      description: "Techlogix (Sep 2022, Jun 2023, Jul 2024)",
      metrics: "3x Recognition",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "40% throughput improvement in data pipelines",
      metrics: "40% Gain",
    },
    {
      icon: "💰",
      title: "Cost Reduction",
      description: "25% infrastructure cost savings through optimizations",
      metrics: "25% Savings",
    },
    {
      icon: "🔧",
      title: "Process Automation",
      description: "30+ workflows automated, 40% manual effort reduction",
      metrics: "40% Efficiency",
    },
  ];

  const toolsAndTech = [
    // Existing Tools
  { name: "Apache Airflow", icon: <SiApacheairflow className="text-sky-500 text-3xl" /> },
{ name: "Databricks", icon: <SiDatabricks className="text-red-500 text-3xl" /> },
{ name: "Delta Lake", icon: <FaDatabase className="text-indigo-500 text-3xl" /> },
{ name: "RDS", icon: <FaDatabase className="text-blue-700 text-3xl" /> },
{ name: "DynamoDB", icon: <FaDatabase className="text-sky-600 text-3xl" /> },
{ name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
{ name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
{ name: "Oracle", icon: <SiOracle className="text-red-600 text-3xl" /> },
{ name: "SQL Compare", icon: <FaDatabase className="text-gray-600 text-3xl" /> },
{ name: "Toad", icon: <FaDatabase className="text-green-600 text-3xl" /> },
{ name: "AWS CLI", icon: <FaAws className="text-yellow-500 text-3xl" /> },
{ name: "CloudWatch", icon: <FaAws className="text-purple-600 text-3xl" /> },
{ name: "Stonebranch", icon: <FaServer className="text-blue-600 text-3xl" /> },
{ name: "WebSphere", icon: <FaServer className="text-indigo-500 text-3xl" /> },
{ name: "Oracle WebLogic", icon: <SiOracle className="text-red-600 text-3xl" /> },
{ name: "WinSCP", icon: <FaServer className="text-green-600 text-3xl" /> },
{ name: "PuTTY", icon: <FaTerminal className="text-yellow-600 text-3xl" /> },
{ name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" /> },
{ name: "GitHub", icon: <SiGithub className="text-black text-3xl" /> },
{ name: "Git", icon: <SiGit className="text-orange-600 text-3xl" /> },
{ name: "PyCharm", icon: <SiPycharm className="text-green-600 text-3xl" /> },
{ name: "Jupyter Notebook", icon: <SiJupyter className="text-red-500 text-3xl" /> },
{ name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-3xl" /> },
{ name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-3xl" /> },
{ name: "React", icon: <SiReact className="text-blue-500 text-3xl" /> },
{ name: "PyPI", icon: <SiPypi className="text-blue-700 text-3xl" /> },
{ name: "Conda", icon: <SiAnaconda className="text-green-500 text-3xl" /> },
{ name: "NPM", icon: <SiNpm className="text-red-600 text-3xl" /> }, 
{ name: "Docker", icon: <SiDocker className="text-blue-500 text-3xl" /> },
{ name: "Kubernetes", icon: <SiKubernetes className="text-blue-600 text-3xl" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical expertise and professional accomplishments in data engineering and cloud technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {Object.entries(technicalSkills).map(([category, skills], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <FaCloud className="text-blue-600 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2 text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                        {skill.icon && <skill.icon className="text-blue-600 text-xl" />}
                        {skill.name}
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  {achievement.metrics}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div className="mt-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tools &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h3>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {toolsAndTech.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border border-gray-100 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform">{tool.icon}</div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}