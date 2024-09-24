import React from 'react'
import VerticalSidebar from './verticalSidebar'
import HorizontalFooter from '../horizontal/horizontalFooter'

const VerticalLayout = ({children}: {children: React.ReactNode}) => {
  return (
	<div className='flex min-h-screen w-full bg-background'>
		<VerticalSidebar />
		<div className='flex-1'>
			{children}
			<HorizontalFooter />
		</div>
	</div>
  )
}

export default VerticalLayout