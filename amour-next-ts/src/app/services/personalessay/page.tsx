"use client";

import React from 'react'
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
	Heart,
	Lightbulb,
	Zap,
	Edit,
	Brain,
	Trophy,
	Shield,
	Rocket,
} from 'lucide-react'

export default function EssaysServicePage() {
	const features = [
		{
			icon: Heart,
			title: 'Authentic Storytelling',
			description: 'Craft genuine narratives that reflect your true personality and experiences.',
		},
		{
			icon: Lightbulb,
			title: 'Creative Approach',
			description: 'Unique angles and perspectives that make your essay memorable.',
		},
		{
			icon: Target,
			title: 'Purpose-Driven',
			description: 'Essays tailored to specific prompts and program requirements.',
		},
		{
			icon: Award,
			title: 'Impactful Writing',
			description: 'Compelling narratives that leave lasting impressions on readers.',
		},
	]

	const essayTypes = [
		{
			title: 'Common Application Essays',
			description: 'Personal statements for undergraduate admissions',
			prompts: [
				'Background and identity stories',
				'Challenge and growth experiences', 
				'Belief questioning moments',
				'Gratitude and accomplishment essays'
			],
			icon: BookOpen,
		},
		{
			title: 'Graduate School Essays',
			description: 'Personal statements for master\'s and PhD programs',
			prompts: [
				'Research interest essays',
				'Career goal statements',
				'Diversity and inclusion essays',
				'Leadership experience narratives'
			],
			icon: Target,
		},
		{
			title: 'Scholarship Essays',
			description: 'Competitive essays for scholarship applications',
			prompts: [
				'Financial need explanations',
				'Community service essays',
				'Future impact statements',
				'Personal achievement stories'
			],
			icon: Award,
		},
	]

	const process = [
		{
			step: '1',
			title: 'Story Discovery',
			description: 'We explore your experiences to find the most compelling narrative angles.',
		},
		{
			step: '2',
			title: 'Essay Strategy',
			description: 'Develop a unique approach that aligns with prompt requirements.',
		},
		{
			step: '3',
			title: 'Creative Writing',
			description: 'Craft engaging essays with strong openings and memorable conclusions.',
		},
		{
			step: '4',
			title: 'Refinement',
			description: 'Polish language, flow, and impact through multiple revisions.',
		},
		{
			step: '5',
			title: 'Final Review',
			description: 'Ensure essays meet word limits and perfectly answer prompts.',
		},
	]

	const benefits = [
		{
			icon: Edit,
			text: 'Personalized approach to your unique story'
		},
		{
			icon: Brain,
			text: 'Expert knowledge of successful essay strategies'
		},
		{
			icon: PenTool,
			text: 'Creative writing techniques for maximum impact'
		},
		{
			icon: Target,
			text: 'Multiple essay versions for different applications'
		},
		{
			icon: Shield,
			text: 'Comprehensive editing and proofreading'
		},
		{
			icon: Rocket,
			text: 'Prompt analysis and response optimization'
		},
	]

	const testimonials = [
		{
			name: 'Arjun Mehta',
			program: 'Harvard University - Undergraduate',
			quote: 'My Common App essay helped me stand out among thousands of applicants. The storytelling approach was brilliant and truly captured who I am.',
			rating: 5,
		},
		{
			name: 'Priya Sharma',
			program: 'Rhodes Scholarship Winner',
			quote: 'The scholarship essays were exceptional. They helped me articulate my vision for social impact in a way that resonated with the selection committee.',
			rating: 5,
		},
		{
			name: 'Kevin Johnson',
			program: 'Stanford GSB - MBA',
			quote: 'The personal essays for my MBA application perfectly showcased my leadership journey and entrepreneurial aspirations.',
			rating: 5,
		},
	]

	const pricing = [
		{
			title: 'Single Essay',
			price: '₹12,000',
			features: [
				'1 Personal Essay (up to 650 words)',
				'Brainstorming session',
				'Professional writing and editing',
				'2 rounds of revisions',
				'7-10 day delivery',
			],
		},
		{
			title: 'Essay Package',
			price: '₹30,000',
			features: [
				'3 Personal Essays',
				'Multiple brainstorming sessions',
				'Customized for different prompts',
				'Unlimited revisions',
				'Priority support',
				'5-7 day delivery',
			],
			popular: true,
		},
		{
			title: 'Premium Suite',
			price: '₹50,000',
			features: [
				'5 Personal Essays',
				'Comprehensive consultation',
				'Multiple versions per essay',
				'Unlimited revisions',
				'24/7 priority support',
				'3-5 day delivery',
				'Application strategy guidance',
			],
		},
	]

	const writingTips = [
		{
			title: 'Show, Don\'t Tell',
			description: 'Use specific examples and vivid details to illustrate your points rather than making general statements.',
		},
		{
			title: 'Start Strong',
			description: 'Grab the reader\'s attention from the first sentence with an engaging hook or compelling scene.',
		},
		{
			title: 'Be Authentic',
			description: 'Write in your own voice and share genuine experiences that reflect your true personality.',
		},
		{
			title: 'Focus on Growth',
			description: 'Highlight how experiences changed you and what you learned from challenges or successes.',
		},
	]

	return (
		<div className='min-h-screen bg-white pt-16'>
			{/* Hero Section */}
			<section className='py-20 bg-gradient-to-r from-[#8b2635]/5 to-red-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='animate-fade-in'>
							<div className='inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-[#8b2635] text-sm font-medium mb-6'>
								<Zap className='h-4 w-4 mr-2' />
								Professional Essay Writing Service
							</div>
							<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
								Personal Essays That
								<span className='text-[#8b2635] block'>Tell Your Story</span>
							</h1>
							<p className='text-xl text-gray-600 mb-8 leading-relaxed'>
								Transform your experiences into compelling narratives that showcase your 
								personality, potential, and unique perspective. Our expert writers help you 
								craft essays that don't just meet requirements – they exceed expectations.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<a
									href='/booking'
									className='bg-[#8b2635] hover:bg-[#722030] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center group'
								>
									Get Started Now
									<ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</a>
								<a
									href='/contact'
									className='border border-[#8b2635] text-[#8b2635] hover:bg-[#8b2635] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors text-center'
								>
									Ask Questions
								</a>
							</div>
						</div>
						<div className='animate-slide-up'>
							<div className='relative'>
								<div className='w-full h-96 bg-gradient-to-br from-[#8b2635]/10 to-red-100 rounded-lg flex items-center justify-center'>
									<PenTool className='h-24 w-24 text-[#8b2635]' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing - Friendly Cards */}
			<section className="py-24 bg-gradient-to-br from-gray-50 to-red-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-20">
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							Choose Your <span className="text-[#8b2635]">Success Package</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-4xl mx-auto">
							Transparent pricing, exceptional value. Select the package that
							aligns with your essay writing requirements.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{pricing.map((plan, index) => (
							<div
								key={index}
								className={`bg-white group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative rounded-lg ${
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
								<div className={`p-10 ${plan.popular ? "pt-16" : ""}`}>
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
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Frequently Asked <span className='text-[#8b2635]'>Questions</span>
						</h2>
					</div>
					<div className='space-y-6'>
						{[
							{
								question: 'How do you ensure my essay is authentic?',
								answer: 'We work closely with you to understand your experiences and write in your voice. The essay tells your story - we just help you tell it compellingly.'
							},
							{
								question: 'Can you help with different essay prompts?',
								answer: 'Absolutely! We can adapt your core story to different prompts and create multiple versions for various applications.'
							},
							{
								question: 'What if I don\'t have an interesting story to tell?',
								answer: 'Everyone has unique experiences worth sharing. Our brainstorming process helps uncover compelling angles from your everyday experiences.'
							},
							{
								question: 'Do you help with supplemental essays too?',
								answer: 'Yes, our packages can include supplemental essays, "Why School" essays, and other application components.'
							}
						].map((faq, index) => (
							<div key={index} className='bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg'>
								<div className='p-6'>
									<h3 className='text-lg font-semibold text-gray-900 mb-3'>{faq.question}</h3>
									<p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section - Warm & Inviting */}
			<section className="py-24 bg-gradient-to-r from-[#8b2635] via-red-800 to-[#8b2635] relative overflow-hidden">
				<div className="absolute inset-0 bg-black bg-opacity-20"></div>
				<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-[#a30018] to-red-500"></div>

				{/* Floating background elements */}
				<div className="absolute top-20 left-10 w-40 h-40 bg-white bg-opacity-5 rounded-full blur-xl"></div>
				<div className="absolute bottom-20 right-10 w-60 h-60 bg-red-500 bg-opacity-10 rounded-full blur-2xl"></div>
				<div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500 bg-opacity-5 rounded-full blur-lg"></div>

				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
					<div className="mb-8">
						<div className="inline-flex items-center px-6 py-3 bg-[#731f2b] bg-opacity-20 backdrop-blur-sm rounded-full text-red-100 font-medium mb-6">
							<Zap className="h-5 w-5 mr-2" />
							Transform Your Future Today
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
							Ready to <span className="text-red-200">Tell</span>
							<br /> Your Story?
						</h2>
						<p className="text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed">
							Let's create personal essays that don't just get you noticed – they
							get you remembered, respected, and ultimately, accepted.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
						<a
							href="/booking"
							className="bg-white text-[#8b2635] hover:bg-red-50 font-bold px-12 py-5 rounded-xl transition-all duration-300 shadow-2xl text-lg group"
						>
							Book Your Consultation
							<ArrowRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
						</a>
						<a
							href="/contact"
							className="border-2 border-white text-white hover:bg-white hover:text-[#8b2635] font-bold px-12 py-5 rounded-xl transition-all duration-300 text-lg"
						>
							Get Free Quote
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}
