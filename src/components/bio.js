import React from 'react';

const SpeakerBio = ( { speaker }) => {
    
    return(
        <div>
            <h3 className='font-semibold'>{speaker.fullName}</h3>
            <h4>{speaker.tagLine}</h4>
            <p className='text-md'>{speaker.bio}</p>
        </div>
    )
}
export default SpeakerBio