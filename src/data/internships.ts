import { Internship, Testimonial } from '../types';

export const sampleInternships: Internship[] = [
  {
    id: '1',
    title: 'Digital Marketing Assistant',
    organization: 'Ministry of MSME',
    location: 'Delhi',
    duration: '6 months',
    stipend: '₹15,000/month',
    matchPercentage: 95,
    sector: 'Government',
    requirements: ['12th Pass', 'Basic Computer Skills', 'Hindi/English'],
  },
  {
    id: '2',
    title: 'Rural Development Trainee',
    organization: 'Gram Panchayat',
    location: 'Maharashtra',
    duration: '3 months',
    stipend: '₹12,000/month',
    matchPercentage: 88,
    sector: 'Rural Development',
    requirements: ['Graduate', 'Community Engagement', 'Local Language'],
  },
  {
    id: '3',
    title: 'Healthcare Support',
    organization: 'AIIMS',
    location: 'Bangalore',
    duration: '4 months',
    stipend: '₹18,000/month',
    matchPercentage: 82,
    sector: 'Healthcare',
    requirements: ['12th Pass', 'Patient Care', 'English Communication'],
  },
  {
    id: '4',
    title: 'Education Coordinator',
    organization: 'Sarva Shiksha Abhiyan',
    location: 'Gujarat',
    duration: '6 months',
    stipend: '₹14,000/month',
    matchPercentage: 76,
    sector: 'Education',
    requirements: ['Graduate', 'Teaching Skills', 'Local Language'],
  },
  {
    id: '5',
    title: 'IT Support Intern',
    organization: 'National Informatics Centre',
    location: 'Hyderabad',
    duration: '6 months',
    stipend: '₹20,000/month',
    matchPercentage: 73,
    sector: 'Technology',
    requirements: ['Graduate', 'Computer Skills', 'Technical Support'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Rural Uttar Pradesh',
    internshipTitle: 'Digital Marketing Assistant',
    quote:
      ' I got new skills from this internship and also got a good job. The process was very easy.',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '2',
    name: 'Ravi Kumar',
    location: 'Tribal Odisha',
    internshipTitle: 'Rural Development Trainee',
    quote:
      'I got a chance to help my community. The government scheme is very helpful.',
    avatar:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    id: '3',
    name: 'Meera Devi',
    location: 'Mumbai Slum',
    internshipTitle: 'Healthcare Support',
    quote:
      'By working in the hospital, I was able to make a career in the medical field. My life has changed.',
    avatar:
      'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
];
