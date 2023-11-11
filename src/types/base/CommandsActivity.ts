import { BasicRelationshipData, Relationship } from "./Relationship";

export interface CommandsActivityRelationships {
	organization: Relationship<"organization">;
	user: Relationship<"user">;
	games: BasicRelationshipData<"game">[];
}

export interface CommandsActivity {
	id: string;
	relationships: CommandsActivityRelationships;
	type: "commandStats";
}
