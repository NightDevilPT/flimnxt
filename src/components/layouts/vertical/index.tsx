'use client';

import React, { useEffect } from 'react'
import VerticalSidebar from './verticalSidebar'
import HorizontalFooter from '../horizontal/horizontalFooter'
import { useAppDispatch } from '@/redux/store';
import { fetchGenres } from '@/redux/genres/genres.thunk';
import { fetchConfiguration } from '@/redux/configuration/configuration.thunk';
import { fetchUpcomingMovies } from '@/redux/upcoming/upcoming.thunk';

const VerticalLayout = ({children}: {children: React.ReactNode}) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchGenres());
		dispatch(fetchConfiguration());
		dispatch(fetchUpcomingMovies());
	}, [dispatch]);
  return (
	<div className='flex min-h-screen w-full bg-background'>
		<VerticalSidebar />
		<div className='flex-1 px-5'>
			{children}
			<HorizontalFooter />
		</div>
	</div>
  )
}

export default VerticalLayout