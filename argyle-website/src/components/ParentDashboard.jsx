import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, TrendingUp, Calendar, Target, Award, Bell, BookOpen } from 'lucide-react';

const ParentDashboard = () => {
    const [selectedStudent, setSelectedStudent] = useState('john-doe');
    const [notifications, setNotifications] = useState([]);

    // Mock data - in real app this would come from API
    const students = [
        {
            id: 'john-doe',
            name: 'John Doe',
            grade: '8th',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
            subjects: {
                math: { grade: 'B+', progress: 78, trend: 'up' },
                english: { grade: 'A-', progress: 92, trend: 'stable' },
                science: { grade: 'B', progress: 85, trend: 'up' },
                history: { grade: 'B-', progress: 72, trend: 'down' }
            },
            attendance: 95,
            studyStreak: 7,
            recentAchievements: ['week-warrior', 'math-master'],
            teacherNotes: [
                { date: '2024-01-15', teacher: 'Ms. Johnson', subject: 'Math', note: 'Excellent progress on algebra concepts!' },
                { date: '2024-01-12', teacher: 'Mr. Smith', subject: 'Science', note: 'Great participation in lab activities' }
            ]
        }
    ];

    const student = students.find(s => s.id === selectedStudent);

    // Mock notifications
    useEffect(() => {
        setNotifications([
            { id: 1, type: 'achievement', message: 'John earned the "Week Warrior" badge!', date: '2024-01-15', read: false },
            { id: 2, type: 'progress', message: 'Math grade improved from C+ to B+', date: '2024-01-14', read: false },
            { id: 3, type: 'attendance', message: 'Perfect attendance this week!', date: '2024-01-13', read: true }
        ]);
    }, []);

    const getGradeColor = (grade) => {
        if (grade.startsWith('A')) return 'text-green-400';
        if (grade.startsWith('B')) return 'text-blue-400';
        if (grade.startsWith('C')) return 'text-yellow-400';
        return 'text-red-400';
    };

    const getTrendIcon = (trend) => {
        switch (trend) {
            case 'up': return '📈';
            case 'down': return '📉';
            default: return '➡️';
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-argyle-blue to-purple-500">
                        Parent Dashboard
                    </h1>
                    <p className="text-gray-400 text-lg">Stay connected with your child's academic journey</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Student Selector & Overview */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1"
                    >
                        <div className="glass-panel p-6 rounded-3xl mb-6">
                            <h3 className="text-xl font-bold text-white mb-4">Student</h3>
                            <div className="flex items-center space-x-3 mb-4">
                                <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="text-white font-semibold">{student.name}</p>
                                    <p className="text-gray-400 text-sm">{student.grade} Grade</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">Attendance</span>
                                    <span className="text-green-400 font-bold">{student.attendance}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">Study Streak</span>
                                    <span className="text-purple-400 font-bold">{student.studyStreak} days</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="glass-panel p-6 rounded-3xl">
                            <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
                            <div className="space-y-3">
                                <button className="w-full p-3 bg-argyle-blue/20 hover:bg-argyle-blue/30 rounded-xl text-argyle-blue font-medium transition-colors">
                                    Message Teacher
                                </button>
                                <button className="w-full p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl text-purple-400 font-medium transition-colors">
                                    Schedule Meeting
                                </button>
                                <button className="w-full p-3 bg-green-500/20 hover:bg-green-500/30 rounded-xl text-green-400 font-medium transition-colors">
                                    View Report Card
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Academic Performance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glass-panel p-8 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <TrendingUp className="text-argyle-blue" />
                                Academic Performance
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {Object.entries(student.subjects).map(([subject, data]) => (
                                    <motion.div
                                        key={subject}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-slate-800/50 p-4 rounded-xl border border-white/5"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="text-white font-semibold capitalize">{subject}</h4>
                                            <span className="text-2xl">{getTrendIcon(data.trend)}</span>
                                        </div>
                                        <div className={`text-2xl font-bold mb-2 ${getGradeColor(data.grade)}`}>
                                            {data.grade}
                                        </div>
                                        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                                            <div
                                                className="bg-argyle-blue h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${data.progress}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-gray-400 text-sm">{data.progress}% Progress</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Achievements & Notifications */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Achievements */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="glass-panel p-8 rounded-3xl"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Award className="text-yellow-400" />
                                    Recent Achievements
                                </h3>

                                <div className="space-y-4">
                                    {student.recentAchievements.map((achievement, index) => (
                                        <motion.div
                                            key={achievement}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4 p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20"
                                        >
                                            <Award className="w-6 h-6 text-yellow-400" />
                                            <div>
                                                <p className="text-white font-semibold capitalize">
                                                    {achievement.replace('-', ' ')}
                                                </p>
                                                <p className="text-gray-400 text-sm">Achievement unlocked!</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Notifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="glass-panel p-8 rounded-3xl"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Bell className="text-red-400" />
                                    Notifications
                                </h3>

                                <div className="space-y-4 max-h-64 overflow-y-auto">
                                    {notifications.map((notification, index) => (
                                        <motion.div
                                            key={notification.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`p-4 rounded-xl border ${
                                                notification.read
                                                    ? 'bg-slate-800/30 border-white/5'
                                                    : 'bg-blue-500/10 border-blue-500/20'
                                            }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <Bell className={`w-5 h-5 mt-0.5 ${
                                                    notification.type === 'achievement' ? 'text-yellow-400' :
                                                    notification.type === 'progress' ? 'text-green-400' : 'text-blue-400'
                                                }`} />
                                                <div className="flex-1">
                                                    <p className="text-white text-sm leading-relaxed">
                                                        {notification.message}
                                                    </p>
                                                    <p className="text-gray-400 text-xs mt-1">{notification.date}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Teacher Communication */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass-panel p-8 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <MessageSquare className="text-green-400" />
                                Teacher Communication
                            </h3>

                            <div className="space-y-4">
                                {student.teacherNotes.map((note, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 bg-slate-800/50 rounded-xl border border-white/5"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <p className="text-white font-semibold">{note.teacher}</p>
                                                <p className="text-gray-400 text-sm">{note.subject} • {note.date}</p>
                                            </div>
                                            <BookOpen className="w-5 h-5 text-argyle-blue" />
                                        </div>
                                        <p className="text-gray-300">{note.note}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Message Teacher */}
                            <div className="mt-6 p-4 bg-slate-800/30 rounded-xl border border-white/5">
                                <h4 className="text-white font-semibold mb-3">Send a Message</h4>
                                <textarea
                                    placeholder="Type your message to teachers..."
                                    className="w-full p-3 bg-slate-900/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-argyle-blue focus:outline-none resize-none"
                                    rows="3"
                                ></textarea>
                                <button className="mt-3 px-6 py-2 bg-argyle-blue hover:bg-blue-600 rounded-lg text-white font-medium transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDashboard;






























