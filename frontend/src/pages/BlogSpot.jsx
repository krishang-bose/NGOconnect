import React, { useState } from 'react';
import { 
  Heart, 
  User, 
  Calendar, 
  MessageCircle, 
  Send 
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

const BlogSpot = () => {
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
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto max-w-2xl px-4">
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


export default BlogSpot;