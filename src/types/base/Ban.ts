import { BattlemetricsPlayer } from "./Player";
import { Relationship } from "./Relationship";

export interface BanAttributes {
	autoAddEnabled: boolean;
	expires: string | null;
	id: string;
	identifiers: unknown[];
	nativeEnabled: boolean | null;
	note: string | null;
	orgWide: boolean;
	reason: string;
	timestamp: string;
	uid: string;
}

export interface BanRelationships {
	banList: Relationship<"banList">;
	organization: Relationship<"organization">;
	player: Relationship<"player">;
	server: Relationship<"server">;
	user: Relationship<"user">;
}

export interface Ban {
	attributes: BanAttributes;
	id: string;
	meta: BattlemetricsPlayer;
	relationships: BanRelationships;
	type: "ban";
}
