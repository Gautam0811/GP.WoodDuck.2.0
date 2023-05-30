/*Component Name : Email Input
 Utility : This component is used to take email as input
 Author Ananya Dhar 04-05-2023-------------------------   */
import { Grid } from '@mui/material';
import { UsersData } from '../../../services/AddUserData';

interface EmailInputProps {
	emailId: string;
	handleOnSearch: (emailId: string) => void;
	handleOnSelect: (emailId: string) => void;
	handleIsEmailExists: (emailId: string) => void;
	handleOnChange: (event: any) => void;
}

export function EmailInput(props: EmailInputProps) {
	return (
		<Grid>
			<Grid className="flexrow">
				<Grid>Email:</Grid>
				<Grid>
					<input
						type="text"
						id="id_email"
						onChange={props.handleOnChange}
						value={props.emailId}
						required
					></input>
					{props.emailId.length >= 3 && (
						<Grid className="email-drop-down-container">
							{/* ToDo: Waiting for backend API */}
							<ul className="z-5">
								{UsersData.filter((item) => {
									const email = item.email.toLowerCase();
									return (
										props.emailId &&
										email.startsWith(props.emailId) &&
										email !== props.emailId
									);
								})
									.slice(0, 10)
									.map((item) => (
										<li
											onClick={() => {
												props.handleOnSelect(
													item.email,
												);
												props.handleIsEmailExists(
													item.email,
												);
											}}
											key={item.id}
										>
											<div className="justify-space-between">
												<div>{item.first_name}</div>
												<div>({item.role})</div>
											</div>
										</li>
									))}
							</ul>
						</Grid>
					)}
				</Grid>
				<Grid>
					<button
						onClick={(event) => {
							props.handleOnSearch(props.emailId);
						}}
					>
						Search
					</button>
				</Grid>
			</Grid>
			<br />
		</Grid>
	);
}
