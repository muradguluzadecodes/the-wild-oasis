// import { useState } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

import AddCabins from "../features/cabins/AddCabin";

function Cabins() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
