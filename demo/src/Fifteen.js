import React from 'react';

function Fifteen({ items }) {
    const [searchTerm, setSearchTerm] = React.useState('');

    const filterItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search......"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filterItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Fifteen;
