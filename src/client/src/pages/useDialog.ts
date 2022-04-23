import { MutableRefObject, useRef } from 'react';
import { Func } from '../../../types';

interface DialogCtrl {
    showModal: Func;
    close: Func;
}

type CombinedDialog = HTMLDialogElement & DialogCtrl;

type DialogHook = [MutableRefObject<CombinedDialog | null>, Func, Func];

export const useDialog = (): DialogHook => {
    const dialog = useRef<CombinedDialog>(null);

    const showDialog = () => {
        dialog.current?.showModal();
    };

    const close = () => {
        dialog.current?.close();
    };

    return [dialog, showDialog, close];
};