import { useReduxSelector } from "../../hooks/useRedux";
import AuthrationModal from "./authration-modals";

const Modals = () => {
  const { modalAuthVisibility } = useReduxSelector((state) => state.modalSlice);
  return <>{modalAuthVisibility && <AuthrationModal />}</>;
};

export default Modals;
