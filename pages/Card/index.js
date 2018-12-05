import * as React from 'react'
import Link from 'next/link'
import './card.css'
export default ({ description, link }) => (
  <Link href={link}><p className='link'>{description}</p></Link>
)
