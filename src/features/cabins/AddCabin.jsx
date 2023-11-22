// import { useState } from "react";
import Button from "../../ui/Button";

import Modal from "../../ui/Modal";

import CreateCabinForm from "./CreateCabinForm";

export default function AddCabins() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabins-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabins-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// export default function AddCabins() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <CabinTable />
//       <Button onClick={() => setIsOpenModal((open) => !open)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
