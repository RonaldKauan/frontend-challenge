import Modal from "../ui/Modal/Modal";

import FormButton from "../ui/Form/FormButton/FormButton";

interface DeleteUserModalProps {
  isOpen: boolean;
  primaryAction: () => void;
  secondaryAction: () => void;
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({
  isOpen,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <Modal.Container isOpen={isOpen}>
      <Modal.Content>
        <Modal.Title>Deseja excluir?</Modal.Title>
        <Modal.Message>O usuário será excluído.</Modal.Message>
        <Modal.Footer>
          <FormButton mode="secondary" onClick={() => secondaryAction()}>
            Não
          </FormButton>
          <FormButton mode="primary" onClick={() => primaryAction()}>
            Sim
          </FormButton>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Container>
  );
};

export default DeleteUserModal;
