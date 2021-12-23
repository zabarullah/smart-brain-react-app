import React from "react";

const Rank = ({name, entries}) => {
    return (
        <div >
            <div className='white f3 b'>
                {`${name.charAt(0).toUpperCase() + name.slice(1)}, your detection count is...`}
            </div>
            <div className='white f1 b'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;