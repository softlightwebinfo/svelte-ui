import type { TErrorRecord } from "$lib/interfaces/TErrorRecord";
import { get, writable } from "svelte/store";
import type { TValidations } from "../interfaces/IValidations";

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
	validations?: TValidations<T>;
	initialValues?: Partial<T>;
	onSubmit?: () => void;
	onChange?: (key: keyof T, value: any) => void;
	onError?: () => void;
}) => {
	const data = writable<T>((options?.initialValues || {}) as T);
	const errors = writable<TErrorRecord<T>>({} as TErrorRecord<T>);

	const handleChange = <S extends unknown>(
		key: keyof T,
		sanitizeFn?: (value: string) => S
	) => (e) => {
		const value = sanitizeFn?.(e.target.value) ?? e.target.value;
		options?.onChange?.(key, value);
		data.update(prv => ({...prv, [key]: value}));
	};

	const handleChangeValue = <S extends unknown>(
		key: keyof T,
		sanitizeFn?: (value: any) => S
	) => (e: any) => {
		const value = sanitizeFn?.(e) ?? e;
		options?.onChange?.(key, value);
		data.update(prv => ({...prv, [key]: value}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validations = options?.validations;
		errors.set({} as TErrorRecord<T>);

		if (validations) {
			let valid = true;
			const newErrors = {} as TErrorRecord<T>;
			for (const key in validations) {
				const value = get(data)?.[key];
				const validation = validations[key];

				if (validation?.required?.value && !value) {
					valid = false;
					newErrors[key] = validation?.required?.message;
				}

				const pattern = validation?.pattern;
				if (pattern?.value && !RegExp(pattern.value).test(value)) {
					valid = false;
					newErrors[key] = pattern.message;
				}

				const custom = validation?.custom;
				if (custom?.isValid && !custom.isValid(value)) {
					valid = false;
					newErrors[key] = custom.message;
				}
			}

			if (!valid) {
				errors.set(newErrors);
				options?.onError?.();
				return;
			}
		}

		if (options?.onSubmit) {
			options.onSubmit();
		}
	};

	const handleClear = (e) => {
		e.preventDefault();
		data.set({} as T);
		errors.set({} as TErrorRecord<T>);
	}

	return {
		data,
		errors,
		handleChange,
		handleChangeValue,
		handleSubmit,
		handleClear,
	};
};
