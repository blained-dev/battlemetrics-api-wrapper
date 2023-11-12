import { Relationship } from "./Api";

interface SessionAttributesMetadata {
	key: string;
	private: boolean;
	value: string | null;
}

export interface SessionAttributes {
	firstTime: boolean;
	metadata: SessionAttributesMetadata[];
	name: string;
	private: boolean;
	start: string;
	stop: string | null;
}

export interface SessionRelationships {
	identifiers: Relationship<"identifier">[];
	organization: Relationship<"organization">;
	player: Relationship<"player">;
	server: Relationship<"server">;
}

export interface Session {
	attributes: SessionAttributes;
	id: string;
	relationships: SessionRelationships;
	type: "session";
}
