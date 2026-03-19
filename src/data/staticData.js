// Static user data
export const currentUser = {
  id: 1,
  name: 'Saravanakumar',
  role: 'Web Developer at MindfulAI',
  bio: 'Passionate about building beautiful and functional web applications. React enthusiast | Full Stack Developer',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=0a66c2',
  coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=300&fit=crop&auto=format',
  location: 'India',
  headline: 'Web Developer at MindfulAI',
  connectionCount: 245,
  followers: 1200,
  posts: 45,
  email: 'saravanakumar@mindfulai.com',
  phone: '+91 9876543210',
  about: 'I\'m a passionate web developer with expertise in React, JavaScript, and modern web technologies. I love building responsive and user-friendly applications. Always eager to learn new technologies and best practices in web development. With over 2 years of professional experience, I\'ve worked on multiple projects ranging from small startups to established tech companies. I\'m committed to writing clean, maintainable code and following industry best practices.',
  experience: [
    {
      id: 1,
      title: 'Web Developer',
      company: 'MindfulAI',
      duration: 'Jan 2022 - Present • 2 years',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with design and product teams to implement new features. Improved application performance by 40% through optimization techniques.',
      isCurrent: true
    },
    {
      id: 2,
      title: 'Junior Developer',
      company: 'Tech Startup',
      duration: 'Jun 2020 - Dec 2021 • 1 year 7 months',
      description: 'Worked on frontend development and bug fixes. Participated in code reviews and contributed to improving code quality. Gained experience with React, Vue.js, and various web technologies.',
      isCurrent: false
    },
    {
      id: 3,
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      duration: '2019 - 2020',
      description: 'Built responsive websites for small businesses and startups. Handled full project lifecycle from design to deployment. Maintained 100% client satisfaction rate.',
      isCurrent: false
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Technology (B.Tech) in Information Technology',
      university: 'University of Technology',
      year: '2019 - 2023',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'Web Development Bootcamp',
      university: 'Coding Academy',
      year: '2019',
      gpa: ''
    }
  ],
  skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
};

// Static posts data
export const posts = [
  {
    id: 1,
    author: 'Saravanakumar',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Saravanakumar&backgroundColor=0a66c2',
    timestamp: '2 hours ago',
    content: 'Just launched my new portfolio website! Excited to share my latest projects and work.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&auto=format',
    likes: 234,
    comments: 45
  },
  {
    id: 2,
    author: 'John Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JohnSmith&backgroundColor=1e90ff',
    timestamp: '4 hours ago',
    content: 'React 18 is amazing! The new features make development so much smoother.',
    image: null,
    likes: 567,
    comments: 89
  },
  {
    id: 3,
    author: 'Sarah Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJohnson&backgroundColor=ff6b9d',
    timestamp: '6 hours ago',
    content: 'Completed my first web development project! So proud of what I\'ve accomplished in this journey.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format',
    likes: 890,
    comments: 123
  },
  {
    id: 4,
    author: 'Mike Davis',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MikeDavis&backgroundColor=4a90e2',
    timestamp: '8 hours ago',
    content: 'Tips for writing clean code: 1. Keep functions small 2. Use meaningful names 3. Write tests 4. Refactor regularly',
    image: null,
    likes: 1200,
    comments: 156
  }
];

// Static connections data
export const connections = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Senior Frontend Developer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JohnSmith&backgroundColor=1e90ff',
    mutualConnections: 12
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJohnson&backgroundColor=ff6b9d',
    mutualConnections: 8
  },
  {
    id: 3,
    name: 'Mike Davis',
    role: 'Full Stack Developer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MikeDavis&backgroundColor=4a90e2',
    mutualConnections: 15
  },
  {
    id: 4,
    name: 'Emily Chen',
    role: 'Product Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmilyChen&backgroundColor=f0ad4e',
    mutualConnections: 5
  },
  {
    id: 5,
    name: 'Alex Taylor',
    role: 'Backend Developer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexTaylor&backgroundColor=5cb85c',
    mutualConnections: 10
  },
  {
    id: 6,
    name: 'Jessica Lee',
    role: 'DevOps Engineer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JessicaLee&backgroundColor=d9534f',
    mutualConnections: 7
  }
];

// Static notifications data
export const notifications = [
  {
    id: 1,
    type: 'connection',
    message: 'John Smith accepted your connection request',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JohnSmith&backgroundColor=1e90ff',
    timestamp: '2 hours ago',
    read: false
  },
  {
    id: 2,
    type: 'like',
    message: 'Sarah Johnson liked your post',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJohnson&backgroundColor=ff6b9d',
    timestamp: '3 hours ago',
    read: false
  },
  {
    id: 3,
    type: 'comment',
    message: 'Mike Davis commented on your post: "Great work!"',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MikeDavis&backgroundColor=4a90e2',
    timestamp: '5 hours ago',
    read: true
  },
  {
    id: 4,
    type: 'mention',
    message: 'Emily Chen mentioned you in a post',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmilyChen&backgroundColor=f0ad4e',
    timestamp: '1 day ago',
    read: true
  },
  {
    id: 5,
    type: 'connection',
    message: 'Alex Taylor sent you a connection request',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexTaylor&backgroundColor=5cb85c',
    timestamp: '2 days ago',
    read: true
  }
];
