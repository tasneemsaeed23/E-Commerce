import React from "react";
import CategoryHeader from "../../Component/Category/CategoryHeader";
import SearchCountResult from "../../Component/Uitlity/SearchCountResult";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../../Component/Uitlity/Pagination";
import SideFilter from "../../Component/Uitlity/SideFilter";
import CardProductContainer from "./../../Component/Products/CardProductContainer";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="400 نتجية بحث" />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductContainer title="" btntitle="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
