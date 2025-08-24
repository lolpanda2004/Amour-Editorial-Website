'use client';

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
	GraduationCap,
	Shield,
	Search,
	TrendingUp,
	MessageCircle,
	Calendar,
	Zap,
	Globe,
	Database,
	Filter
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TranscriptsServicePage() {
	const [isVisible, setIsVisible] = useState(false)
	
	useEffect(() => {
		setIsVisible(true)
	}, [])

	const features = [
		{
			icon: Search,
			title: 'Academic Deep Dive',
			description: 'Comprehensive forensic analysis of your academic records with enhancement roadmap.',
		},
		{
			icon: TrendingUp,
			title: 'GPA Amplification',
			description: 'Strategic presentation techniques to maximize your academic profile impact.',
		},
		{
			icon: Shield,
			title: 'Verification Mastery',
			description: 'End-to-end support for transcript verification and authentication processes.',
		},
		{
			icon: Target,
			title: 'University Alignment',
			description: 'Precise matching of your transcripts to specific program requirements.',
		},
	]

	const transcriptServices = [
		{
			title: 'Academic Record Forensics',
			description: 'Deep-dive analysis with actionable enhancement strategies',
			features: [
				'Multi-dimensional record assessment',
				'GPA optimization pathways',
				'Course relevance mapping',
				'Strategic improvement blueprint'
			],
			icon: Search,
			color: 'from-rose-50 to-red-50',
			accent: '#8b2635'
		},
		{
			title: 'Professional Presentation',
			description: 'World-class formatting and strategic organization',
			features: [
				'International standard formatting',
				'Visual hierarchy optimization',
				'Academic storytelling structure',
				'Multi-system grade clarity'
			],
			icon: FileText,
			color: 'from-amber-50 to-orange-50',
			accent: '#d97706'
		},
		{
			title: 'Global Credential Bridge',
			description: 'Seamless integration with international evaluation systems',
			features: [
				'WES/ECA application mastery',
				'Document orchestration',
				'Process acceleration support',
				'Success timeline management'
			],
			icon: Globe,
			color: 'from-emerald-50 to-green-50',
			accent: '#059669'
		},
	]

	const process = [
		{
			step: '01',
			title: 'Academic Audit',
			description: 'Comprehensive examination and gap identification of your academic portfolio.',
			icon: Search
		},
		{
			step: '02',
			title: 'Strategic Analysis',
			description: 'Identify optimization opportunities and competitive positioning strategies.',
			icon: Target
		},
		{
			step: '03',
			title: 'Enhancement Blueprint',
			description: 'Develop comprehensive plan for maximum academic impact presentation.',
			icon: FileText
		},
		{
			step: '04',
			title: 'Professional Execution',
			description: 'Implement world-class formatting and presentation standards.',
			icon: Award
		},
		{
			step: '05',
			title: 'Quality Assurance',
			description: 'Rigorous verification against target institution requirements.',
			icon: Shield
		},
	]

	const benefits = [
		{ text: 'World-class transcript formatting and strategic presentation', icon: Star },
		{ text: 'Advanced GPA calculation with methodology transparency', icon: TrendingUp },
		{ text: 'International course equivalency documentation', icon: Globe },
		{ text: 'Multi-university format compatibility assurance', icon: Database },
		{ text: 'Premium credential evaluation service integration', icon: Award },
		{ text: 'Authentication and verification process mastery', icon: Shield },
	]

	const testimonials = [
		{
			name: 'Ramesh Patel',
			program: 'MS Engineering, University of Toronto',
			quote: 'The transcript transformation was incredible. They turned my complex Indian engineering degree into a clear, compelling academic story that Canadian universities immediately understood.',
			rating: 5,
			flag: '🇮🇳→🇨🇦'
		},
		{
			name: 'Maria Garcia',
			program: 'MBA, INSEAD',
			quote: 'Their WES mastery saved me months. Every document was perfect, every process streamlined. The attention to detail was phenomenal.',
			rating: 5,
			flag: '🇪🇸→🇫🇷'
		},
		{
			name: 'Ahmed Hassan',
			program: 'PhD Computer Science, MIT',
			quote: 'The academic presentation was so professional that MIT\'s admissions committee specifically complimented my transcript clarity during the interview.',
			rating: 5,
			flag: '🇪🇬→🇺🇸'
		},
	]

	const pricing = [
		{
			title: 'Academic Analysis',
			price: '₹6,500',
			originalPrice: '₹8,000',
			features: [
				'Comprehensive transcript audit',
				'GPA verification & optimization',
				'Strategic formatting recommendations',
				'1 round of expert revisions',
				'5-7 day premium delivery',
			],
			popular: false
		},
		{
			title: 'Professional Transform',
			price: '₹15,500',
			originalPrice: '₹20,000',
			features: [
				'Complete transcript metamorphosis',
				'World-class professional formatting',
				'International course equivalency docs',
				'WES/ECA preparation mastery',
				'Unlimited expert revisions',
				'3-5 day priority delivery',
			],
			popular: true,
		},
		{
			title: 'Global Elite Package',
			price: '₹28,000',
			originalPrice: '₹35,000',
			features: [
				'Comprehensive academic portfolio',
				'Multi-format version creation',
				'Premium credential evaluation support',
				'University-specific customization',
				'24/7 priority expert support',
				'Same-day delivery available',
				'Ongoing strategic consultation',
			],
			popular: false
		},
	]

	const commonIssues = [
		{
			title: 'Grade Scale Confusion',
			description: 'Complex grade system conversions causing admissions delays',
			solution: 'Crystal-clear conversion matrices with detailed explanations for global understanding',
			icon: Filter,
			impact: 'High'
		},
		{
			title: 'Documentation Gaps',
			description: 'Missing transcripts or incomplete academic records',
			solution: 'Systematic documentation recovery and professional gap-filling strategies',
			icon: Database,
			impact: 'Critical'
		},
		{
			title: 'Format Inconsistencies',
			description: 'Non-standard presentations confusing admissions committees',
			solution: 'International formatting standards ensuring immediate comprehension',
			icon: FileText,
			impact: 'High'
		},
		{
			title: 'GPA Calculation Errors',
			description: 'Incorrect or unclear academic performance reporting',
			solution: 'Precision GPA calculations with transparent methodologies',
			icon: TrendingUp,
			impact: 'Critical'
		}
	]

	return (
		<div className='min-h-screen bg-white pt-16'>
			{/* Hero Section */}
			<section className='py-24 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 relative overflow-hidden'>
				<div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40'></div>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
							<div className='inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm'>
								<Award className='h-4 w-4 text-[#8b2635] mr-2' />
								<span className='text-sm font-medium text-[#8b2635]'>Professional Academic Services</span>
							</div>
							<h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
								Academic Transcript
								<span className='text-[#8b2635] block'>Transformation</span>
							</h1>
							<p className='text-xl text-gray-600 mb-8 leading-relaxed'>
								Transform your academic records into compelling, professional presentations. 
								Our expert analysis and formatting services ensure your transcripts 
								meet international standards and showcase your achievements with maximum impact.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<button className='group bg-[#8b2635] hover:bg-[#722030] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
									<span className='flex items-center justify-center'>
										Start Transformation
										<ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
									</span>
								</button>
								<button className='group border-2 border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300'>
									<span className='flex items-center justify-center'>
										<MessageCircle className='mr-2 h-5 w-5' />
										Expert Consultation
									</span>
								</button>
							</div>
						</div>
						<div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<div className='relative'>
								<div className='bg-white rounded-2xl shadow-2xl p-8 transform rotate-2'>
									<div className='bg-gradient-to-r from-[#8b2635] to-[#a73345] h-3 rounded-full mb-6'></div>
									<div className='space-y-4'>
										<div className='h-4 bg-gray-200 rounded w-3/4'></div>
										<div className='h-4 bg-gray-200 rounded w-1/2'></div>
										<div className='h-4 bg-gray-200 rounded w-5/6'></div>
										<div className='h-8 bg-gradient-to-r from-[#8b2635]/10 to-transparent rounded'></div>
									</div>
								</div>
								<div className='absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-2'>
									<div className='flex items-center space-x-2'>
										<div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
											<CheckCircle className='h-4 w-4 text-white' />
										</div>
										<div>
											<div className='text-xs font-semibold text-gray-900'>Verified</div>
											<div className='text-xs text-gray-500'>Professional Format</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Overview */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Why Choose Our <span className='text-[#8b2635]'>Expert Services?</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We don't just format transcripts – we transform your academic story into a compelling narrative that opens doors.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{features.map((feature, index) => (
							<Card key={index} className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-fade-in' : ''}`} 
								  style={{animationDelay: `${index * 200}ms`}}>
								<CardContent className='p-8 text-center'>
									<div className='w-16 h-16 bg-gradient-to-br from-[#8b2635] to-[#a73345] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
										<feature.icon className='h-8 w-8' />
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

			{/* Service Categories */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Our <span className='text-[#8b2635]'>Specialized Services</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Three distinct service tiers designed to meet every academic transformation need.
						</p>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
						{transcriptServices.map((service, index) => (
							<Card key={index} className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br ${service.color}`}>
								<CardContent className='p-8'>
									<div className='flex items-center justify-between mb-6'>
										<div className='w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300'
											 style={{ backgroundColor: service.accent }}>
											<service.icon className='h-7 w-7' />
										</div>
									</div>
									<h3 className='text-2xl font-bold text-gray-900 mb-4'>{service.title}</h3>
									<p className='text-gray-600 mb-6 leading-relaxed'>{service.description}</p>
									<ul className='space-y-3'>
										{service.features.map((feature, featureIndex) => (
											<li key={featureIndex} className='flex items-start space-x-3'>
												<div className='w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: service.accent }}></div>
												<span className='text-gray-700 leading-relaxed'>{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Process Steps */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Our <span className='text-[#8b2635]'>Transformation Process</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							A systematic approach to academic excellence, refined through hundreds of successful transformations.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
						{process.map((item, index) => (
							<div key={index} className='text-center group'>
								<div className='relative mb-6'>
									<div className='w-20 h-20 bg-gradient-to-br from-[#8b2635] to-[#a73345] text-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg'>
										<item.icon className='h-8 w-8' />
									</div>
									<div className='absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[#8b2635] rounded-full flex items-center justify-center text-xs font-bold text-[#8b2635]'>
										{item.step}
									</div>
								</div>
								<h4 className='text-lg font-bold text-gray-900 mb-3'>
									{item.title}
								</h4>
								<p className='text-gray-600 leading-relaxed text-sm'>
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-20 bg-gradient-to-br from-[#8b2635]/5 to-red-50'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Transformation <span className='text-[#8b2635]'>Benefits</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Experience the advantage of professionally optimized academic presentations.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{benefits.map((benefit, index) => (
							<div key={index} className='flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300'>
								<div className='w-10 h-10 bg-gradient-to-br from-[#8b2635] to-[#a73345] rounded-xl flex items-center justify-center flex-shrink-0'>
									<benefit.icon className='h-5 w-5 text-white' />
								</div>
								<p className='text-gray-700 leading-relaxed font-medium'>{benefit.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Global <span className='text-[#8b2635]'>Success Stories</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Real transformations, real results, real dreams achieved.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial, index) => (
							<Card key={index} className='group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50'>
								<CardContent className='p-8'>
									<div className='flex items-center justify-between mb-4'>
										<div className='flex items-center'>
											{[...Array(testimonial.rating)].map((_, i) => (
												<Star key={i} className='h-5 w-5 text-yellow-400 fill-current' />
											))}
										</div>
										<span className='text-2xl'>{testimonial.flag}</span>
									</div>
									<p className='text-gray-700 italic mb-6 leading-relaxed text-lg'>
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
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Investment <span className='text-[#8b2635]'>Packages</span>
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Professional academic transformation services designed for every budget and timeline.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{pricing.map((plan, index) => (
							<Card key={index} className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative ${plan.popular ? 'ring-4 ring-[#8b2635]/20 scale-105' : 'hover:-translate-y-2'}`}>
								{plan.popular && (
									<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
										<div className='bg-gradient-to-r from-[#8b2635] to-[#a73345] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg'>
											Most Popular
										</div>
									</div>
								)}
								<CardContent className='p-8'>
									<h3 className='text-2xl font-bold text-gray-900 mb-2'>{plan.title}</h3>
									<div className='mb-6'>
										<div className='flex items-baseline'>
											<span className='text-4xl font-bold text-[#8b2635]'>{plan.price}</span>
											{plan.originalPrice && (
												<span className='text-lg text-gray-500 line-through ml-2'>{plan.originalPrice}</span>
											)}
										</div>
									</div>
									<ul className='space-y-4 mb-8'>
										{plan.features.map((feature, featureIndex) => (
											<li key={featureIndex} className='flex items-start space-x-3'>
												<CheckCircle className='h-5 w-5 text-red-600 flex-shrink-0 mt-0.5' />
												<span className='text-gray-700'>{feature}</span>
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

			{/* Common Issues Section */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold text-gray-900 mb-6'>
							Common <span className='text-[#8b2635]'>Challenges</span> We Solve
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Expert solutions for the most complex academic documentation challenges.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{commonIssues.map((issue, index) => (
							<Card key={index} className='group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1'>
								<CardContent className='p-8'>
									<div className='flex items-start justify-between mb-6'>
										<div className='w-12 h-12 bg-gradient-to-br from-[#8b2635] to-[#a73345] rounded-xl flex items-center justify-center'>
											<issue.icon className='h-6 w-6 text-white' />
										</div>
										<span className={`px-3 py-1 rounded-full text-xs font-bold ${
											issue.impact === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
										}`}>
											{issue.impact} Impact
										</span>
									</div>
									<h3 className='text-xl font-bold text-gray-900 mb-3'>{issue.title}</h3>
									<p className='text-gray-600 mb-4 leading-relaxed'>{issue.description}</p>
									<div className='border-l-4 border-[#8b2635] pl-4'>
										<p className='text-[#8b2635] font-medium leading-relaxed'>{issue.solution}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
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
							Ready to <span className='text-red-200'>Transform</span> 
							<br /> Your Academic Future?
						</h2>
						<p className='text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
                            Join thousands of successful students who've unlocked their potential with 
                            our professional academic transformation services.
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
					
					{/* Trust indicators */}
					<div className='mt-16 pt-12 border-t border-red-700 border-opacity-50'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
							<div className='animate-bounce-in stagger-1 hover-lift'>
								<div className='text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent'>1000+</div>
								<div className='text-red-200 text-lg font-medium'>Letters Written</div>
								<div className='w-12 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto mt-2 rounded-full'></div>
							</div>
							<div className='animate-bounce-in stagger-2 hover-lift'>
								<div className='text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent'>95%</div>
								<div className='text-red-200 text-lg font-medium'>Success Rate</div>
								<div className='w-12 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto mt-2 rounded-full'></div>
							</div>
							<div className='animate-bounce-in stagger-3 hover-lift'>
								<div className='text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent'>24/7</div>
								<div className='text-red-200 text-lg font-medium'>Expert Support</div>
								<div className='w-12 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto mt-2 rounded-full'></div>
							</div>
						</div>
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