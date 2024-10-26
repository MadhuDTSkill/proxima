import React from 'react';
import GptCard from './GptCard';

const GptList = () => {
    const gptModels = [
        { name: 'GPT-Writing Assistant', description: 'An AI-powered assistant that helps with drafting emails, writing essays, and generating creative content with ease.' },
        { name: 'GPT-Research Helper', description: 'Perfect for gathering information and summarizing academic papers, articles, and reports in a concise manner.' },
        { name: 'GPT-Content Generator', description: 'Designed for marketers, this GPT model creates blog posts, product descriptions, and social media captions.' },
        { name: 'GPT-Code Completer', description: 'Ideal for developers, this model assists in completing and debugging code across various programming languages.' },
        { name: 'GPT-Language Translator', description: 'Capable of translating text between multiple languages with high accuracy and fluency.' },
        { name: 'GPT-Chatbot', description: 'A conversational chatbot model that can engage in meaningful and human-like dialogue across different domains.' },
        { name: 'GPT-Medical Assistant', description: 'Designed for healthcare professionals, this model helps with clinical documentation, summarizing medical research, and answering patient inquiries.' },
        { name: 'GPT-Storyteller', description: 'A model for generating creative and engaging short stories or expanding on existing narratives.' },
        { name: 'GPT-Math Solver', description: 'This model specializes in solving complex mathematical equations and providing step-by-step explanations.' },
        { name: 'GPT-News Summarizer', description: 'Keeps you updated with the latest news by summarizing long articles into concise bullet points.' },
        { name: 'GPT-Productivity Booster', description: 'Helps with task management, reminders, and organizing your to-do list for increased productivity.' },
        { name: 'GPT-Personal Trainer', description: 'Creates personalized workout routines and dietary plans based on individual preferences and fitness goals.' },
        { name: 'GPT-Customer Support Bot', description: 'A customizable bot that can assist with customer queries, troubleshooting, and FAQs in real-time.' },
        { name: 'GPT-Marketing Strategist', description: 'Assists with creating marketing strategies, A/B testing ideas, and campaign content tailored to your audience.' },
        { name: 'GPT-Recipe Creator', description: 'Generates unique and delicious recipes based on available ingredients and dietary preferences.' },
        { name: 'GPT-Legal Advisor', description: 'Helps with drafting legal documents, summarizing case law, and answering general legal questions.' },
        { name: 'GPT-Financial Analyst', description: 'Provides financial insights, portfolio analysis, and market trend predictions to assist in investment decisions.' },
        { name: 'GPT-Education Assistant', description: 'A tool for students and educators, this model helps explain complex subjects and generate study materials.' },
        { name: 'GPT-Resume Builder', description: 'Crafts professional resumes and cover letters tailored to specific job positions and industries.' },
        { name: 'GPT-Personal Assistant', description: 'Helps manage daily schedules, set reminders, and perform various administrative tasks to keep you organized.' },
    ];


    return (
        <div className="grid lg:grid-cols-2 gap-4 max-w-[750px] mx-auto">
            {gptModels.map((gpt, index) => (
                <GptCard key={index} name={gpt.name} description={gpt.description} />
            ))}
        </div>
    );
};

export default GptList;
