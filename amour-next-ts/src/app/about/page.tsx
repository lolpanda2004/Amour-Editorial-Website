import { Card, CardContent } from '@/components/ui/card'
import {
	Award,
	Target,
	Heart,
	Lightbulb,
	Users,
	Clock,
	Shield,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
	const values = [
		{
			icon: Heart,
			title: 'Passion-Driven',
			description:
				'We believe every story deserves to be told with authenticity and impact.',
		},
		{
			icon: Target,
			title: 'Goal-Oriented',
			description:
				'Focused on helping you achieve your academic and professional aspirations.',
		},
		{
			icon: Award,
			title: 'Excellence',
			description:
				'Committed to delivering exceptional quality in every document we craft.',
		},
		{
			icon: Lightbulb,
			title: 'Innovation',
			description:
				'Using creative approaches to make your application stand out.',
		},
	]

	const team = [
		{
			name: 'Akshai',
			role: 'Co-Founder & Lead Editor',
			education: 'Alumni of world-renowned institution',
			experience: '7+ years in academic writing',
			image: '/placeholder.svg?height=300&width=300',
		},
		{
			name: 'Lathika',
			role: 'Co-Founder & Senior Consultant',
			education: 'Alumni of world-renowned institution',
			experience: '6+ years in admissions consulting',
			image: '/placeholder.svg?height=300&width=300',
		},
		{
			name: 'Dr. Emily Rodriguez',
			role: 'Medical Applications Specialist',
			education: 'MD from Johns Hopkins, MPH',
			experience: '6+ years in medical admissions',
			image: '/placeholder.svg?height=300&width=300',
		},
		{
			name: 'David Kim',
			role: 'Business Applications Expert',
			education: 'MBA from Wharton, CPA',
			experience: '7+ years in business consulting',
			image: '/placeholder.svg?height=300&width=300',
		},
	]

	const achievements = [
		{ icon: Users, number: '500+', label: 'Students Helped' },
		{ icon: Award, number: '98%', label: 'Success Rate' },
		{ icon: Clock, number: '7+', label: 'Years Experience' },
		{ icon: Shield, number: '100%', label: 'Satisfaction' },
	]

	const process = [
		{
			step: '1',
			title: 'Initial Consultation',
			description:
				'We start with a comprehensive discussion about your background, goals, and target programs.',
		},
		{
			step: '2',
			title: 'Document Analysis',
			description:
				'Our experts analyze your existing materials and identify areas for improvement.',
		},
		{
			step: '3',
			title: 'Strategic Planning',
			description:
				'We develop a customized strategy to highlight your unique strengths and experiences.',
		},
		{
			step: '4',
			title: 'Writing & Editing',
			description:
				'Our skilled writers craft compelling narratives that showcase your potential.',
		},
		{
			step: '5',
			title: 'Review & Refinement',
			description:
				'Multiple rounds of review ensure your documents meet the highest standards.',
		},
		{
			step: '6',
			title: 'Final Delivery',
			description:
				'You receive polished, professional documents ready for submission.',
		},
	]

	return (
		<div className='min-h-screen bg-white pt-16'>
			{/* Hero Section */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center animate-fade-in'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
							About{' '}
							<span className='text-amber-600'>
								Amour Editorial
							</span>
						</h1>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
							Amour Editorial is dedicated to helping students and
							professionals tell their stories with clarity,
							authenticity, and impact. Our mission is to empower
							applicants to the world's top universities and
							organizations by transforming their experiences into
							compelling narratives.
						</p>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='animate-slide-up'>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>
								Our Story
							</h2>
							<p className='text-gray-600 mb-6 leading-relaxed'>
								Founded by Akshai and Lathika, alumni of
								world-renowned institutions, Amour Editorial was
								born from our own journeys through competitive
								admissions processes. We understand the
								challenges, the hopes, and the dreams behind
								every application.
							</p>
							<p className='text-gray-600 mb-6 leading-relaxed'>
								Our team combines years of experience in
								admissions consulting, editing, and
								storytelling. We believe every applicant has a
								unique story, and we're here to help you tell it
								in the most authentic and impactful way
								possible.
							</p>
							<p className='text-gray-600 leading-relaxed'>
								Whether you need help with SOPs, LORs, personal
								statements, or interview preparation, we offer
								personalized guidance and expert feedback every
								step of the way.
							</p>
						</div>
						<div className='animate-slide-up stagger-1'>
							<Image
								data-aos='fade-up'
								src='/team-image.png'
							alt='Amour Editorial Team'
width={600}
height={400}
className='rounded-lg shadow-lg w-full h-auto hover-lift'
priority

							/>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16 animate-fade-in'>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Why Choose Us?
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Here&apos;s what sets us apart in helping you achieve
							your academic and professional goals.
						</p>
					</div>
					<ul className='list-disc pl-6 space-y-3 max-w-3xl mx-auto text-lg'>
						<li>
							Personalized, one-on-one guidance for every client
						</li>
						<li>
							Expert editors with backgrounds in top universities
						</li>
						<li>Proven track record of successful admissions</li>
						<li>
							Commitment to authenticity and ethical storytelling
						</li>
						<li>
							Support for a wide range of documents and
							application needs
						</li>
					</ul>
					<div className='text-center mt-12'>
						<Link
							href='/booking'
							className='inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg px-8 py-3 text-lg transition-colors'
						>
							Book a Consultation
						</Link>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16 animate-fade-in'>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Our Values
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							These core values guide everything we do and shape
							how we serve our clients.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{values.map((value, index) => (
							<Card
								key={index}
								className={`border shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up stagger-${
									index + 1
								}`}
							>
								<CardContent className='p-6 text-center'>
									<value.icon className='h-8 w-8 text-amber-600 mx-auto mb-4' />
									<h4 className='text-lg font-semibold text-gray-900 mb-3'>
										{value.title}
									</h4>
									<p className='text-gray-600 leading-relaxed text-sm'>
										{value.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Team */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16 animate-fade-in'>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Meet Our Team
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Our diverse team of experts brings together decades
							of experience in academic writing, admissions
							consulting, and professional development.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{team.map((member, index) => (
							<Card
								key={index}
								className={`border shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up stagger-${
									index + 1
								}`}
							>
								<CardContent className='p-6 text-center'>
									<img
										src={member.image || '/placeholder.svg'}
										alt={member.name}
										className='w-24 h-24 rounded-full mx-auto mb-4 object-cover'
									/>
									<h4 className='text-lg font-semibold text-gray-900 mb-1'>
										{member.name}
									</h4>
									<p className='text-amber-600 font-medium mb-2 text-sm'>
										{member.role}
									</p>
									<p className='text-gray-600 text-xs mb-2'>
										{member.education}
									</p>
									<p className='text-gray-500 text-xs'>
										{member.experience}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Our Process */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16 animate-fade-in'>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Our Process
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							We follow a proven 6-step process to ensure every
							client receives personalized, high-quality service.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{process.map((item, index) => (
							<Card
								key={index}
								className={`border shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up stagger-${
									index + 1
								}`}
							>
								<CardContent className='p-6'>
									<div className='flex items-center mb-4'>
										<div className='w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3'>
											{item.step}
										</div>
										<h4 className='text-lg font-semibold text-gray-900'>
											{item.title}
										</h4>
									</div>
									<p className='text-gray-600 leading-relaxed text-sm'>
										{item.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Achievements */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16 animate-fade-in'>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Our Achievements
						</h2>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Numbers that reflect our commitment to excellence
							and client success.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						{achievements.map((achievement, index) => (
							<div
								key={index}
								className={`text-center animate-slide-up stagger-${
									index + 1
								}`}
							>
								<div className='bg-white rounded-lg shadow-sm p-8 hover-lift'>
									<achievement.icon className='h-12 w-12 text-amber-600 mx-auto mb-4' />
										<div className='text-3xl font-bold  mb-2'>
										{achievement.number}
									</div>
									<div className=' font-medium'>
										{achievement.label}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Mission Statement */}
			<section className='py-20'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>
						Our Mission
					</h2>
					<blockquote className='text-xl  leading-relaxed italic mb-8'>
						"To empower students and professionals by transforming
						their unique experiences into compelling narratives that
						open doors to their dream opportunities. We believe that
						everyone has a story worth telling, and we're here to
						help them tell it beautifully."
					</blockquote>
					<div className='flex items-center justify-center space-x-4'>
						<img
							src='/placeholder.svg?height=60&width=60'
							alt='Akshai & Lathika'
							className='w-12 h-12 rounded-full'
						/>
						<div className='text-left'>
							<div className='font-semibold'>
								Akshai & Lathika
							</div>
							<div className='text-sm'>
								Co-Founders
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
