import React, { useState } from 'react';
import { 
  Heart, 
  User, 
  Calendar, 
  MessageCircle, 
  Send,
  BookOpen,
  Bookmark,
  Share2,
  ThumbsUp
} from 'lucide-react';
import Footer from '../components/footer';

const StoryCard = ({ story, onLike, onComment }) => {
  const [likes, setLikes] = useState(story.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [bookmarked, setBookmarked] = useState(false);

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

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-green-100 hover:shadow-xl transition-shadow duration-300">
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
        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <p className="text-green-700 mb-4 leading-relaxed">{story.content}</p>

      <div className="flex items-center justify-between border-t border-green-100 pt-4 mt-4">
        <div className="flex space-x-4">
          <button 
            onClick={handleLike}
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <ThumbsUp size={20} className="mr-2" fill={likes > story.likes ? '#10B981' : 'none'} />
            <span className="font-medium">{likes}</span>
          </button>
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <MessageCircle size={20} className="mr-2" />
            <span className="font-medium">{story.comments.length}</span>
          </button>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={toggleBookmark}
            className="flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <Bookmark size={20} fill={bookmarked ? '#10B981' : 'none'} />
          </button>
          <button className="flex items-center text-green-600 hover:text-green-800 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {showComments && (
        <div className="mt-4">
          <h4 className="font-semibold text-green-800 mb-3">Comments ({story.comments.length})</h4>
          <div className="space-y-3 mb-4">
            {story.comments.map((comment, index) => (
              <div key={index} className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center mb-2">
                  <User size={16} className="mr-2 text-green-600" />
                  <span className="font-semibold text-green-800">{comment.author}</span>
                </div>
                <p className="text-green-700">{comment.text}</p>
              </div>
            ))}
          </div>
          <div className="flex mt-3">
            <input 
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow p-3 border border-green-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button 
              onClick={handleAddComment}
              className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const BlogSpot = () => {
  const [stories, setStories] = useState([
    {
        id: 1,
        title: "Rescued Elephant Finds New Home at Wildlife Sanctuary",
        author: "Emma Johnson",
        date: "March 20, 2024",
        content: "After years of hardship, a traumatized elephant was rescued by the Amazing Animal Sanctuary. With patient care and love, the elephant has begun to heal and form bonds with other rescued animals. The sanctuary provides a safe environment where animals can recover from past traumas and live in conditions that closely mimic their natural habitat. Visitors can observe from a respectful distance, learning about conservation efforts and animal welfare.",
        image: "/api/placeholder/800/400?text=Elephant+Rescue",
        likes: 45,
        comments: [
          { author: "Michael", text: "Such an inspiring story! I'm glad this elephant found a safe home." },
          { author: "Sarah", text: "These sanctuaries do incredible work. We need more funding for them!" }
        ]
      },
      {
        id: 2,
        title: "Stray Dog Rehabilitation Program Transforms Community",
        author: "Raj Patel",
        date: "February 15, 2024",
        content: "The Urban Paws NGO has been working tirelessly to address the stray dog population in our city. Through their comprehensive program of vaccination, sterilization, and community education, they've managed to not only improve animal welfare but also create safer neighborhoods for everyone. Local schools are now participating in educational programs about responsible pet ownership and animal care, creating a new generation of compassionate citizens.",
        image: "/api/placeholder/800/400?text=Dog+Rehabilitation",
        likes: 32,
        comments: [
          { author: "Lisa", text: "This is amazing community work! I've volunteered with them and they're so dedicated." }
        ]
      },
      {
        id: 3,
        title: "Sea Turtle Rescue Effort Saves Hundreds from Pollution",
        author: "Sophia Chen",
        date: "April 5, 2024",
        content: "A dedicated team of marine biologists and volunteers has successfully rescued and rehabilitated over 200 sea turtles affected by ocean pollution. The turtles are now being released back into their natural habitat in a cleaner, protected marine zone. The rescue organization has also partnered with local businesses to reduce plastic waste in the area and increase awareness about marine conservation issues.",
        image: "/api/placeholder/800/400?text=Sea+Turtle+Rescue",
        likes: 58,
        comments: [
          { author: "James", text: "Amazing work! We need more efforts like this around the world." },
          { author: "Ella", text: "Heartwarming to see these turtles get a second chance! I donated to support their work." }
        ]
      },
      {
        id: 4,
        title: "Orphaned Bear Cubs Get a Second Chance in the Wild",
        author: "David Thompson",
        date: "March 28, 2024",
        content: "Two orphaned bear cubs, found malnourished and alone, have been successfully rehabilitated by the Wildlife Conservation Trust. After months of care, they are now strong enough to be reintroduced into the wild. The reintroduction process is carefully planned to give them the best chance of survival without human dependency, using state-of-the-art tracking to monitor their progress.",
        image: "/api/placeholder/800/400?text=Bear+Cub+Rehabilitation",
        likes: 41,
        comments: [
          { author: "Sophia", text: "Such a touching story! Kudos to the rescuers for their dedication." },
          { author: "Ryan", text: "This made my day! Wishing them a safe journey back into the wild." }
        ]
      },
      {
        id: 5,
        title: "Abandoned Parrots Find a Safe Haven at Bird Rescue Center",
        author: "Emily Carter",
        date: "April 10, 2024",
        content: "Dozens of exotic parrots, abandoned due to illegal pet trade, have found refuge at the Safe Wings Bird Rescue Center. With proper care, they are learning to fly again and interact with their own species. The center also provides educational tours to teach visitors about the importance of letting wildlife remain in their natural habitats rather than keeping them as pets.",
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
    <div className="min-h-screen bg-green-50">
      
      {/* Hero section */}
      <div className="bg-green-600 text-white py-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Rescue Stories</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Discover inspiring stories of rescues and the amazing work of NGOs around the world.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-green-800">Recent Stories</h2>
          <div className="flex space-x-2">
            <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-colors">
              Most Recent
            </button>
            <button className="bg-white text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-100 transition-colors">
              Most Popular
            </button>
          </div>
        </div>
      
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <BookOpen className="mr-3 text-green-600" size={24} />
            Share Your Story
          </h2>
          <input 
            type="text"
            value={newStory.title}
            onChange={(e) => setNewStory({...newStory, title: e.target.value})}
            placeholder="Story Title"
            className="w-full p-3 mb-4 border border-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea 
            value={newStory.content}
            onChange={(e) => setNewStory({...newStory, content: e.target.value})}
            placeholder="Tell us about your animal rescue or NGO experience..."
            className="w-full p-3 mb-4 border border-green-200 rounded h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button 
            onClick={handleSubmitStory}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center shadow-md"
          >
            <Send className="mr-2" size={20} /> Share Your Story
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
        
        <div className="flex justify-center mt-10 mb-8">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md">
            Load More Stories
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogSpot;