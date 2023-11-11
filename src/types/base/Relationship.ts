export type BasicRelationshipData<Type> = { type: Type; id: string };

export interface Relationship<Type, Data = BasicRelationshipData<Type>> {
	data: Data;
}
