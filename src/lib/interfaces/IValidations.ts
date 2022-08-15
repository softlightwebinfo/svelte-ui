export interface IValidation {
	required?: {
		value: boolean;
		message: string;
	};
	pattern?: {
		value: string;
		message: string;
	};
	custom?: {
		isValid: (value: string) => boolean;
		message: string;
	};
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type TValidations<T extends {}> = Partial<Record<keyof T, IValidation>>;
