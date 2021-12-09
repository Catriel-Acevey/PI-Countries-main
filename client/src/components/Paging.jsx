import React from "react";
import styles from "./Paging.module.css";

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
  return (
    <div className={styles.paging}>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li key={number}>
                <button
                  className={styles.btnPage}
                  onClick={() => paging(number)}
                >
                  {number}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
  // return (
  //   <div>
  //     <ul>
  //       {pageNumbers.map((number) => {
  //         return (
  //           <button key={number} onClick={() => paging(number)}>
  //             <li>
  //               <span>{number}</span>
  //             </li>
  //           </button>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
}
