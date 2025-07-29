'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, PenTool, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'HTML',
        'CSS',
        'JavaScript/TypeScript',
        'Tailwind CSS',
        'Bootstrap',
        'Next.js',
        'React',
        'Vercel AI SDK',
        'Gsap',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'Backend & Systems',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Unix',
        'C',
        'C++',
        'Python',
        'Typescript',
        'Git',
        'GitHub',
        'Docker',
        'GCP',
        'PostgreSQL',
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'Design & Creative Tools',
      icon: <PenTool className="h-5 w-5" />,
      skills: ['Figma', 'Davinci Code', 'Illustrator', 'Canva', 'Keynote'],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Communication',
        'Problem-Solving',
        'Adaptability',
        'Learning Agility',
        'Teamwork',
        'Creativity',
        'Focus',
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
    {
      category: 'AI & Fullstack Engineering',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'LLM Providers (ChatGPT, Whisper, Groq, Mistral & Claude)',
        'AI Agents',
        'Prompt engineering',
        'Vector databases (Weaviate, Pinecone)',
        'RAG (Retrieval-Augmented Generation)',
        'Tool routing & calling',
        'Hugging Face Transformers',
        'Vercel AI SDK',
        'Supabase',
        'Prisma',
        'Next.js',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge className={`border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
