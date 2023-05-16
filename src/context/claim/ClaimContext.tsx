/*Component Name : WDState
 Utility : This Component is responsible to rendering the state in entire project. 
 Author Krishna Choudharyn 06-03-2023-------------------------   */

import React, { useState, createContext } from 'react';

type ClaimType = {
	id: string;
	username: string;
	password: string;
	isAdmin: boolean;
	division: string;
	firstname: string;
	lastname: string;
};

type ClaimContextType = {
	claims: ClaimType[] | null;
	setClaims: React.Dispatch<React.SetStateAction<ClaimType[]>>;
	ClaimsData: (claims: ClaimType) => void;
};

type ClaimContextProviderProps = {
	children: React.ReactNode;
};

//ClaimContext is used for managing State Globally
export const ClaimContext = createContext({} as ClaimContextType);
export const ClaimContextProvider = ({
	children,
}: ClaimContextProviderProps) => {
	//The actual implementation will have call to a API.
	const claimsInitial: ClaimType[] = [
		{
			id: '1001',
			username: 'admin',
			password: 'admin@123',
			isAdmin: true,
			division: '',
			firstname: '',
			lastname: '',
		},
	];
	const [claims, setClaims] = useState<ClaimType[]>(claimsInitial);
	const ClaimsData = (claims: ClaimType) => {
		//The actual implementation will have call to a API.
		setClaims([
			{
				id: '1001',
				username: 'admin',
				password: 'admin@123',
				isAdmin: true,
				division: 'SL',
				firstname: 'admin',
				lastname: '',
			},
			{
				id: '1002',
				username: 'Ananya',
				password: 'password@123',
				isAdmin: false,
				division: '',
				firstname: 'Ananya',
				lastname: 'Dhar',
			},
			{
				id: '1003',
				username: 'Gautam',
				password: 'password@123',
				isAdmin: false,
				division: '',
				firstname: 'Gautam',
				lastname: 'Malhotra',
			},
			{
				id: '1004',
				username: 'Abhishek',
				password: 'password@123',
				isAdmin: true,
				division: 'SP',
				firstname: 'Abhishek',
				lastname: 'Bhatt',
			},
		]);
	};

	return (
		<ClaimContext.Provider value={{ claims, setClaims, ClaimsData }}>
			{children}
		</ClaimContext.Provider>
	);
};
