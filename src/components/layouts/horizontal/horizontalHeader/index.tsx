import React from 'react'
import HorizontalLogo from '../horizontalLogo'
import HorizontalNav from '../horizontalNav'

const HorizontalHeader = () => {
  return (
	<header className='h-16 border-b-1 border-default-100'>
		<div className='container h-full flex justify-between items-center'>
			<HorizontalLogo />
			<HorizontalNav />
		</div>
	</header>
  )
}

export default HorizontalHeader