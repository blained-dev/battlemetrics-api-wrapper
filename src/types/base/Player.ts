import { Relationship } from "./Relationship";

export interface PlayerAttributes {
	createdAt: string;
	id: string;
	name: string;
	positiveMatch: boolean;
	private: boolean;
	updatedAt: string;
}

export interface PlayerMeta {
	key: string;
	private: boolean;
	value: string | null;
}

interface PlayerRelationshipsServerMeta {
	firstSeen: string;
	lastSeen: string;
	online: boolean;
	timePlayed: number;
}

export interface PlayerRelationships {
	organizations: Relationship<"organization">[];
	server: Relationship<"server">;
	servers: Relationship<
		"server",
		{
			meta: PlayerRelationshipsServerMeta;
		}
	>[];
	user: Relationship<"user">;
}

export interface Player {
	attributes: PlayerAttributes;
	id: string;
	meta: PlayerMeta;
	relationships: PlayerRelationships;
	type: "player";
}
