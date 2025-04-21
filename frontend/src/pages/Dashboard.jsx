import React, { useState } from 'react';
import { 
  Heart, 
  User, 
  Calendar, 
  MessageCircle, 
  Send,
  Home,
  HandHeart,
  Users,
  Paw,
  Menu,
  X,
  ChevronDown,
  Settings
} from 'lucide-react';

const StoryCard = ({ story, onLike, onComment }) => {
  const [likes, setLikes] = useState(story.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
    onLike(story.id);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      onComment(story.id, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-green-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
          <User className="text-green-600" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-green-800">{story.author}</h3>
          <div className="flex items-center text-green-600 text-sm">
            <Calendar size={16} className="mr-2" />
            <span>{story.date}</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-green-800 mb-4">{story.title}</h2>
      
      {story.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-64 object-cover"
          />
        </div>
      )}

      <p className="text-green-700 mb-4">{story.content}</p>

      <div className="flex items-center justify-between border-t border-green-100 pt-4">
        <button 
          onClick={handleLike}
          className="flex items-center text-green-600 hover:text-green-800"
        >
          <Heart size={20} className="mr-2" fill={likes > 0 ? '#10B981' : 'none'} />
          {likes} Likes
        </button>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center text-green-600 hover:text-green-800"
        >
          <MessageCircle size={20} className="mr-2" />
          {story.comments.length} Comments
        </button>
      </div>

      {showComments && (
        <div className="mt-4">
          <div className="space-y-3 mb-4">
            {story.comments.map((comment, index) => (
              <div key={index} className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <User size={16} className="mr-2 text-green-600" />
                  <span className="font-semibold text-green-800">{comment.author}</span>
                </div>
                <p className="text-green-700">{comment.text}</p>
              </div>
            ))}
          </div>
          <div className="flex">
            <input 
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow p-2 border border-green-200 rounded-l-lg"
            />
            <button 
              onClick={handleAddComment}
              className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const BlogContent = () => {
  const [stories, setStories] = useState([
    {
        id: 1,
        title: "Rescued Elephant Finds New Home at Wildlife Sanctuary",
        author: "Emma Johnson",
        date: "March 20, 2024",
        content: "After years of hardship, a traumatized elephant was rescued by the Amazing Animal Sanctuary. With patient care and love, the elephant has begun to heal and form bonds with other rescued animals...",
        image: "/api/placeholder/800/400?text=Elephant+Rescue",
        likes: 45,
        comments: [
          { author: "Michael", text: "Such an inspiring story!" },
          { author: "Sarah", text: "These sanctuaries do incredible work." }
        ]
      },
      {
        id: 2,
        title: "Stray Dog Rehabilitation Program Transforms Community",
        author: "Raj Patel",
        date: "February 15, 2024",
        content: "The Urban Paws NGO has been working tirelessly to address the stray dog population in our city. Through their comprehensive program of vaccination, sterilization, and community education...",
        image: "/api/placeholder/800/400?text=Dog+Rehabilitation",
        likes: 32,
        comments: [
          { author: "Lisa", text: "This is amazing community work!" }
        ]
      },
      {
        id: 3,
        title: "Sea Turtle Rescue Effort Saves Hundreds from Pollution",
        author: "Sophia Chen",
        date: "April 5, 2024",
        content: "A dedicated team of marine biologists and volunteers has successfully rescued and rehabilitated over 200 sea turtles affected by ocean pollution. The turtles are now being released back into their natural habitat...",
        image: "/api/placeholder/800/400?text=Sea+Turtle+Rescue",
        likes: 58,
        comments: [
          { author: "James", text: "Amazing work! We need more efforts like this." },
          { author: "Ella", text: "Heartwarming to see these turtles get a second chance!" }
        ]
      },
      {
        id: 4,
        title: "Orphaned Bear Cubs Get a Second Chance in the Wild",
        author: "David Thompson",
        date: "March 28, 2024",
        content: "Two orphaned bear cubs, found malnourished and alone, have been successfully rehabilitated by the Wildlife Conservation Trust. After months of care, they are now strong enough to be reintroduced into the wild...",
        image: "/api/placeholder/800/400?text=Bear+Cub+Rehabilitation",
        likes: 41,
        comments: [
          { author: "Sophia", text: "Such a touching story! Kudos to the rescuers." },
          { author: "Ryan", text: "This made my day! Wishing them a safe journey back into the wild." }
        ]
      },
      {
        id: 5,
        title: "Abandoned Parrots Find a Safe Haven at Bird Rescue Center",
        author: "Emily Carter",
        date: "April 10, 2024",
        content: "Dozens of exotic parrots, abandoned due to illegal pet trade, have found refuge at the Safe Wings Bird Rescue Center. With proper care, they are learning to fly again and interact with their own species...",
        image: "/api/placeholder/800/400?text=Parrot+Rescue",
        likes: 27,
        comments: [
          { author: "Tom", text: "The pet trade is so cruel, glad these birds are safe!" },
          { author: "Olivia", text: "Beautiful initiative. Parrots deserve freedom!" }
        ]
      }
  ]);

  const [newStory, setNewStory] = useState({
    title: '',
    content: ''
  });

  const handleLike = (storyId) => {
    // Placeholder for like functionality
  };

  const handleComment = (storyId, commentText) => {
    const updatedStories = stories.map(story => {
      if (story.id === storyId) {
        return {
          ...story,
          comments: [...story.comments, { 
            author: "Anonymous", 
            text: commentText 
          }]
        };
      }
      return story;
    });
    setStories(updatedStories);
  };

  const handleSubmitStory = () => {
    if (newStory.title.trim() && newStory.content.trim()) {
      const story = {
        id: stories.length + 1,
        ...newStory,
        author: "Anonymous",
        date: new Date().toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        }),
        likes: 0,
        comments: []
      };
      setStories([story, ...stories]);
      setNewStory({ title: '', content: '' });
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <Heart className="mr-3 text-green-600" size={24} />
            Share Your Animal Story
          </h2>
          <input 
            type="text"
            value={newStory.title}
            onChange={(e) => setNewStory({...newStory, title: e.target.value})}
            placeholder="Story Title"
            className="w-full p-2 mb-4 border border-green-200 rounded"
          />
          <textarea 
            value={newStory.content}
            onChange={(e) => setNewStory({...newStory, content: e.target.value})}
            placeholder="Tell us about your animal rescue or NGO experience..."
            className="w-full p-2 mb-4 border border-green-200 rounded h-32"
          />
          <button 
            onClick={handleSubmitStory}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 flex items-center"
          >
            <Send className="mr-2" size={20} /> Share Story
          </button>
        </div>

        {stories.map(story => (
          <StoryCard 
            key={story.id}
            story={story}
            onLike={handleLike}
            onComment={handleComment}
          />
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('blog');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'blog', label: 'Stories', icon: <MessageCircle size={20} /> },
    { id: 'donate', label: 'Donate', icon: <HandHeart size={20} /> },
    { id: 'volunteer', label: 'Volunteer', icon: <Users size={20} /> },
    { id: 'profile', label: 'Profile', icon: <User size={20} /> }
  ];

  const otherItems = [
    { id: 'animals', label: 'Animals', icon: <Paw size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Paw size={28} className="mr-2" />
              <h1 className="text-xl font-bold">Animal Rescue Network</h1>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-white hover:bg-green-600 rounded-md">Sign In</button>
              <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded-md">Sign Up</button>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex flex-grow">
        {/* Mobile menu */}
        <div 
          className={`md:hidden fixed inset-0 z-40 bg-green-800 bg-opacity-90 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-full flex flex-col p-4">
            <div className="flex justify-end">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 py-8">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center space-x-3 p-3 rounded-md ${
                    activeSection === item.id ? 'bg-green-600 text-white' : 'text-white hover:bg-green-600'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full p-3 rounded-md text-white hover:bg-green-600"
                >
                  <span className="flex items-center space-x-3">
                    <Menu size={20} /> 
                    <span>Other</span>
                  </span>
                  <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="pl-6 space-y-2 mt-2">
                    {otherItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className={`flex items-center space-x-3 p-2 w-full rounded-md ${
                          activeSection === item.id ? 'bg-green-600 text-white' : 'text-white hover:bg-green-600'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Sidebar for desktop */}
        <aside className="hidden md:block w-64 bg-white shadow-md">
          <div className="p-4 h-full flex flex-col">
            <nav className="flex flex-col space-y-2 flex-grow">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center space-x-3 p-3 rounded-md ${
                    activeSection === item.id ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center justify-between w-full p-3 rounded-md ${
                    otherItems.some(item => activeSection === item.id) ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <Menu size={20} /> 
                    <span>Other</span>
                  </span>
                  <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    {otherItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className={`flex items-center space-x-3 p-2 w-full rounded-md ${
                          activeSection === item.id ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            
            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 p-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="text-green-600" size={20} />
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-medium text-gray-900">Guest User</div>
                  <div className="text-xs text-gray-500">guest@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-grow">
          <div className="p-4">
            {/* Page header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-green-800">
                {activeSection === 'blog' && 'Animal Rescue Stories'}
                {activeSection === 'home' && 'Dashboard'}
                {activeSection === 'donate' && 'Support Our Cause'}
                {activeSection === 'volunteer' && 'Volunteer Opportunities'}
                {activeSection === 'profile' && 'Your Profile'}
                {activeSection === 'animals' && 'Our Animals'}
                {activeSection === 'settings' && 'Account Settings'}
              </h1>
              <p className="text-gray-600">
                {activeSection === 'blog' && 'Share and read inspiring animal rescue stories'}
                {activeSection === 'home' && 'Welcome to Animal Rescue Network'}
                {activeSection === 'donate' && 'Help us make a difference'}
                {activeSection === 'volunteer' && 'Join our community of volunteers'}
                {activeSection === 'profile' && 'Manage your account details'}
                {activeSection === 'animals' && 'Meet our rescued animals'}
                {activeSection === 'settings' && 'Configure your account preferences'}
              </p>
            </div>
            
            {/* Page content */}
            {activeSection === 'blog' && <BlogContent />}
            {activeSection === 'home' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Welcome to the Animal Rescue Network</h2>
                <p className="mb-4">This is your dashboard where you can access all features of our platform. Use the menu to navigate between different sections.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-medium text-green-800 mb-2">Recent Stories</h3>
                    <p className="text-green-700">Check out the latest animal rescue stories shared by our community.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-medium text-green-800 mb-2">Upcoming Events</h3>
                    <p className="text-green-700">View and join our upcoming animal rescue and adoption events.</p>
                  </div>
                </div>
              </div>
            )}
            {activeSection === 'donate' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Donate to Animal Rescue Network</h2>
                <p className="mb-4">Your donations help us rescue and care for animals in need. Choose how you'd like to contribute:</p>
                {/* Donation options would go here */}
              </div>
            )}
            {activeSection === 'volunteer' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Volunteer Opportunities</h2>
                <p className="mb-4">Join our team of dedicated volunteers. Find opportunities that match your skills and availability:</p>
                {/* Volunteer opportunities would go here */}
              </div>
            )}
            {activeSection === 'profile' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Your Profile</h2>
                <p className="mb-4">Manage your personal information and preferences:</p>
                {/* Profile settings would go here */}
              </div>
            )}
            {activeSection === 'animals' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Our Animals</h2>
                <p className="mb-4">Meet the animals currently in our care and available for adoption:</p>
                {/* Animal listings would go here */}
              </div>
            )}
            {activeSection === 'settings' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Account Settings</h2>
                <p className="mb-4">Customize your account preferences and notification settings:</p>
                {/* Settings options would go here */}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <Paw size={24} className="mr-2" />
                <span className="font-bold text-lg">Animal Rescue Network</span>
              </div>
              <p className="text-green-200 text-sm mt-1">Making a difference, one animal at a time</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-green-200 hover:text-white">About</a>
              <a href="#" className="text-green-200 hover:text-white">Contact</a>
              <a href="#" className="text-green-200 hover:text-white">Privacy</a>
              <a href="#" className="text-green-200 hover:text-white">Terms</a>
            </div>
          </div>
          <div className="mt-6 text-center text-green-200 text-sm">
            &copy; 2025 Animal Rescue Network. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;