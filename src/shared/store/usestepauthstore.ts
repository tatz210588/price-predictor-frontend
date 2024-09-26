import { create } from "zustand";

interface StepStore {
    step: number;
    formValues: {
        "apartmentsize": number;
        "room": number;
        "floorno": number;
        "floorcount": number;
        "apartmentrate": string;
        "buildyear": number;
        "apartmenttype": string;
        "address": string;
        "apartmentfeature": string[];
    };
    nextStep: () => void;
    previousStep: () => void;
    resetStep: () => void;
    setFormValues: (values: Partial<StepStore['formValues']>) => void;
    resetFormValues: () => void;
}


const initialFormValues = {
    "apartmentsize": 10,
    "room": 1,
    "floorno": 1,
    "floorcount": 1,
    "apartmentrate": "",
    "buildyear": 1900,
    "apartmenttype": "",
    "address": "",
    "apartmentfeature": [],
};

export const useStepStore = create<StepStore>((set) => ({
    step: 0,
    formValues: initialFormValues,
    nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 9) })),
    previousStep: () => set((state) => ({ step: Math.max(state.step - 1, 0) })),
    resetStep: () => set({ step: 0 }),
    
    setFormValues: (values) => set((state) => ({
        formValues: { ...state.formValues, ...values },
    })),

    resetFormValues: () => set(() => ({
        formValues: initialFormValues,
    })),
}));
