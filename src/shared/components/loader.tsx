import { BiLoaderCircle } from 'react-icons/bi';

export const LoaderSpiner = () => {
	return (
		<div className='loading'>
			<div className='animate-spin'>
				<BiLoaderCircle size={30} />
			</div>
		</div>
	);
};
