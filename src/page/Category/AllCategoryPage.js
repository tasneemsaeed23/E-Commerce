import React from "react";
import CategoryContainer from "./../../Component/Category/CategoryContainer";
import Pagination from "./../../Component/Uitlity/Pagination";

const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
