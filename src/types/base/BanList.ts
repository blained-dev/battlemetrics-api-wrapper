import { Relationship } from "./Relationship";

interface BanListAttributes {
	action: "none" | "log" | "kick";
	defaultAutoAddEnabled: boolean;
	defaultIdentifiers: string[];
	defaultNativeEnabled: boolean | null;
	defaultReasons: unknown[];
	name: string;
	nativeBanPermMaxExpires: number | null;
	nativeBanTTL: number | null;
	nativeBanTempMaxExpires: number | null;
	permCreate: boolean;
	permDelete: boolean;
	permManage: boolean;
	permUpdate: boolean;
}

export interface BanListServerRelationshipData {
	id: string;
	meta?: {
		action: string;
		defaultNativeEnabled?: boolean;
		nativeBanPermMaxExpires?: number;
		nativeBanTTL?: number;
		nativeBanTempMaxExpires?: number;
	};
	type: "server";
}

interface BanListRelationships {
	organization: Relationship<"organization">;
	owner: Relationship<"owner">;
	servers?: Relationship<"servers", BanListServerRelationshipData[]>;
}

export interface BanList {
	attributes: BanListAttributes;
	id: string;
	relationships: BanListRelationships;
	type: "banList";
}
