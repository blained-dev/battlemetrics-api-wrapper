export interface DataPointAttributes {
	group: number;
	max: number;
	min: number;
	name: string;
	timestamp: string;
}

export interface DataPoint {
	attributes: DataPointAttributes;
	type: "dataPoint";
}
