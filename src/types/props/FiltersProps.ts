/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiltersModel } from "..";

export interface FiltersProps {
    type: string;
    placeholder?: string;
    name: string;
    label: string;
    min?: number;
    max?: number;
    handleNumber: any
    handleValue: any
    filters: FiltersModel
}