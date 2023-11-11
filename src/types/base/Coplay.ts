export interface CoplayAttributes {
	duration: number;
	name: string;
}

export interface Coplay {
	attributes: CoplayAttributes;
	id: string;
	type: "coplayRelation";
}
