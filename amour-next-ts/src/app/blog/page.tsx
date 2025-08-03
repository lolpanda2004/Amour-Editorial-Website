import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
	Calendar,
	User,
	ArrowRight,
	Clock,
	Search,
	Filter,
	BookOpen,
	TrendingUp,
} from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
	const featuredPost = {
		title: 'The Ultimate Guide to Writing a Compelling Statement of Purpose in 2024',
		excerpt:
			'Learn the latest strategies and techniques that admissions committees are looking for in SOPs. This comprehensive guide covers everything from structure to storytelling.',
		category: 'SOP Writing',
		author: 'Dr. Sarah Johnson',
		date: '2024-01-20',
		readTime: '12 min read',
		image: '/placeholder.svg?height=400&width=600',
		featured: true,
	}

	const blogPosts = [
		{
			title: '10 Common SOP Mistakes to Avoid in 2024',
			excerpt:
				'Learn about the most frequent errors students make in their statements of purpose and how to avoid them for a stronger application.',
			category: 'SOP Tips',
			author: 'Sarah Editorial',
			date: '2024-01-15',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '5 min read',
			trending: true,
		},
		{
			title: 'How to Choose the Right Recommender for Your LOR',
			excerpt:
				'A comprehensive guide on selecting the best people to write your letters of recommendation and how to approach them effectively.',
			category: 'LOR Guide',
			author: 'Michael Writer',
			date: '2024-01-10',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '7 min read',
			trending: false,
		},
		{
			title: 'MBA Application Timeline: A Complete 12-Month Guide',
			excerpt:
				'Everything you need to know about planning your MBA application process from start to finish, with month-by-month action items.',
			category: 'MBA',
			author: 'Emily Expert',
			date: '2024-01-05',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '10 min read',
			trending: true,
		},
		{
			title: 'Crafting Your Personal Brand for Applications',
			excerpt:
				'How to develop and communicate a consistent personal brand across all your application materials for maximum impact.',
			category: 'Strategy',
			author: 'David Brand',
			date: '2024-01-01',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '6 min read',
			trending: false,
		},
		{
			title: 'The Psychology of Admissions Committees: What They Really Want',
			excerpt:
				'Understanding what admissions officers look for and how to appeal to their decision-making process based on insider insights.',
			category: 'Insights',
			author: 'Lisa Psychology',
			date: '2023-12-28',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '8 min read',
			trending: false,
		},
		{
			title: 'International Students: Overcoming Cultural Barriers in Applications',
			excerpt:
				'Tips for international students to effectively communicate their unique perspectives and experiences in application essays.',
			category: 'International',
			author: 'James Global',
			date: '2023-12-25',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '9 min read',
			trending: false,
		},
		{
			title: 'Medical School Personal Statement: What Makes It Different',
			excerpt:
				'Specific strategies for writing compelling personal statements for medical school applications, with real examples.',
			category: 'Medical',
			author: 'Dr. Amanda Foster',
			date: '2023-12-20',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '11 min read',
			trending: false,
		},
		{
			title: 'Engineering Graduate School: Highlighting Technical Skills',
			excerpt:
				'How to effectively showcase your technical expertise and research potential in engineering graduate school applications.',
			category: 'Engineering',
			author: 'Robert Tech',
			date: '2023-12-15',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '7 min read',
			trending: false,
		},
		{
			title: 'Law School Application Essays: Standing Out from the Crowd',
			excerpt:
				'Strategies for writing compelling law school application essays that demonstrate your legal reasoning and passion for justice.',
			category: 'Law',
			author: 'Jennifer Legal',
			date: '2023-12-10',
			image: '/placeholder.svg?height=200&width=300',
			readTime: '8 min read',
			trending: false,
		},
	]

	const categories = [
		{ name: 'All Posts', count: 45, active: true },
		{ name: 'SOP Writing', count: 12, active: false },
		{ name: 'LOR Guide', count: 8, active: false },
		{ name: 'MBA', count: 6, active: false },
		{ name: 'Medical', count: 5, active: false },
		{ name: 'Engineering', count: 4, active: false },
		{ name: 'Law', count: 3, active: false },
		{ name: 'Strategy', count: 7, active: false },
	]

	const popularTags = [
		'Statement of Purpose',
		'Letter of Recommendation',
		'MBA Applications',
		'Medical School',
		'Graduate School',
		'Application Tips',
		'Writing Guide',
		'Admissions',
		'International Students',
		'Scholarships',
	]

	return (
		<div className='min-h-screen bg-white pt-16'>
			{/* Hero Section */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center animate-fade-in'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
							Our <span className='text-amber-600'>Blog</span>
						</h1>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
							Expert insights, tips, and strategies to help you
							succeed in your academic journey. Stay updated with
							the latest trends in application writing.
						</p>

						{/* Search and Filter */}
						<div className='max-w-2xl mx-auto'>
							<div className='flex flex-col sm:flex-row gap-4'>
								<div className='flex-1 relative'>
									<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
									<input
										type='text'
										placeholder='Search articles...'
										className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent'
									/>
								</div>
								<Button
									variant='outline'
									className='flex items-center space-x-2 bg-transparent'
								>
									<Filter className='h-4 w-4' />
									<span>Filter</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
					{/* Main Content */}
					<div className='lg:col-span-3'>
						{/* Featured Post */}
						<div className='mb-12 animate-fade-in'>
							<Badge className='mb-4 bg-amber-600 text-white'>
								Featured Article
							</Badge>
							<Card className='border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>
								<div className='md:flex'>
									<div className='md:w-1/2'>
										<img
											src={
												featuredPost.image ||
												'/placeholder.svg'
											}
											alt={featuredPost.title}
											className='w-full h-64 md:h-full object-cover'
										/>
									</div>
									<div className='md:w-1/2 p-8'>
										<Badge className='mb-3 bg-amber-100 text-amber-800'>
											{featuredPost.category}
										</Badge>
										<h2 className='text-2xl font-bold text-gray-900 mb-4 leading-tight'>
											{featuredPost.title}
										</h2>
										<p className='text-gray-600 mb-6 leading-relaxed'>
											{featuredPost.excerpt}
										</p>
										<div className='flex items-center justify-between text-sm text-gray-500 mb-6'>
											<div className='flex items-center space-x-4'>
												<div className='flex items-center space-x-1'>
													<User className='h-4 w-4' />
													<span>
														{featuredPost.author}
													</span>
												</div>
												<div className='flex items-center space-x-1'>
													<Calendar className='h-4 w-4' />
													<span>
														{new Date(
															featuredPost.date
														).toLocaleDateString()}
													</span>
												</div>
											</div>
											<div className='flex items-center space-x-1'>
												<Clock className='h-4 w-4' />
												<span>
													{featuredPost.readTime}
												</span>
											</div>
										</div>
										<Button className='bg-amber-600 hover:bg-amber-700'>
											Read Full Article{' '}
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</div>
								</div>
							</Card>
						</div>

						{/* Trending Posts */}
						<div className='mb-12'>
							<div className='flex items-center space-x-2 mb-6'>
								<TrendingUp className='h-5 w-5 text-amber-600' />
								<h2 className='text-2xl font-bold text-gray-900'>
									Trending Now
								</h2>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								{blogPosts
									.filter((post) => post.trending)
									.map((post, index) => (
										<Card
											key={index}
											className={`border shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up stagger-${
												index + 1
											}`}
										>
											<div className='relative'>
												<img
													src={
														post.image ||
														'/placeholder.svg'
													}
													alt={post.title}
													className='w-full h-48 object-cover rounded-t-lg'
												/>
												<Badge className='absolute top-3 left-3 bg-red-500 text-white'>
													Trending
												</Badge>
											</div>
											<CardContent className='p-6'>
												<Badge className='mb-3 bg-amber-100 text-amber-800'>
													{post.category}
												</Badge>
												<h3 className='text-lg font-bold text-gray-900 mb-3 leading-tight'>
													{post.title}
												</h3>
												<p className='text-gray-600 mb-4 text-sm leading-relaxed'>
													{post.excerpt}
												</p>
												<div className='flex items-center justify-between text-xs text-gray-500 mb-4'>
													<div className='flex items-center space-x-3'>
														<div className='flex items-center space-x-1'>
															<User className='h-3 w-3' />
															<span>
																{post.author}
															</span>
														</div>
														<div className='flex items-center space-x-1'>
															<Calendar className='h-3 w-3' />
															<span>
																{new Date(
																	post.date
																).toLocaleDateString()}
															</span>
														</div>
													</div>
													<span className='text-amber-600 font-medium'>
														{post.readTime}
													</span>
												</div>
												<Button
													variant='ghost'
													className='w-full text-amber-600 hover:bg-amber-50'
												>
													Read More{' '}
													<ArrowRight className='ml-2 h-3 w-3' />
												</Button>
											</CardContent>
										</Card>
									))}
							</div>
						</div>

						{/* All Posts */}
						<div>
							<h2 className='text-2xl font-bold text-gray-900 mb-6'>
								Latest Articles
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								{blogPosts.map((post, index) => (
									<Card
										key={index}
										className={`border shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-up stagger-${
											index + 1
										}`}
									>
										<div className='relative'>
											<img
												src={
													post.image ||
													'/placeholder.svg'
												}
												alt={post.title}
												className='w-full h-48 object-cover rounded-t-lg'
											/>
											<Badge className='absolute top-3 left-3 bg-amber-600 text-white'>
												{post.category}
											</Badge>
										</div>
										<CardContent className='p-6'>
											<h3 className='text-lg font-bold text-gray-900 mb-3 leading-tight'>
												{post.title}
											</h3>
											<p className='text-gray-600 mb-4 text-sm leading-relaxed'>
												{post.excerpt}
											</p>
											<div className='flex items-center justify-between text-xs text-gray-500 mb-4'>
												<div className='flex items-center space-x-3'>
													<div className='flex items-center space-x-1'>
														<User className='h-3 w-3' />
														<span>
															{post.author}
														</span>
													</div>
													<div className='flex items-center space-x-1'>
														<Calendar className='h-3 w-3' />
														<span>
															{new Date(
																post.date
															).toLocaleDateString()}
														</span>
													</div>
												</div>
												<span className='text-amber-600 font-medium'>
													{post.readTime}
												</span>
											</div>
											<Button
												variant='ghost'
												className='w-full text-amber-600 hover:bg-amber-50'
											>
												Read More{' '}
												<ArrowRight className='ml-2 h-3 w-3' />
											</Button>
										</CardContent>
									</Card>
								))}
							</div>
						</div>

						{/* Load More */}
						<div className='text-center mt-12'>
							<Button variant='outline' size='lg'>
								Load More Articles
							</Button>
						</div>
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1'>
						{/* Categories */}
						<Card className='border shadow-sm mb-8 animate-slide-up'>
							<CardHeader>
								<h3 className='text-lg font-bold text-gray-900'>
									Categories
								</h3>
							</CardHeader>
							<CardContent className='pt-0'>
								<div className='space-y-2'>
									{categories.map((category, index) => (
										<div
											key={index}
											className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
												category.active
													? 'bg-amber-600 text-white'
													: 'hover:bg-gray-50'
											}`}
										>
											<span className='text-sm font-medium'>
												{category.name}
											</span>
											<span
												className={`text-xs px-2 py-1 rounded-full ${
													category.active
														? 'bg-white/20'
														: 'bg-gray-100 text-gray-600'
												}`}
											>
												{category.count}
											</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Popular Tags */}
						<Card className='border shadow-sm mb-8 animate-slide-up stagger-1'>
							<CardHeader>
								<h3 className='text-lg font-bold text-gray-900'>
									Popular Tags
								</h3>
							</CardHeader>
							<CardContent className='pt-0'>
								<div className='flex flex-wrap gap-2'>
									{popularTags.map((tag, index) => (
										<Badge
											key={index}
											variant='outline'
											className='cursor-pointer hover:bg-amber-600 hover:text-white transition-colors duration-200 text-xs'
										>
											{tag}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Newsletter Signup */}
						<Card className='border shadow-sm mb-8 animate-slide-up stagger-2'>
							<CardHeader>
								<h3 className='text-lg font-bold text-gray-900'>
									Stay Updated
								</h3>
							</CardHeader>
							<CardContent className='pt-0'>
								<p className='text-gray-600 text-sm mb-4'>
									Get the latest articles and tips delivered
									to your inbox.
								</p>
								<div className='space-y-3'>
									<input
										type='email'
										placeholder='Enter your email'
										className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm'
									/>
									<Button className='w-full bg-amber-600 hover:bg-amber-700 text-sm'>
										Subscribe
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Recent Posts */}
						<Card className='border shadow-sm animate-slide-up stagger-3'>
							<CardHeader>
								<h3 className='text-lg font-bold text-gray-900'>
									Recent Posts
								</h3>
							</CardHeader>
							<CardContent className='pt-0'>
								<div className='space-y-4'>
									{blogPosts
										.slice(0, 3)
										.map((post, index) => (
											<div
												key={index}
												className='flex space-x-3 group cursor-pointer'
											>
												<img
													src={
														post.image ||
														'/placeholder.svg'
													}
													alt={post.title}
													className='w-16 h-16 object-cover rounded-lg flex-shrink-0'
												/>
												<div className='flex-1 min-w-0'>
													<h4 className='text-sm font-medium text-gray-900 group-hover:text-amber-600 transition-colors duration-200 line-clamp-2'>
														{post.title}
													</h4>
													<div className='flex items-center space-x-2 mt-1'>
														<span className='text-xs text-gray-500'>
															{new Date(
																post.date
															).toLocaleDateString()}
														</span>
														<span className='text-xs text-amber-600'>
															{post.readTime}
														</span>
													</div>
												</div>
											</div>
										))}
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in'>
					<BookOpen className='h-12 w-12 text-amber-600 mx-auto mb-6' />
					<h2 className='text-3xl font-bold text-gray-900 mb-6'>
						Need Personalized Help?
					</h2>
					<p className='text-lg text-gray-600 mb-8 leading-relaxed'>
						While our blog provides valuable insights, sometimes you
						need personalized guidance. Our expert writers are here
						to help you craft the perfect application.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							asChild
							size='lg'
							className='bg-amber-600 hover:bg-amber-700'
						>
							<Link href='/contact'>Get Free Consultation</Link>
						</Button>
						<Button asChild variant='outline' size='lg'>
							<Link href='/services'>View Our Services</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
