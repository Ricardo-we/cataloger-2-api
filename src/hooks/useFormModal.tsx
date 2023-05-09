import { FormActions } from "../types/FormActions";
import { useModal } from "./useModal";
import { useSimpleState } from "./useSimpleState";


export function useModalForm(visible: boolean){
    const useModalInstance = useModal(visible);
    const formAction = useSimpleState<null | FormActions>("add");

    return {
        formAction,
        useModalInstance,
    }
}