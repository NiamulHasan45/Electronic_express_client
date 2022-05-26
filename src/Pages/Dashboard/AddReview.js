import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);


    const handleBooking = event =>{
        event.preventDefault();
        const name = user.displayName;
        const comment = event.target.comment.value;
        const rating = event.target.rating.value;

        const review = {name, comment, rating}


        fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast('Successfully reviewed');
                }
            })


    }
    return (
        <div>
            <h1 className='my-3 text-3xl text-bold text-primary'>Please Write Something About Our Store.</h1>
             <div>
                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name="comment" placeholder="Write something" className="input input-bordered w-full max-w-xs" required />
                                <input type="text" name="rating" placeholder="enter 1 to 5" className="input input-bordered w-full max-w-xs" required />
                                <input type="submit" value="Submit Review" className="btn btn-secondary w-full max-w-xs" />
                                
                            </form>
                        </div>
        </div>
    );
};

export default AddReview;