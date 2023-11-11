export interface DataPointList {
	metrics: { name: string; range: string; resolution: string }[];
	fields?: Partial<DataPointEndpointsFields>;
}

interface DataPointEndpointsFields {
	dataPoint: string;
}
