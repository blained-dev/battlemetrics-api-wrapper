import { Relationship } from "./Relationship";

export interface FlagPlayerAttributes {
	addedAt: string;
	removedAt: string;
}

export interface FlagPlayerRelationships {
	organization: Relationship<"organization">;
	player: Relationship<"player">;
	playerFlag: Relationship<"playerFlag">;
	user: Relationship<"user">;
}

export interface FlagPlayer {
	attributes: FlagPlayerAttributes;
	id: string;
	relationships: FlagPlayerRelationships;
	type: "flagPlayer";
}
