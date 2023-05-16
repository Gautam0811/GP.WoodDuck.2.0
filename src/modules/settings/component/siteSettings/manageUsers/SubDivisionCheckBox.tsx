/*Component Name : SubDivisionCheckBox
 Utility : This component is used to take SubDivision as an input
 Author Ananya Dhar 04-05-2023-------------------------   */
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
interface CheckBoxOptions {
	label: string;
	value: string;
}
const options: CheckBoxOptions[] = [
	{ label: 'OSB', value: 'OSB' },
	{ label: 'PLY', value: 'PLY' },
];

interface SubDivisionCheckBoxProps {
	selectedOptions: any;
	handleCheckBoxChange: any;
}

export function SubDivisionCheckBox(props: SubDivisionCheckBoxProps) {
	const division = useSelector((state: any) => state.divisionInfo);

	return (
		<Grid>
			{division === 'SP' && (
				<Grid className="flexrow">
					<Typography className="pr-8">Sub Division:</Typography>
					<Grid>
						{options.map((option) => (
							<div key={option.value}>
								<label>
									<input
										type="checkbox"
										value={option.value}
										checked={props.selectedOptions.includes(
											option.value,
										)}
										onChange={(e) =>
											props.handleCheckBoxChange(
												e.target.value,
											)
										}
									/>
									{option.label}
								</label>
							</div>
						))}
					</Grid>
				</Grid>
			)}
		</Grid>
	);
}
