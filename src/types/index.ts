
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}


export interface CartItems extends Product {
    quantity: number
}

export interface TODOs {
    id: number;
    name: string;
    checked: boolean;
}