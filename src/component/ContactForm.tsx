import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

const ContactForm = () => {
	const form = useForm({
		initialValues: {
			name: '',
			email: '',
			comment: '',
			termsOfService: false,
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});

	return (
		<Box
			maw={300}
			mx='auto'>
			<form
				onSubmit={form.onSubmit((values) => console.log(values))}
				style={{
					color: 'giantsjj.1',
				}}>
				<TextInput
					withAsterisk
					label='Name'
					placeholder='Name'
					{...form.getInputProps('name')}
					classNames={{ label: 'inputLabel', input: 'inputElement' }}
				/>
				<TextInput
					withAsterisk
					label='Email'
					placeholder='your@email.com'
					{...form.getInputProps('email')}
					classNames={{ label: 'inputLabel', input: 'inputElement' }}
				/>
				<TextInput
					withAsterisk
					label='Comment'
					placeholder='I like Giants JJ'
					{...form.getInputProps('comment')}
					classNames={{ label: 'inputLabel', input: 'inputElement' }}
				/>

				<Checkbox
					mt='md'
					label='I agree to sell my privacy'
					{...form.getInputProps('termsOfService', { type: 'checkbox' })}
					classNames={{ label: 'inputLabel', input: 'iconElement' }}
				/>

				<Group
					position='right'
					mt='md'>
					<Button type='submit'>Submit</Button>
				</Group>
			</form>
		</Box>
	);
};

export default ContactForm;
