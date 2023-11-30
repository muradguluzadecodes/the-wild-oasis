// import { useState } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

// import AddCabins from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import AddCabins from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
// import { useParams } from "react-router-dom";

function Cabins() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
