export type FileCabinet = {
	Id: string;
	Name: string;
	IsBasket: boolean;
};

export type GetFileCabinetsOutput = {
	FileCabinet: FileCabinet[];
};
