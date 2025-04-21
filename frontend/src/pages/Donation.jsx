import React, { useState } from 'react';
import { 
  CreditCard, 
  Calendar, 
  Lock, 
  DollarSign, 
  Heart, 
  Gift, 
  Clock, 
  CheckCircle,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/footer';

const DonationOption = ({ icon: Icon, title, description, selected, onClick }) => (
  <div 
    className={`p-6 rounded-lg transition-all cursor-pointer ${
      selected 
        ? "bg-green-200 border-2 border-green-600 shadow-md" 
        : "bg-white border-2 border-green-200 hover:border-green-400"
    }`}
    onClick={onClick}
  >
    <div className="flex items-start">
      <div className="bg-green-100 p-3 rounded-full mr-4">
        <Icon className="text-green-600" size={24} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-green-800 mb-1">{title}</h3>
        <p className="text-green-700 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const AmountButton = ({ amount, selected, onClick }) => (
  <button
    className={`py-3 px-6 rounded-lg font-bold transition-all ${
      selected
        ? "bg-green-600 text-white"
        : "bg-green-100 text-green-800 hover:bg-green-200"
    }`}
    onClick={onClick}
  >
    ${amount}
  </button>
);

const DonationPage = () => {
  const [donationType, setDonationType] = useState('oneTime');
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [ngoCategory, setNgoCategory] = useState('healthcare');
  
  // Form state
  const [formState, setFormState] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    email: '',
    wantReceipt: false
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Simulated processing states
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [donationComplete, setDonationComplete] = useState(false);

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    if (e.target.value) {
      setDonationAmount('custom');
    }
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Basic validation rules
    if (!formState.cardName.trim()) newErrors.cardName = "Cardholder name is required";
    if (!formState.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
    else if (!/^\d{16}$/.test(formState.cardNumber.replace(/\s/g, ''))) 
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    
    if (!formState.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required";
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formState.expiryDate)) 
      newErrors.expiryDate = "Please use MM/YY format";
    
    if (!formState.cvv.trim()) newErrors.cvv = "CVV is required";
    else if (!/^\d{3,4}$/.test(formState.cvv)) newErrors.cvv = "CVV must be 3 or 4 digits";
    
    if (!formState.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formState.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Please enter a valid email address";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = document.getElementById(Object.keys(errors)[0]);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Simulate processing
    setIsProcessing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessModal(true);
      
      // After showing success modal, simulate redirect to thank you page
      setTimeout(() => {
        setShowSuccessModal(false);
        setDonationComplete(true);
      }, 3000);
    }, 2000);
  };

  const donationTypes = [
    {
      id: 'oneTime',
      icon: Gift,
      title: "One-time Donation",
      description: "Make a single donation to support an NGO's mission"
    },
    {
      id: 'monthly',
      icon: Clock,
      title: "Monthly Giving",
      description: "Provide sustainable support through recurring donations"
    },
  ];

  const categories = [
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'environmental', name: 'Environmental' },
    { id: 'education', name: 'Education' },
    { id: 'community', name: 'Community Development' },
  ];

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Handle card number input to format it
  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormState(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
    
    if (errors.cardNumber) {
      setErrors(prev => ({
        ...prev,
        cardNumber: null
      }));
    }
  };

  // Handle expiry date formatting
  const handleExpiryChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, '');
    
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    
    setFormState(prev => ({
      ...prev,
      expiryDate: value
    }));
    
    if (errors.expiryDate) {
      setErrors(prev => ({
        ...prev,
        expiryDate: null
      }));
    }
  };

  // If donation is complete, show thank you page
  if (donationComplete) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <Header />
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center mt-16">
          <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-4">Thank You!</h1>
          <p className="text-green-700 mb-6">
            Your donation of ${donationAmount === 'custom' ? customAmount : donationAmount} has been successfully processed. We've sent a confirmation email to {formState.email}.
          </p>
          <p className="text-green-600 font-medium mb-6">
            Transaction ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
          </p>
          <button 
            className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      {/* Add Header component */}
      <Header />
      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <div className="animate-pulse mb-4">
              <CheckCircle className="mx-auto text-green-600" size={48} />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Processing Your Donation</h3>
            <p className="text-green-700">
              Please wait while we securely process your donation...
            </p>
          </div>
        </div>
      )}

      {/* Hero Section - REDUCED SIZE */}
      <div className="bg-green-600 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Support Meaningful Change
          </h1>
          <p className="text-lg mb-2 max-w-2xl mx-auto text-green-100">
            Your donation empowers NGOs to create lasting impact in communities around the world.
          </p>
          <div className="flex items-center justify-center">
            <Heart className="text-green-300 mr-2" size={20} />
            <span className="text-green-200 text-sm">100% of your donation goes directly to your chosen NGO</span>
          </div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-100 p-6 border-b border-green-200">
            <h2 className="text-2xl font-bold text-green-800">Make Your Donation</h2>
            <p className="text-green-700">Fill out the form below to complete your donation</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Donation Type */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Select Donation Type</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {donationTypes.map((type) => (
                  <DonationOption
                    key={type.id}
                    icon={type.icon}
                    title={type.title}
                    description={type.description}
                    selected={donationType === type.id}
                    onClick={() => setDonationType(type.id)}
                  />
                ))}
              </div>
            </div>

            {/* Select Category */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Select NGO Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.id}
                    className={`py-2 px-4 rounded-lg transition-all ${
                      ngoCategory === category.id
                        ? "bg-green-600 text-white"
                        : "bg-green-100 text-green-800 hover:bg-green-200"
                    }`}
                    onClick={() => setNgoCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Amount */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Select Donation Amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[25, 50, 100, 250].map((amount) => (
                  <AmountButton
                    key={amount}
                    amount={amount}
                    selected={donationAmount === amount}
                    onClick={() => {
                      setDonationAmount(amount);
                      setCustomAmount('');
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center mt-4">
                <div className="relative flex-grow">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <DollarSign className="text-green-600" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Custom Amount"
                    className="w-full p-4 pl-12 border-2 border-green-200 rounded-lg"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Payment Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-green-700 mb-2" htmlFor="cardName">
                    Cardholder Name
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    className={`w-full p-4 border-2 rounded-lg ${
                      errors.cardName ? "border-red-400" : "border-green-200"
                    }`}
                    placeholder="Enter cardholder name"
                    value={formState.cardName}
                    onChange={handleInputChange}
                  />
                  {errors.cardName && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" /> {errors.cardName}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-green-700 mb-2" htmlFor="cardNumber">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      id="cardNumber"
                      type="text"
                      className={`w-full p-4 pl-12 border-2 rounded-lg ${
                        errors.cardNumber ? "border-red-400" : "border-green-200"
                      }`}
                      placeholder="1234 5678 9012 3456"
                      value={formState.cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength={19}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <CreditCard className="text-green-600" size={20} />
                    </div>
                  </div>
                  {errors.cardNumber && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" /> {errors.cardNumber}
                    </p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-700 mb-2" htmlFor="expiryDate">
                      Expiry Date
                    </label>
                    <div className="relative">
                      <input
                        id="expiryDate"
                        type="text"
                        className={`w-full p-4 pl-12 border-2 rounded-lg ${
                          errors.expiryDate ? "border-red-400" : "border-green-200"
                        }`}
                        placeholder="MM/YY"
                        value={formState.expiryDate}
                        onChange={handleExpiryChange}
                        maxLength={5}
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Calendar className="text-green-600" size={20} />
                      </div>
                    </div>
                    {errors.expiryDate && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={16} className="mr-1" /> {errors.expiryDate}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-green-700 mb-2" htmlFor="cvv">
                      CVV
                    </label>
                    <div className="relative">
                      <input
                        id="cvv"
                        type="text"
                        className={`w-full p-4 pl-12 border-2 rounded-lg ${
                          errors.cvv ? "border-red-400" : "border-green-200"
                        }`}
                        placeholder="123"
                        value={formState.cvv}
                        onChange={handleInputChange}
                        maxLength={4}
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Lock className="text-green-600" size={20} />
                      </div>
                    </div>
                    {errors.cvv && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={16} className="mr-1" /> {errors.cvv}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Donor Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-700 mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className={`w-full p-4 border-2 rounded-lg ${
                        errors.firstName ? "border-red-400" : "border-green-200"
                      }`}
                      placeholder="Enter first name"
                      value={formState.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={16} className="mr-1" /> {errors.firstName}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-green-700 mb-2" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className={`w-full p-4 border-2 rounded-lg ${
                        errors.lastName ? "border-red-400" : "border-green-200"
                      }`}
                      placeholder="Enter last name"
                      value={formState.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={16} className="mr-1" /> {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-green-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full p-4 border-2 rounded-lg ${
                      errors.email ? "border-red-400" : "border-green-200"
                    }`}
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Checkbox for tax receipt */}
            <div className="mb-8">
              <label className="flex items-start cursor-pointer">
                <input 
                  type="checkbox" 
                  id="wantReceipt"
                  className="mt-1 mr-2" 
                  checked={formState.wantReceipt}
                  onChange={handleInputChange}
                />
                <span className="text-green-800">
                  I would like to receive a tax receipt for my donation
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className={`w-full text-white py-4 px-6 rounded-lg flex items-center justify-center transition-colors ${
                isProcessing 
                  ? "bg-green-400 cursor-not-allowed" 
                  : "bg-green-600 hover:bg-green-700"
              }`}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="text-lg font-bold mr-2">Processing...</span>
                  <div className="animate-spin rounded-full h-5 w-5 border-4 border-white border-t-green-200"></div>
                </>
              ) : (
                <>
                  <span className="text-lg font-bold mr-2">Complete Donation</span>
                  <CheckCircle size={24} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Donation Benefits */}
      <div className="bg-green-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              The Impact of Your Donation
            </h2>
            <p className="text-green-700 max-w-2xl mx-auto">
              Your generosity creates real change for NGOs and the communities they serve
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <Heart className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Direct Support</h3>
              <p className="text-green-700">
                100% of your donation goes directly to your chosen NGO, helping them fund critical projects and initiatives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <Gift className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Tax Benefits</h3>
              <p className="text-green-700">
                Your donations may be tax-deductible. We provide receipts for all contributions to make tax filing easier.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Transparent Tracking</h3>
              <p className="text-green-700">
                Track how your donation is being used and see the real-world impact of your generosity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-3xl font-bold text-green-900 mb-4">
              Looking for Another Way to Help?
            </h3>
            <p className="text-green-700 max-w-xl">
              Explore volunteer opportunities or start a fundraising campaign to support your favorite NGOs.
            </p>
          </div>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg flex items-center hover:bg-green-700 transition-colors">
            Explore Options <ArrowRight className="ml-2" size={24} />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonationPage;