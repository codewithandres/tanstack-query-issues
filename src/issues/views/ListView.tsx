import { useState } from 'react';
import { LoaderSpiner } from '../../shared/components/loader';

import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';

import { useIssus } from '../hooks/useIssus';
import { State } from '../interface/Issus.interface';

export const ListView = () => {
	const [state, setState] = useState<State>(State.All);
	const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

	const { issusQuery } = useIssus({ state: state, selectedLabels: selectedLabels });

	const issues = issusQuery.data ?? [];

	const onLabelSeleted = (label: string) => {
		if (selectedLabels.includes(label)) {
			setSelectedLabels(selectedLabels.filter(l => l !== label));
		} else {
			setSelectedLabels([...selectedLabels, label]);
		}
	};

	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 mt-5'>
			<div className='col-span-1 sm:col-span-2'>
				{issusQuery.isLoading ? (
					<LoaderSpiner />
				) : (
					<IssueList onStateChange={setState} isssues={issues} state={state} />
				)}
			</div>

			<div className='col-span-1 px-2'>
				<LabelPicker onLabelSeleted={onLabelSeleted} selectedLabels={selectedLabels} />
			</div>
		</div>
	);
};
