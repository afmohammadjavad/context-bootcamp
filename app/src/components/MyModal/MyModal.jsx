import { Modal } from "antd";

function MyModal({ showModal, setShowModal }) {
  return (
    <Modal
      title="Basic Modal"
      visible={showModal}
      onOk={() => setShowModal(false)}
      onCancel={() => setShowModal(false)}
    >
      <p>Hi, I'm Mohammad Javad Aghazadeh Fard!</p>
    </Modal>
  );
}

export default MyModal;
