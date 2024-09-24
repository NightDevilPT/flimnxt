import React from 'react'
import HorizontalFooter from './horizontalFooter'
import HorizontalHeader from './horizontalHeader'

const HoriontalLayout = ({children}: {children: React.ReactNode}) => {
  return (
	<div className='flex flex-col min-h-screen bg-background'>
		<HorizontalHeader />
		<main className='flex-1'>{children}</main>
		<HorizontalFooter />
	</div>
  )
}

export default HoriontalLayout