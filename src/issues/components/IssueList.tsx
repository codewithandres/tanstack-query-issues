import { GithubIssus } from '../interface/Issus.interface';
import { IssueItem } from './IssueItem';

declare interface IssuesProps {
	isssues: GithubIssus[];
}

export const IssueList = ({ isssues }: IssuesProps) => {
	return (
		<>
			{/* Botones de All, Open, Closed */}
			<div className='flex gap-4'>
				<button className='btn active'>All</button>
				<button className='btn'>Open</button>
				<button className='btn'>Closed</button>
			</div>

			{/* Lista de issues */}
			<div className='mt-4'>
				{isssues.map(issue => (
					<IssueItem key={issue.id} isssue={issue} />
				))}
			</div>
		</>
	);
};
