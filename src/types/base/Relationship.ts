export type BasicRelationshipData<Type> = { type: Type; id: string };

export interface Relationship<Type, AdditionalData = {}> {
	data: BasicRelationshipData<Type> & AdditionalData;
}
