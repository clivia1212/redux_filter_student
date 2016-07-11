import React from 'react'
import FilterLink from '../container/FilterLink'

const Footer = () => 
(
	<p>
		show:
		{" "}
		<FilterLink filter="SHOW_ALL">
		ALL
		</FilterLink>
		{", "}
		<FilterLink filter="SHOW_MEN">
		Men
		</FilterLink>
		{", "}
		<FilterLink filter="SHOW_FEMALE">
		Female
		</FilterLink>
	</p>
)

	

export default Footer