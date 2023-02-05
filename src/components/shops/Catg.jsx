import React from "react";

const Catg = () => {
  const data = [
    {
      cateName: "Meat and Seafood",
    },
    {
      cateName: "Diary and Eggs",
    },
    {
      cateName: "Frozen",
    },
    {
      cateName: "Prepared Food",
    },
    {
      cateName: "Produce",
    },
    {
      cateName: "Canned foods, Soups",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Items </h1>
          <h1>Bakery </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Items</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
