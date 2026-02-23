import FormButton from "../Form/FormButton/FormButton";

import useModal from "../../../hooks/useModal";

import Modal from "./Modal";

const ModalComponent = () => {
  const { isOpen, settings } = useModal();

  return (
    <Modal.Container isOpen={isOpen}>
      <Modal.Content>
        <Modal.Title>{settings.title}</Modal.Title>
        <Modal.Message>{settings.message}</Modal.Message>
        <Modal.Footer>
          <FormButton
            mode="secondary"
            onClick={() => settings.secondaryButtonAction()}
          >
            {settings.secondaryButtonText}
          </FormButton>
          <FormButton
            mode="primary"
            onClick={() => settings.primaryButtonAction()}
          >
            {settings.primaryButtonText}
          </FormButton>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Container>
  );
};

export default ModalComponent;
