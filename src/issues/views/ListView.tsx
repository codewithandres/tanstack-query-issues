import { LoaderSpiner } from '../../shared/components/loader';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssus } from '../hooks/useIssus';

export const ListView = () => {
	const { issusQuery } = useIssus();

	const issues = issusQuery.data ?? [];

	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 mt-5'>
			<div className='col-span-1 sm:col-span-2'>
				{issusQuery.isLoading ? <LoaderSpiner /> : <IssueList isssues={issues} />}
			</div>

			<div className='col-span-1 px-2'>
				<LabelPicker />
			</div>
		</div>
	);
};
