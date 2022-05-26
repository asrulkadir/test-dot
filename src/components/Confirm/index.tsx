import {
  ButtonConfirm,
  ConfirmDiv,
  ConfirmWrapper,
} from "../../styled/Confirm";

interface ConfirmProps {
  onConfirm: () => void;
  onCancel: () => void;
  show: boolean;
}

const Confirm = (props: ConfirmProps) => {
  const { onConfirm, show, onCancel } = props;

  return (
    <>
      {show && (
        <ConfirmWrapper onClick={onCancel}>
          <ConfirmDiv>
            <h1>Are you sure?</h1>
            <div>
              <ButtonConfirm onClick={onConfirm} confirm={true}>
                Yes
              </ButtonConfirm>
              <ButtonConfirm onClick={onCancel} confirm={false}>
                No
              </ButtonConfirm>
            </div>
          </ConfirmDiv>
        </ConfirmWrapper>
      )}
    </>
  );
};

export default Confirm;
