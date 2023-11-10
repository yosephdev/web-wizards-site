import React from "react";

const PriceList = (props) => {
  const pricelist = [
    {
      id: 1,
      name: "Web design",
      price: "200",
    },
    {
      id: 2, // Corrected the duplicate 'id' for "Web development" from '1' to '2'
      name: "Web development",
      price: "600",
    },
  ];

  return (
    <div>
      <h2>Price List</h2>
      <ul>
        {pricelist.map((item) => (
          <li key={item.id}>
            {item.name}: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceList;
