import React from 'react'

const commentsData= [
    {
        name: "Yashodeep",
        text: "Demo comment: I am BATMAN",
        replies: [{
            name: "Yashodeep",
            text: "Demo comment: I am BATMAN",
            replies: [{
                name: "Yashodeep",
                text: "Demo comment: I am BATMAN",
                replies: [{
                    name: "Yashodeep",
                    text: "Demo comment: I am BATMAN",
                    replies: []
                },]
            },]
        },]
    },
    {
        name: "Yashodeep",
        text: "Demo comment: I am BATMAN",
        replies: []
    },
    {
        name: "Yashodeep",
        text: "Demo comment: I am BATMAN",
        replies: [{
            name: "Yashodeep",
            text: "Demo comment: I am BATMAN",
            replies: [{
                name: "Yashodeep",
                text: "Demo comment: I am BATMAN",
                replies: [{
                    name: "Yashodeep",
                    text: "Demo comment: I am BATMAN",
                    replies: [{
                        name: "Yashodeep",
                        text: "Demo comment: I am BATMAN",
                        replies: []
                    },]
                },]
            },]
        },]
    },
    {
        name: "Yashodeep",
        text: "Demo comment: I am BATMAN",
        replies: []
    },
    {
        name: "Yashodeep",
        text: "Demo comment: I am BATMAN",
        replies: []
    },
    {
        name: "Yashodeep",
        text: "Demo comment: I am BATMAN",
        replies: [{
            name: "Yashodeep",
            text: "Demo comment: I am BATMAN",
            replies: [{
                name: "Yashodeep",
                text: "Demo comment: I am BATMAN",
                replies: [{
                    name: "Yashodeep",
                    text: "Demo comment: I am BATMAN",
                    replies: [{
                        name: "Yashodeep",
                        text: "Demo comment: I am BATMAN",
                        replies: [{
                            name: "Yashodeep",
                            text: "Demo comment: I am BATMAN",
                            replies: []
                        },]
                    },]
                },]
            },]
        },]
    },
    {
        name: "Yashodeep",
        text: "Demo comment: I am BATMAN",
        replies: []
    },
    {
        name: "Yashodeep",
        text: "Demo comment: I am BATMAN",
        replies: []
    },

]

const Comment =({data})=>{
    const {name, text, replies} = data;

    return(
        
        <div className='flex py-4 px-2 my-2 bg-gray-200 shadow-md rounded-lg'>
            <img 
                alt='user' 
                src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'
                className='w-8 h-8 flex mx-3'
            
                />

            <div>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>    
        </div>
    )
    
}


const CommentList = ({comments}) =>{
    return comments.map((comment, index)=>   
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ) //dont use index, its just for demo purpose
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentContainer;