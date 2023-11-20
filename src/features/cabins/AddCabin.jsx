import { useState } from "react";
import Button from "../../ui/Button";
import CabinTable from "./CabinTable";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabins() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <CabinTable />
      <Button onClick={() => setIsOpenModal((open) => !open)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
