"use client";

import {
	CheckCircle,
	Clock,
	Users,
	Target,
	FileText,
	Award,
	ArrowRight,
	Star,
	BookOpen,
	PenTool,
	UserCheck,
	Shield,
	Quote,
	Zap,
	Globe,
} from 'lucide-react'

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-white rounded-lg ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }: CardProps) => (
  <div className={className}>
    {children}
  </div>
);

export default function LORServicePage() {
	const features = [
		{
			icon: UserCheck,
			title: 'Professional Tone',
			description: 'Letters written in appropriate academic or professional voice.',
		},
		{
			icon: Target,
			title: 'Customized Content',
			description: 'Tailored to highlight your specific strengths and achievements.',
		},
		{
			icon: Shield,
			title: 'Authentic Approach',
			description: 'Genuine recommendations that reflect real relationships.',
		},
		{
			icon: Award,
			title: 'Impact-Focused',
			description: 'Emphasizes measurable achievements and unique qualities.',
		},
	]

	const process = [
		{
			step: '1',
			title: 'Information Gathering',
			description: 'We collect details about your relationship with the recommender and achievements.',
		},
		{
			step: '2',
			title: 'Content Planning',
			description: 'Structure the letter to highlight your most relevant strengths.',
		},
		{
			step: '3',
			title: 'Professional Writing',
			description: 'Craft the letter in an authentic, professional tone.',
		},
		{
			step: '4',
			title: 'Quality Review',
			description: 'Multiple rounds of editing for clarity and impact.',
		},
		{
			step: '5',
			title: 'Final Delivery',
			description: 'Polished letter ready for your recommender\'s review and signature.',
		},
	]

	const benefits = [
		'Professional academic and industry language',
		'Specific examples and quantifiable achievements',
		'Appropriate tone for target institutions',
		'Multiple format options (email, letterhead, etc.)',
		'Quick turnaround times',
		'Confidential and secure process',
	]

	const testimonials = [
		{
			name: 'Dr. Anil Kumar',
			position: 'Professor, IIT Delhi',
			quote: 'The LOR drafts provided were excellently structured and helped me write compelling recommendations for my students.',
			rating: 5,
		},
		{
			name: 'Meera Patel',
			position: 'Manager, Tech Corp',
			quote: 'As a busy professional, having well-drafted LORs saved me time while ensuring quality recommendations for my team members.',
			rating: 5,
		},
		{
			name: 'Prof. Sarah Williams',
			position: 'Department Head, University of Cambridge',
			quote: 'The letters were professional, detailed, and perfectly captured the students\' strengths and potential.',
			rating: 5,
		},
	]

	const lorTypes = [
		{
			title: 'Academic LOR',
			description: 'For professors and academic supervisors',
			features: ['Research achievements', 'Academic performance', 'Intellectual curiosity', 'Scholarly potential'],
			icon: BookOpen,
			gradient: 'from-red-900 to-pink-700',
		},
		{
			title: 'Professional LOR',
			description: 'For employers and supervisors',
			features: ['Work performance', 'Leadership skills', 'Professional growth', 'Team collaboration'],
			icon: Users,
			gradient: 'from-red-800 to-red-600',
		},
		{
			title: 'Research LOR',
			description: 'For research supervisors and mentors',
			features: ['Research contributions', 'Analytical skills', 'Innovation ability', 'Technical expertise'],
			icon: Target,
			gradient: 'from-pink-800 to-red-700',
		},
	]

	const pricing = [
		{
			title: 'Standard LOR',
			price: '₹8,000',
			features: [
				'1 Letter of Recommendation',
				'Professional writing and editing',
				'Basic consultation',
				'2 rounds of revisions',
				'5-7 day delivery',
			],
		},
		{
			title: 'Premium LOR Package',
			price: '₹20,000',
			features: [
				'3 Letters of Recommendation',
				'Detailed consultation',
				'Customized for different recommenders',
				'Unlimited revisions',
				'Priority support',
				'3-5 day delivery',
			],
			popular: true,
		},
		{
			title: 'Executive LOR Suite',
			price: '₹35,000',
			features: [
				'5 Letters of Recommendation',
				'Comprehensive consultation',
				'Multiple formats and versions',
				'Unlimited revisions',
				'24/7 priority support',
				'Same-day delivery available',
				'Recommender guidance included',
			],
		},
	]

	return (
		<div className='min-h-screen bg-white pt-16'>
			<style jsx>{`
				.animate-fade-in {
					animation: fadeIn 0.8s ease-out;
				}
				.animate-slide-up {
					animation: slideUp 0.8s ease-out;
				}
				.animate-slide-in-left {
					animation: slideInLeft 1s ease-out;
				}
				.animate-slide-in-right {
					animation: slideInRight 1s ease-out;
				}
				.animate-bounce-in {
					animation: bounceIn 1s ease-out;
				}
				.stagger-1 { animation-delay: 0.1s; }
				.stagger-2 { animation-delay: 0.2s; }
				.stagger-3 { animation-delay: 0.3s; }
				.stagger-4 { animation-delay: 0.4s; }
				.stagger-5 { animation-delay: 0.5s; }
				.hover-lift {
					transition: all 0.3s ease;
				}
				.hover-lift:hover {
					transform: translateY(-8px);
					box-shadow: 0 20px 40px rgba(139, 38, 53, 0.15);
				}
				.hover-glow:hover {
					box-shadow: 0 0 30px rgba(139, 38, 53, 0.3);
				}
				.gradient-border {
					background: linear-gradient(white, white) padding-box,
					           linear-gradient(45deg, #8b2635, #490303ff) border-box;
					border: 2px solid transparent;
				}
				@keyframes fadeIn {
					from { opacity: 0; transform: translateY(20px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes slideUp {
					from { opacity: 0; transform: translateY(40px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes slideInLeft {
					from { opacity: 0; transform: translateX(-50px); }
					to { opacity: 1; transform: translateX(0); }
				}
				@keyframes slideInRight {
					from { opacity: 0; transform: translateX(50px); }
					to { opacity: 1; transform: translateX(0); }
				}
				@keyframes bounceIn {
					0% { opacity: 0; transform: scale(0.5); }
					50% { opacity: 1; transform: scale(1.1); }
					100% { opacity: 1; transform: scale(1); }
				}
			`}</style>

			{/* Hero Section - Enhanced with diagonal background */}
			<section className='py-24 bg-gradient-to-br from-gray-50 via-red-50 to-pink-50 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50'></div>
				<div className='absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-red-900 to-pink-600 opacity-10 rounded-full blur-3xl'></div>
				<div className='absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-red-800 to-red-600 opacity-10 rounded-full blur-3xl'></div>
				
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<div className='animate-slide-in-left'>
							<div className='inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-6'>
								<Zap className='h-4 w-4 mr-2' />
								Professional Writing Service
							</div>
							<h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight'>
								Letter of 
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-pink-700 block'>
									Recommendation
								</span>
								<span className='text-3xl md:text-4xl text-red-800 block mt-2'>Writing Service</span>
							</h1>
							<p className='text-xl text-gray-600 mb-10 leading-relaxed'>
								Transform your achievements into compelling narratives. Our expert writers craft 
								authentic recommendation letters that highlight your unique strengths and help 
								your recommenders create lasting impressions on admissions committees.
							</p>
							<div className='flex flex-col sm:flex-row gap-6'>
								<a
									href='/booking'
									className='bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 text-center hover-lift hover-glow shadow-lg'
								>
									Start Your LOR Journey
									<ArrowRight className='inline-block ml-2 h-5 w-5' />
								</a>
								<a
									href='/contact'
									className='border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 text-center hover-lift'
								>
									Free Consultation
								</a>
							</div>
						</div>
						<div className='animate-slide-in-right'>
							<div className='relative'>
								<div className='bg-white p-10 rounded-3xl shadow-2xl hover-lift border-t-4 border-red-900'>
									<div className='space-y-6'>
										<div className='flex items-center space-x-4'>
											<div className='h-12 w-12 bg-gradient-to-r from-red-900 to-red-700 rounded-full flex items-center justify-center'>
												<FileText className='h-6 w-6 text-white' />
											</div>
											<div className='h-4 bg-gradient-to-r from-red-200 to-red-100 rounded w-3/4'></div>
										</div>
										<div className='pl-16'>
											<div className='h-3 bg-gray-200 rounded w-full mb-3'></div>
											<div className='h-3 bg-gray-100 rounded w-5/6 mb-3'></div>
											<div className='h-3 bg-red-100 rounded w-4/5 mb-4'></div>
											<div className='h-6 bg-gradient-to-r from-red-900 to-red-700 rounded w-1/2 mb-4'></div>
											<div className='h-3 bg-gray-100 rounded w-full mb-2'></div>
											<div className='h-3 bg-gray-200 rounded w-4/5'></div>
										</div>
									</div>
								</div>
								<div className='absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce'></div>
								<div className='absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce stagger-2'></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* LOR Types - Enhanced with gradient cards */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-20 animate-fade-in'>
						<div className='inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-4'>
							<Globe className='h-4 w-4 mr-2' />
							Comprehensive Coverage
						</div>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Types of Letters We <span className='text-red-900'>Masterfully Create</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-4xl mx-auto'>
							From academic excellence to professional achievements, we craft recommendation 
							letters that speak to your unique journey and aspirations.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
						{lorTypes.map((type, index) => (
							<Card key={index} className={`overflow-hidden hover-lift animate-bounce-in stagger-${index + 1} group`}>
								<div className={`bg-gradient-to-b from-[#8b2635] to-[#450811] p-8 text-white relative overflow-hidden`}>
									<div className='absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16'></div>
									<type.icon className='h-16 w-16 text-white mb-6 relative z-10' />
									<h3 className='text-2xl font-bold mb-3 relative z-10'>
										{type.title}
									</h3>
									<p className='text-red-100 relative z-10 text-lg'>
										{type.description}
									</p>
								</div>
								<CardContent className='p-8'>
									<ul className='space-y-4'>
										{type.features.map((feature, featureIndex) => (
											<li key={featureIndex} className='flex items-center space-x-3'>
												<CheckCircle className='h-5 w-5 text-red-600 flex-shrink-0' />
												<span className='text-gray-700 font-medium'>{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Features - Alternating layout */}
			<section className='py-24 bg-gradient-to-br from-red-50 via-pink-50 to-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-20 animate-fade-in'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							What Makes Our Service <span className='text-red-900'>Extraordinary?</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-4xl mx-auto'>
							Beyond just writing—we craft authentic narratives that resonate with admissions committees 
							and hiring managers worldwide.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
						{features.map((feature, index) => (
							<div key={index} className={`flex items-start space-x-6 animate-slide-up stagger-${index + 1}`}>
								<div className='flex-shrink-0'>
									<div className='w-16 h-16 bg-gradient-to-r from-red-900 to-red-700 rounded-2xl flex items-center justify-center shadow-lg'>
										<feature.icon className='h-8 w-8 text-white' />
									</div>
								</div>
								<div>
									<h4 className='text-2xl font-bold text-gray-900 mb-4'>
										{feature.title}
									</h4>
									<p className='text-gray-600 leading-relaxed text-lg'>
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process - Timeline design */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-20 animate-fade-in'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Our <span className='text-red-900'>Proven</span> Process
						</h2>
						<p className='text-xl text-gray-600 max-w-4xl mx-auto'>
							From initial consultation to final delivery, we ensure every recommendation 
							letter reflects genuine insights and compelling narratives.
						</p>
					</div>
					<div className='relative'>
						{/* Timeline line */}
						<div className='absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-red-900 to-red-600 md:block hidden'></div>
						
						<div className='space-y-12'>
							{process.map((item, index) => (
								<div key={index} className={`flex items-center animate-slide-up stagger-${index + 1} ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
									<div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
										<Card className='hover-lift shadow-lg gradient-border'>
											<CardContent className='p-8'>
												<h4 className='text-2xl font-bold text-gray-900 mb-4'>
													{item.title}
												</h4>
												<p className='text-gray-600 leading-relaxed text-lg'>
													{item.description}
												</p>
											</CardContent>
										</Card>
									</div>
									<div className='flex-shrink-0 relative z-10'>
										<div className='w-20 h-20 bg-gradient-to-r from-red-900 to-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl hover-glow'>
											{item.step}
										</div>
									</div>
									<div className='flex-1 hidden md:block'></div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Benefits - Masonry layout */}
			<section className='py-24 bg-gradient-to-br from-gray-900 via-red-900 to-red-800 text-white relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5'></div>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='text-center mb-20 animate-fade-in'>
						<h2 className='text-4xl font-bold mb-6'>
							Why Professionals <span className='text-red-200'>Trust Us</span>
						</h2>
						<p className='text-xl text-red-100 max-w-4xl mx-auto'>
							Join thousands of satisfied clients who have secured their dream opportunities 
							with our expertly crafted recommendation letters.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{benefits.map((benefit, index) => (
							<div key={index} className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover-lift animate-slide-up stagger-${Math.floor(index / 2) + 1} border border-white border-opacity-20`}>
								<div className='flex items-start space-x-4'>
									<CheckCircle className='h-8 w-8 text-red-300 flex-shrink-0 mt-1' />
									<p className='text-[#4f010c] leading-relaxed text-lg font-medium'>{benefit}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials - Card carousel design */}
			<section className='py-24 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-20 animate-fade-in'>
						<div className='inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-4'>
							<Quote className='h-4 w-4 mr-2' />
							Success Stories
						</div>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							What <span className='text-red-900'>Recommenders</span> Say
						</h2>
						<p className='text-xl text-gray-600 max-w-4xl mx-auto'>
							Hear from professors and professionals who have experienced the difference 
							our expertly crafted recommendation letters make.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
						{testimonials.map((testimonial, index) => (
							<Card key={index} className={`hover-lift animate-slide-up stagger-${index + 1} shadow-lg relative overflow-hidden group`}>
								<div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 to-red-600'></div>
								<CardContent className='p-8'>
									<div className='flex items-center mb-6'>
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className='h-6 w-6 text-yellow-400 fill-current' />
										))}
									</div>
									<Quote className='h-8 w-8 text-red-300 mb-4' />
									<p className='text-gray-600 italic mb-6 leading-relaxed text-lg'>
										{testimonial.quote}
									</p>
									<div className='border-t pt-6'>
										<h4 className='font-bold text-gray-900 text-lg'>{testimonial.name}</h4>
										<p className='text-red-600 font-medium'>{testimonial.position}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Pricing - Enhanced with popular badge */}
			<section className='py-24 bg-gradient-to-br from-gray-50 to-red-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-20 animate-fade-in'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Choose Your <span className='text-red-900'>Success Package</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-4xl mx-auto'>
							Transparent pricing, exceptional value. Select the package that aligns 
							with your recommendation letter requirements.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
						{pricing.map((plan, index) => (
							<Card key={index} className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${plan.popular ? 'ring-4 ring-[#8b2635]/20 scale-105' : 'hover:-translate-y-2'}`}>
								{plan.popular && (
									<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
										<div className='bg-gradient-to-r from-[#8b2635] to-[#a73345] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg'>
											Most Popular
										</div>
									</div>
								)}
								<CardContent className={`p-10 ${plan.popular ? 'pt-16' : ''}`}>
									<h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.title}</h3>
									<div className='text-4xl font-bold text-red-900 mb-8'>{plan.price}</div>
									<ul className='space-y-4 mb-10'>
										{plan.features.map((feature, featureIndex) => (
											<li key={featureIndex} className='flex items-start space-x-3'>
												<CheckCircle className='h-6 w-6 text-red-600 flex-shrink-0 mt-1' />
												<span className='text-gray-600 font-medium'>{feature}</span>
											</li>
										))}
									</ul>
									<button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
										plan.popular
											? 'bg-gradient-to-r from-[#8b2635] to-[#a73345] hover:from-[#722030] hover:to-[#8b2635] text-white shadow-lg hover:shadow-xl transform hover:scale-105'
											: 'border-2 border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white'
									}`}>
										Choose Package
									</button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* FAQ - Accordion style */}
			<section className='py-24 bg-white'>
				<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-20 animate-fade-in'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							<span className='text-red-900'>Questions?</span> We Have Answers
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Everything you need to know about our LOR writing service.
						</p>
					</div>
					<div className='space-y-8'>
						{[
							{
								question: 'How do you ensure the LOR sounds authentic and genuine?',
								answer: 'We conduct detailed consultations to understand your unique relationship with the recommender and gather specific examples of your achievements. Our writers craft personalized content that reflects genuine interactions and experiences, ensuring authenticity.'
							},
							{
								question: 'Can you adapt letters for different types of programs and institutions?',
								answer: 'Absolutely! We customize each letter based on the specific requirements of academic programs, professional schools, scholarships, and job applications. Our writers understand the nuances of different fields and tailor content accordingly.'
							},
							{
								question: 'What detailed information do you need to create compelling LORs?',
								answer: 'We need comprehensive details about your recommender, the nature of your relationship, specific projects you worked on together, your achievements, target program requirements, and any unique qualities you want highlighted.'
							},
							{
								question: 'Do you provide guidance and support to recommenders?',
								answer: 'Yes! Our Executive package includes comprehensive guidance for recommenders on how to personalize the letters, submission procedures, and best practices for making the strongest impact on selection committees.'
							}
						].map((faq, index) => (
							<Card key={index} className={`hover-lift animate-slide-up stagger-${index + 1} shadow-lg border-l-4 border-red-900`}>
								<CardContent className='p-8'>
									<h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center'>
										<div className='w-2 h-2 bg-red-600 rounded-full mr-4'></div>
										{faq.question}
									</h3>
									<p className='text-gray-600 leading-relaxed text-lg pl-6'>{faq.answer}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section - Enhanced with gradient and animations */}
			<section className='py-24 bg-gradient-to-r from-red-900 via-red-800 to-red-900 relative overflow-hidden'>
				<div className='absolute inset-0 bg-black bg-opacity-20'></div>
				<div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-[#a30018] to-red-500'></div>
				
				{/* Floating background elements */}
				<div className='absolute top-20 left-10 w-40 h-40 bg-white bg-opacity-5 rounded-full blur-xl'></div>
				<div className='absolute bottom-20 right-10 w-60 h-60 bg-red-500 bg-opacity-10 rounded-full blur-2xl'></div>
				<div className='absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500 bg-opacity-5 rounded-full blur-lg'></div>
				
				<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in'>
					<div className='mb-8'>
						<div className='inline-flex items-center px-6 py-3 bg-[#731f2b] bg-opacity-20 backdrop-blur-sm rounded-full text-red-100 font-medium mb-6 hover-lift'>
							<Zap className='h-5 w-5 mr-2' />
							Transform Your Future Today
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-white mb-8'>
							Ready to Create <span className='text-red-200'>Powerful</span> 
							<br />Recommendation Letters?
						</h2>
						<p className='text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
							Don't let weak recommendation letters hold you back. Partner with us to create 
							compelling narratives that showcase your true potential and open doors to your dream opportunities.
						</p>
					</div>
					<div className='flex flex-col sm:flex-row gap-8 justify-center items-center'>
						<a
							href='/booking'
							className='bg-white text-red-900 hover:bg-red-50 font-bold px-12 py-5 rounded-xl transition-all duration-300 hover-lift shadow-2xl text-lg group hover-glow'
						>
							Book Your Consultation
							<ArrowRight className='inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform' />
						</a>
						<a
							href='/contact'
							className='border-2 border-white text-white hover:bg-white hover:text-red-900 font-bold px-12 py-5 rounded-xl transition-all duration-300 hover-lift text-lg'
						>
							Get Free Quote
						</a>
					</div>
					
					{/* Additional trust elements */}
					<div className='mt-12 pt-8 border-t border-red-700 border-opacity-30'>
						<p className='text-red-200 text-sm font-medium mb-4'>TRUSTED BY STUDENTS WORLDWIDE</p>
						<div className='flex flex-wrap justify-center items-center gap-8 text-red-300'>
							<span className='flex items-center text-sm'>
								<Shield className='h-4 w-4 mr-2' />
								Secure & Confidential
							</span>
							<span className='flex items-center text-sm'>
								<Award className='h-4 w-4 mr-2' />
								Expert Writers
							</span>
							<span className='flex items-center text-sm'>
								<Clock className='h-4 w-4 mr-2' />
								Quick Turnaround
							</span>
						</div>
					</div>
				</div>
			</section>
		</div> 
	)
}