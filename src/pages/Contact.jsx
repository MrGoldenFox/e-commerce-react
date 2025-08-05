import {
	Instagram,
	Mail,
	Map,
	MessageSquare,
	Phone,
	Twitter,
} from 'lucide-react'
import { Form } from '../components/Form'

export function Contact() {
	const contacts = {
		info: [
			{ title: '+1012 3456 789', icon: <Phone /> },
			{ title: 'demo@gmail.com', icon: <Mail /> },
			{
				title: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
				icon: <Map />,
			},
		],
		socials: [
			{ title: 'Twitter', icon: <Twitter /> },
			{ title: 'Instagram', icon: <Instagram /> },
			{
				title: 'Discord',
				icon: <MessageSquare />,
			},
		],
	}

	return (
		<>
			<h1>Contact Us</h1>
			<p>Any question or remarks? Just write us a message!</p>
			<section>
				<article>
					<h4>Contact Information</h4>
					<p>Say something to start a live chat!</p>

					<ul>
						{contacts.info.map(info => (
							<li key={info.title}>
								{info.title}
								{info.icon}
							</li>
						))}
					</ul>
					<ul>
						{contacts.socials.map(social => (
							<li key={social.title}>
								<a href='' target='_blank'>
									{social.icon}
								</a>
							</li>
						))}
					</ul>
				</article>
				<Form />
			</section>
		</>
	)
}
