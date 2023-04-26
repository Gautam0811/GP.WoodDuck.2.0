import React from 'react';
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigator } from '../../routes';
import { Login } from '../login';
import { Header, Footer, LeftSideBar } from '../common';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { UserInfo } from '../login';

export function Home() {
	const dispatch = useDispatch();
	const { loginData } = bindActionCreators(actionCreators, dispatch);
	// const permissionInfo= useSelector((state:any) => state.permissionInfo);
	const token: any = localStorage.getItem('token');
	if (!token) {
		return <Login />;
	} else {
		loginData(UserInfo);
		// permissionData(permissionSetData);
	}
	return (
		<Grid>
			<Router>
				<Grid>
					<Header />
				</Grid>
				<div className="flexrow">
					<Grid>
						<LeftSideBar />
					</Grid>
					<Grid className="w100">
						<Navigator />
						<Footer />
					</Grid>
				</div>
			</Router>
		</Grid>
	);
}
