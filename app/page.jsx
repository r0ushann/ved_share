import Image from 'next/image'
import Feed from '@components/Feed'

export default function Home() {
  return (
   
<section className='w-full flex-center flex-col'>
<h1 className='head_text text-center'>
Discover & Share
<br className='max-md:hidden'/>
<span className='orange_gradient'> yourself at Vedanta!</span>
</h1>
<p className='desc text-center'>Vedanta Share is an open platform for all of to share our daily learnings and experiance gained here.</p>

<Feed />
</section>
  )
}
