import React from "react";

export default function Paging({
  countriesPerPage,
  numberOfCountries,
  paging,
}) {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(numberOfCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  pageNumbers.pop();
  //   return (
  //     <div>
  //       <ul>
  //         {pageNumbers &&
  //           pageNumbers.map((number) => {
  //             return (
  //               <li key={number}>
  //                 <button onClick={() => paging(number)}>{number}</button>
  //               </li>
  //             );
  //           })}
  //       </ul>
  //     </div>
  //   );
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <button key={number} onClick={() => paging(number)}>
              <li>
                <span>{number}</span>
              </li>
            </button>
          );
        })}
      </ul>
    </div>
  );
}
