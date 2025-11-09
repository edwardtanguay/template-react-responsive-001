import { Home } from 'lucide-react';
import ContentWrapper from '../components/ContentWrapper';
import { InfoBox } from '../components/InfoBox';
import { InfoBoxWrapper } from '../components/InfoBoxWrapper';

export const PageWelcome = () => {
	return (
		<ContentWrapper icon={<Home size={32} className="text-slate-800" />} title="Welcome" >
			<p>
				This is the welcome page.
			</p>
			<InfoBoxWrapper>
				<>
					{[1, 2, 3].map((num) => (
						<InfoBox key={num} title={`Welcome Info ${num}`}>
							<p>An piece of information.</p>
						</InfoBox>
					))}
				</>
			</InfoBoxWrapper>
		</ContentWrapper>
	);
}
