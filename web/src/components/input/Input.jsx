import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input {...props} className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-platinum" />
        </div>
    );
}
 
export default Input;