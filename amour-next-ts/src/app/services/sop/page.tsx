"use client";

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
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
	Zap,
	Brain,
	Trophy,
	Shield,
	Globe,
	MessageSquare,
	Edit3,
	Lightbulb,
	TrendingUp,
	UserCheck
} from 'lucide-react'

export default function SOPServicePage() {
	const features = [
		{
			icon: Target,
			title: 'Strategic Narrative Design',
			description: 'Craft compelling storylines that align perfectly with your target program\'s values and requirements.',
		},
		{
			icon: Brain,
			title: 'Psychological Impact',
			description: 'Leverage persuasive writing techniques that create lasting impressions on admissions committees.',
		},
		{
			icon: Globe,
			title: 'Global University Expertise',
			description: 'Deep knowledge of admission standards across top universities worldwide.',
		},
		{
			icon: Edit3,
			title: 'Expert Craftsmanship',
			description: 'Professional editors with advanced degrees refine every sentence for maximum impact.',
		},
	]

	const process = [
		{
			step: '1',
			title: 'Deep Discovery',
			description: 'Comprehensive consultation to understand your academic journey, research passions, and career aspirations.',
		},
		{
			step: '2',
			title: 'Strategic Planning',
			description: 'Develop a compelling narrative framework that showcases your unique value proposition.',
		},
		{
			step: '3',
			title: 'Expert Creation',
			description: 'Our master writers craft your SOP using proven psychological persuasion techniques.',
		},
		{
			step: '4',
			title: 'Precision Refinement',
			description: 'Multiple expert reviews ensure every word serves your admission goals perfectly.',
		},
		{
			step: '5',
			title: 'Success Delivery',
			description: 'Receive your polished, admission-ready SOP with confidence-building guarantees.',
		},
	]

	const benefits = [
		{
			icon: Shield,
			text: 'Personalized approach tailored to your unique academic story'
		},
		{
			icon: Trophy,
			text: 'Expert knowledge of university-specific admission criteria'
		},
		{
			icon: MessageSquare,
			text: 'Professional editing with psychological persuasion techniques'
		},
		{
			icon: UserCheck,
			text: 'Unlimited revisions until you achieve complete satisfaction'
		},
		{
			icon: Clock,
			text: 'Express delivery options to meet urgent application deadlines'
		},
		{
			icon: Lightbulb,
			text: 'Confidentiality and privacy protection guaranteed at all times'
		}
	]

	const testimonials = [
		{
			name: 'Arjun Patel',
			program: 'MS Data Science, MIT',
			quote: 'The SOP they crafted was a masterpiece. It perfectly captured my research passion and secured my dream admission to MIT.',
			rating: 5,
		},
		{
			name: 'Kavya Reddy',
			program: 'PhD Neuroscience, Cambridge',
			quote: 'Their deep understanding of what Cambridge looks for was incredible. The SOP showcased my research potential beautifully.',
			rating: 5,
		},
		{
			name: 'Michael Chen',
			program: 'MBA, Wharton',
			quote: 'Working with this team was transformative. They helped me articulate my leadership vision in ways I never imagined possible.',
			rating: 5,
		},
	]

	const pricing = [
		{
			title: 'Essential SOP',
			price: '₹18,000',
			features: [
				'1-2 page Statement of Purpose',
				'One comprehensive consultation session',
				'Professional writing and expert editing',
				'2 strategic revision rounds',
				'7-10 day standard delivery',
			],
		},
		{
			title: 'Premium SOP',
			price: '₹28,000',
			features: [
				'2-3 page comprehensive Statement of Purpose',
				'Extended consultation with strategy session',
				'In-depth program research and customization',
				'Unlimited revision rounds',
				'Priority expert support',
				'5-7 day expedited delivery',
			],
			popular: true,
		},
		{
			title: 'Elite SOP',
			price: '₹42,000',
			features: [
				'Comprehensive SOP mastery package',
				'Multiple strategic consultation sessions',
				'Program-specific customization for 3 universities',
				'Unlimited revisions with senior editors',
				'24/7 priority support access',
				'3-5 day express delivery guarantee',
				'LinkedIn profile optimization bonus',
			],
		},
	]

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<section className='pt-20 pb-20 bg-gradient-to-br from-[#8b2635]/5 to-red-50 relative overflow-hidden'>
				{/* Background decorative elements */}
				<div className="absolute top-10 right-10 w-32 h-32 bg-[#8b2635] bg-opacity-5 rounded-full blur-xl"></div>
				<div className="absolute bottom-20 left-10 w-48 h-48 bg-red-300 bg-opacity-10 rounded-full blur-2xl"></div>
				
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='animate-fade-in'>
							<div className='inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-6'>
								<Zap className='h-4 w-4 mr-2' />
								Professional SOP Writing Service
							</div>
							<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
								Statement of
								<span className='text-[#8b2635] block'>Purpose Mastery</span>
							</h1>
							<p className='text-xl text-gray-600 mb-8 leading-relaxed'>
								Transform your academic dreams into compelling narratives that captivate admissions committees. Our expert writers craft SOPs that don't just tell your story – they make it unforgettable.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<a
									href='/booking'
									className='bg-gradient-to-r from-[#8b2635] to-[#a73345] hover:from-[#722030] hover:to-[#8b2635] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center'
								>
									Start Your Journey
									<ArrowRight className='inline-block ml-2 h-5 w-5' />
								</a>
								<a
									href='/contact'
									className='border-2 border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-center'
								>
									Get Free Consultation
								</a>
							</div>
						</div>
						<div className='animate-slide-up relative'>
							<div className="absolute inset-0 bg-gradient-to-r from-[#8b2635]/20 to-transparent rounded-2xl blur-xl"></div>
							<div className='relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100'>
								<div className='flex items-center mb-6'>
									<div className='w-12 h-12 bg-[#8b2635] rounded-full flex items-center justify-center mr-4'>
										<FileText className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='text-lg font-bold text-gray-900'>Premium SOP Sample</h3>
										<p className='text-sm text-gray-600'>See the difference quality makes</p>
									</div>
								</div>
								<div className='space-y-3 text-sm text-gray-600'>
									<p className='bg-gray-50 p-3 rounded-lg italic'>
										"My passion for artificial intelligence began not in a classroom, but in my grandmother's kitchen, where I watched her struggle with technology that could have made her life easier..."
									</p>
									<div className='flex items-center text-[#8b2635] font-medium'>
										<TrendingUp className='h-4 w-4 mr-2' />
										Compelling opening that creates emotional connection
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What We Offer */}
			<section className='py-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							What Makes Our <span className="text-[#8b2635]">SOP Service</span> Exceptional?
						</h2>
						<p className='text-xl text-gray-600 max-w-4xl mx-auto'>
							We combine advanced psychological persuasion techniques with deep admissions expertise to create SOPs that transform applications into acceptances.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{features.map((feature, index) => (
							<Card key={index} className='group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
								<CardContent className='p-8 text-center'>
									<div className='w-16 h-16 bg-gradient-to-r from-[#8b2635] to-[#a73345] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform'>
										<feature.icon className='h-8 w-8 text-white' />
									</div>
									<h4 className='text-xl font-bold text-gray-900 mb-4'>
										{feature.title}
									</h4>
									<p className='text-gray-600 leading-relaxed'>
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Our Process */}
			<section className='py-24 bg-gradient-to-br from-gray-50 to-red-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Our Proven <span className="text-[#8b2635]">Success Process</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-4xl mx-auto'>
							We follow a meticulous methodology designed to extract your unique story and transform it into admission committee gold.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
						{process.map((item, index) => (
							<Card key={index} className='group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
								<CardContent className='p-8 text-center'>
									<div className='w-16 h-16 bg-gradient-to-r from-[#8b2635] to-[#a73345] text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform'>
										{item.step}
									</div>
									<h4 className='text-lg font-bold text-gray-900 mb-4'>
										{item.title}
									</h4>
									<p className='text-gray-600 leading-relaxed'>
										{item.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-20 bg-gradient-to-br from-[#8b2635]/5 to-red-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Competitive <span className="text-[#8b2635]">Advantages</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Experience the transformative power of professionally crafted psychological persuasion.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{benefits.map((benefit, index) => {
							const BenefitIcon = benefit.icon;
							return (
								<div
									key={index}
									className="flex items-center gap-4 p-4 rounded-xl shadow-lg bg-white"
								>
									<div className="bg-red-100 rounded-full p-2 flex-shrink-0">
										<BenefitIcon className="h-6 w-6 text-red-600" />
									</div>
									<p className="text-gray-700 leading-relaxed font-medium">
										{benefit.text}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className='py-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Success <span className="text-[#8b2635]">Stories</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-4xl mx-auto'>
							Discover how our expertly crafted SOPs have opened doors to the world's most prestigious universities.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial, index) => (
							<Card key={index} className='group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'>
								<CardContent className='p-8'>
									<div className='flex items-center mb-6'>
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className='h-5 w-5 text-yellow-400 fill-current' />
										))}
									</div>
									<p className='text-gray-600 italic mb-6 leading-relaxed text-lg'>
										"{testimonial.quote}"
									</p>
									<div className='border-t pt-4'>
										<h4 className='font-bold text-gray-900 text-lg'>{testimonial.name}</h4>
										<p className='text-[#8b2635] font-medium'>{testimonial.program}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-20 animate-fade-in">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Choose Your <span className="text-[#8b2635]">Success Package</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-4xl mx-auto">
							Transparent pricing, exceptional value. Select the package that aligns with your SOP requirements and timeline.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{pricing.map((plan, index) => (
							<Card
								key={index}
								className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${
									plan.popular
										? "ring-4 ring-[#8b2635]/20 scale-105"
										: "hover:-translate-y-2"
								}`}
							>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<div className="bg-gradient-to-r from-[#8b2635] to-[#a73345] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
											Most Popular
										</div>
									</div>
								)}
								<CardContent className={`p-10 ${plan.popular ? "pt-16" : ""}`}>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										{plan.title}
									</h3>
									<div className="text-4xl font-bold text-[#8b2635] mb-8">
										{plan.price}
									</div>
									<ul className="space-y-4 mb-10">
										{plan.features.map((feature, featureIndex) => (
											<li
												key={featureIndex}
												className="flex items-start space-x-3"
											>
												<CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
												<span className="text-gray-600 font-medium">
													{feature}
												</span>
											</li>
										))}
									</ul>
									<button
										className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
											plan.popular
												? "bg-gradient-to-r from-[#8b2635] to-[#a73345] hover:from-[#722030] hover:to-[#8b2635] text-white shadow-lg hover:shadow-xl transform hover:scale-105"
												: "border-2 border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white"
										}`}
									>
										Choose Package
									</button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-24'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Frequently Asked <span className="text-[#8b2635]">Questions</span>
						</h2>
						<p className='text-xl text-gray-600'>
							Get answers to common queries about our SOP writing process.
						</p>
					</div>
					<div className='space-y-6'>
						{[
							{
								question: 'How do you ensure my SOP stands out from thousands of others?',
								answer: 'We use advanced narrative psychology and university-specific research to craft unique stories that showcase your individual journey, research passions, and future potential in ways that resonate with each specific admissions committee.'
							},
							{
								question: 'What makes your writers qualified to craft academic SOPs?',
								answer: 'Our team consists of PhD holders, former admissions committee members, and professional writers with extensive experience in academic writing. They understand both the technical requirements and psychological impact needed for successful SOPs.'
							},
							{
								question: 'How many universities can you customize my SOP for?',
								answer: 'Our Premium package includes customization for one university, while our Elite package covers up to three universities. We can also create additional customized versions at competitive rates.'
							},
							{
								question: 'Do you guarantee admission with your SOPs?',
								answer: 'While we cannot guarantee admission (as many factors influence decisions), we do guarantee that your SOP will be professionally crafted, compelling, and optimized for maximum impact. Our track record speaks for itself with numerous successful admissions.'
							},
							{
								question: 'What if I\'m not satisfied with the final SOP?',
								answer: 'We offer unlimited revisions on our Premium and Elite packages, and multiple revision rounds on all packages. Our goal is your complete satisfaction and admission success.'
							}
						].map((faq, index) => (
							<Card key={index} className='border-0 shadow-lg hover:shadow-xl transition-all duration-300'>
								<CardContent className='p-8'>
									<h3 className='text-xl font-bold text-gray-900 mb-4'>{faq.question}</h3>
									<p className='text-gray-600 leading-relaxed text-lg'>{faq.answer}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-gradient-to-r from-red-900 via-[#8b2635] to-red-900 relative overflow-hidden">
				<div className="absolute inset-0 bg-black bg-opacity-20"></div>
				<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-[#a30018] to-red-500"></div>

				{/* Floating background elements */}
				<div className="absolute top-20 left-10 w-40 h-40 bg-white bg-opacity-5 rounded-full blur-xl"></div>
				<div className="absolute bottom-20 right-10 w-60 h-60 bg-red-500 bg-opacity-10 rounded-full blur-2xl"></div>
				<div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500 bg-opacity-5 rounded-full blur-lg"></div>

				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
					<div className="mb-8">
						<div className="inline-flex items-center px-6 py-3 bg-[#731f2b] bg-opacity-20 backdrop-blur-sm rounded-full text-red-100 font-medium mb-6">
							<Zap className="h-5 w-5 mr-2" />
							Transform Your Academic Future Today
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
							Ready to <span className="text-red-200">Craft</span>
							<br /> Your Success Story?
						</h2>
						<p className="text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed">
							Let's create a Statement of Purpose that doesn't just get you noticed – it gets you remembered, respected, and ultimately, accepted.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
						<a
							href="/booking"
							className="bg-white text-[#8b2635] hover:bg-red-50 font-bold px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg group"
						>
							Book Your Consultation
							<ArrowRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
						</a>
						<a
							href="/contact"
							className="border-2 border-white text-white hover:bg-white hover:text-[#8b2635] font-bold px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
						>
							Get Free Quote
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}