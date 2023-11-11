import { PageOptions } from "../base/Api";
import { CoplayAttributes } from "../base/Coplay";

interface CoplayEndpointsFilter {
	organizations: string;
	period: string;
	players: string;
	servers: string;
}

interface CoplayEndpointsFields {
	coplayRelation: keyof CoplayAttributes;
}

export interface CoplayListParameters {
	filter: CoplayEndpointsFilter;
	fields?: Partial<CoplayEndpointsFields>;
	page?: PageOptions;
}
