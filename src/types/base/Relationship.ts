type BasicRelationship<Type> = { type: Type; id: string };

export interface Relationship<Type, Data = BasicRelationship<Type>> {
	data: Data;
}
