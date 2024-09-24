import React from 'react'

const HorizontalFooter = () => {
  return (
	<footer className='h-16 border-t-1 border-default-100'>
		<div className='container h-full flex justify-between items-center'>
			<div className='h-full w-auto flex justify-center items-center text-3xl font-bold text-foreground'>
				<span className='text-secondary'>F</span>ilm<span className='text-secondary'>N</span>xt
			</div>
		</div>
	</footer>
  )
}

export default HorizontalFooter