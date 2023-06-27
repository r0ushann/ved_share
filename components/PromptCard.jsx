'use Client'
import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ post, handleTagClick, handleEdit, handledDelete }) => {

    const {data:session} = useSession();
    const pathName = usePathname();
    const router = useRouter();

    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-6'>
                <div className='flex flex-1 justify-start items-center gap-3 cursor-pointer'>
                    <Image
                        src={post.creator.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />

                    <div className='flex flex-col'>
                        <h3 className="text-orange-600 font-semibold font-serif">{post.creator.username}</h3>
                        <p className="text-slate-300"> {post.creator.email}</p>
                    </div>
                </div>
            </div>

            {/**promt and tag */}
            <p className="my-4 text-sm flex flex-start font-bold cursor-pointer font-satoshi text-purple-600"
            onClick={() => handleTagClick && handleTagClick(post.tag)} > #{post.tag}</p>
            <p className="my-4 font-satoshi first-letter:font-bold text-m text-gray-900">{post.prompt}</p>
            
            {session?.user.id === post.creator.id && pathName === '/profile' && (
                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                <p
                className="font-inter text-sm green_gradient cursor-pointer"
                onClick={handleEdit}
                >Edit</p>
                <p
                className="font-inter text-sm orange_gradient cursor-pointer"
                onClick={handleDelete}
                >
                delete
                </p>
                 </div>
            )}
        </div>
    )
}
export default PromptCard
