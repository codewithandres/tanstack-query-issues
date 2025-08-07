import { useQuery } from '@tanstack/react-query';
import { getIssus } from '../actions/get-issus';

export const useIssus = () => {
	const issusQuery = useQuery({
		queryKey: ['issus'],
		queryFn: () => getIssus(),
		staleTime: 1000 * 60,
	});
	
	return { issusQuery };
};
