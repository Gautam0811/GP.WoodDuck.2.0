/*Component Name : EmailsSelected
 Utility : This component is used to display selected emails
 Author Ananya Dhar 04-05-2023-------------------------   */
import { Grid } from '@mui/material';

interface EmailsSelectedProps {
	fullNames: string[];
}

export function EmailsSelected(props: EmailsSelectedProps) {
	const { fullNames } = props;
	return (
		<Grid>
			<Grid className="flexrow">
				<Grid>
					Users Selected: <br />
				</Grid>
				<Grid className="email-selected-word-wrap">{fullNames}</Grid>
			</Grid>
			<br />
		</Grid>
	);
}
