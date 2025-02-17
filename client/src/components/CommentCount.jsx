import React from 'react'
import { useFetch } from '@/hooks/useFetch';
import { getEnv } from '@/helpers/getEnv';
import { FaRegComment } from 'react-icons/fa'

const CommentCount = ({ props }) => {

    const { data, loading, error } = useFetch(`${getEnv('VITE_API_BASE_URL')}/comment/get-count/${props.blogid}`, {
        method: 'get',
        credentials: 'include',
    })
    
    return (
        <button type="button" className="flex justify-between items-center gap-1">
            <FaRegComment />
            {data && data.commentCount}
        </button>
    )
}

export default CommentCount