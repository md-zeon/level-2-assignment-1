type formatValueType = string | number | boolean;

const formatValue = (value: formatValueType): formatValueType | undefined => {
	if (typeof value === "string") {
		return value.toUpperCase();
	} else if (typeof value === "number") {
		return value * 10;
	} else if (typeof value === "boolean") {
		return !value;
	}
};





const getLength = (value: string | any[]): number | undefined => {
	if (typeof value === "string") {
		return value.length;
	} else if (Array.isArray(value)) {
		return value.length;
	}
};





class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getDetails(): string {
		return `'Name: ${this.name}, Age: ${this.age}'`;
	}
}





interface Item {
	title: string;
	rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
	return items.filter((item: Item) => item.rating >= 4);
};





interface User {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
	return users.filter((user: User) => user.isActive === true);
};





interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
	const { author, isAvailable, publishedYear, title } = book;
	console.log(
		`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
			isAvailable ? "Yes" : "No"
		}`,
	);
};





type UniqueArrayType = string[] | number[];

const getUniqueValues = (
	arr1: UniqueArrayType,
	arr2: UniqueArrayType,
): UniqueArrayType => {
	const uniqueValues: UniqueArrayType = [];

	const unique: { [key: string]: boolean } = {};
	let index = 0;

	for (let i = 0; i < arr1.length; i++) {
		const value = arr1[i];
		if (!unique[value]) {
			uniqueValues[index++] = value;
			unique[value] = true;
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		const value = arr2[i];
		if (!unique[value]) {
			uniqueValues[index++] = value;
			unique[value] = true;
		}
	}

	return uniqueValues;
};





interface Product {
	name: string;
	price: number;
	quantity: number;
	discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
	if (products.length === 0) {
		return 0;
	}
	return products.reduce((totalPrice, product) => {
		totalPrice += product.price * product.quantity;
		if (product.discount) {
			const discountAmount =
				product.price * (product.discount / 100) * product.quantity;
			totalPrice -= discountAmount;
		}
		return totalPrice;
	}, 0);
};
