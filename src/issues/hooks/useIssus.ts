import { useQuery } from '@tanstack/react-query';
import { getIssus } from '../actions/get-issus';
import { State } from '../interface/Issus.interface';

declare interface IssuesProps {
	readonly state: State;
	readonly selectedLabels?: string[];
}

export const useIssus = ({ state, selectedLabels = [] }: IssuesProps) => {
	const issusQuery = useQuery({
		queryKey: ['issus', { state, selectedLabels }],
		queryFn: () => getIssus(state, selectedLabels),
		staleTime: 1000 * 60,
	});

	return { issusQuery };
};
