import { Grid } from '@mui/material';
import { UsersData } from '../../../services/AddUserData';

export default function EmailInput(props: any) {
	return (
		<Grid className="flexrow">
			<Grid>Email:</Grid>
			<Grid>
				<input
					onChange={props.handleOnChange}
					type="text"
					value={props.emailId}
					required
				></input>
				{props.emailId.length >= 3 && (
					<div className="email-drop-down-container">
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
											props.handleOnSearch(item.email);
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
					</div>
				)}
			</Grid>
			<Grid>
				<button>Search</button>
			</Grid>
		</Grid>
	);
}
