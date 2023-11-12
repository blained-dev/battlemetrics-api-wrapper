import { Relationship } from "./Api";

interface ServerAttributesMetadata {
	betaSourceProtocol: boolean;
	clientPerf: boolean;
	connectionType: "source" | "ws";
	disableLocked: boolean | null;
	disabledReason: string | null;
	hasSourceMod: boolean | null;
	hllGetPlayerInfo: boolean;
	hllPlayerListInterval: number;
	logSecret: string | null;
	rconIP: string;
	reservedSlotKickReason: string;
	reservedSlots: number;
	reservedSlotsKicKLastToJoin: boolean;
	statusInterval: number;
	useConnectionPool: boolean;
	useGetChat: boolean;
	username: string;
}

export type ServerStatus =
	| "online"
	| "offline"
	| "dead"
	| "removed"
	| "invalid";
export type QueryStatus = "valid" | "invalid" | "timeout";
export type RconStatus =
	| "connected"
	| "disconnected"
	| "password-rejected"
	| "timeout"
	| "refused"
	| "unknown";

export interface ServerAttributes {
	address: string | null;
	country: string;
	createdAt: string;
	details: unknown;
	id: string;
	ip: string;
	location: number[];
	maxPlayers: number;
	metadata: ServerAttributesMetadata;
	name: string;
	players: number;
	port: number;
	portQuery: number;
	private: boolean;
	queryStatus: QueryStatus | null;
	rank: number | null;
	rconActive: boolean | null;
	rconDisconnected: string | null;
	rconLastConnected: string | null;
	rconStatus: RconStatus | null;
	status: ServerStatus;
	updatedAt: string;
}

export interface ServerRelationships {
	defaultBanList: Relationship<"banList">;
	game: Relationship<"game">;
	organization: Relationship<"organization">;
	serverGroup: Relationship<"serverGroup", { leader: boolean }>;
}

export interface Server {
	attributes: ServerAttributes;
	id: string;
	relationships: ServerRelationships;
	type: "server";
}
