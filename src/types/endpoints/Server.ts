import { PageOptions, Relationship } from "../base/Api";
import {
	Server,
	ServerAttributes,
	ServerRelationships,
	ServerStatus,
} from "../base/Server";

interface ServerListFields {
	server: keyof Server;
}

interface ServerListFilter {
	countries: string[];
	favorites: boolean;
	game: string;
	groupLeader: boolean;
	groups: string;
	ids: { blacklist: string; whitelist: string };
	maxDistance: number;
	organizations: string;
	players: { min: number; max: number };
	rcon: boolean;
	search: string;
	status: ServerStatus;
}

type ServerListIncludeOptions = "serverGroup";

interface ServerListRelations {
	server: string;
}

type ServerListSortOptions =
	| "rank"
	| "name"
	| "players"
	| "distance"
	| "-rank"
	| "-name"
	| "-players"
	| "-distance";

export interface ServerListParameters {
	fields?: Partial<ServerListFields>;
	filter?: Partial<ServerListFilter>;
	include?: ServerListIncludeOptions;
	location?: string;
	page?: PageOptions;
	relations?: Partial<ServerListRelations>;
	sort?: ServerListSortOptions;
}

export interface ServerCreateParamaters {
	data: Pick<Server, "type"> & {
		attributes: Pick<ServerAttributes, "ip" | "port" | "portQuery">;
		relationships: ServerRelationships & { gap: Relationship<"gsp"> };
	};
}

export interface ServerUpdateParameters {
	data: Pick<Server, "id" | "type"> & {
		attributes: Pick<
			ServerAttributes,
			"address" | "ip" | "metadata" | "port" | "portQuery" | "private"
		> & { portRCON: number; rconPassword: string };
		relationships: Pick<ServerRelationships, "defaultBanList">;
	};
}

export interface ServerEnableRCONParameters {
	data: Pick<Server, "id" | "type"> & {
		attributes: Pick<ServerAttributes, "metadata"> & {
			portRCON: string;
			rconPassword: string;
		};
		relationships: Pick<ServerRelationships, "defaultBanList" | "organization">;
	};
}

export interface ServerDeleteRCONParameters {}

export interface ServerRCONDisconnectParameters {}

export interface ServerRCONConnectParameters {}

interface ServerInfoFields {
	identifier: string;
	orgDescription: string;
	orgGroupDescription: string;
	organization: string;
	player: string;
	server: string;
	serverDescription: string;
	serverEvent: string;
	serverGroup: string;
	serverUptime: string;
	session: string;
}

type ServerInfoIncludeOptions =
	| "player"
	| "identifier"
	| "session"
	| "uptime:7"
	| "uptime:30"
	| "uptime:90"
	| "serverEvent"
	| "serverGroup"
	| "serverDescription"
	| "orgnaization"
	| "orgDescription"
	| "orgGroupDescription";

interface ServerInfoRelations {
	identifier: string;
	orgDescription: string;
	orgGroupDescription: string;
	organization: string;
	player: string;
	server: string;
	serverDescription: string;
	serverEvent: string;
	serverGroup: string;
	serverUptime: string;
	session: string;
}

export interface ServerInfoParameters {
	fields?: Partial<ServerInfoFields>;
	include?: ServerInfoIncludeOptions;
	relations?: Partial<ServerInfoRelations>;
}

export interface ServerPlayerCountHistoryParameters {
	start: string;
	stop: string;
	resolution?: "raw" | "30" | "60" | "1440";
}

export interface ServerRankHistoryParameters {
	start: string;
	stop: string;
}

export interface ServerGroupRankHistoryParameters {
	start: string;
	stop: string;
}

export interface ServerTimePlayedHistoryParameters {
	start: string;
	stop: string;
}

export interface ServerFirstTimeHistoryParameters {
	start: string;
	stop: string;
}

export interface ServerUniquePlayerHistoryParameters {
	start: string;
	stop: string;
}

type ServerSessionHistoryIncludeOptions = "player";

export interface ServerSessionHistoryParameters {
	at?: string;
	include?: ServerSessionHistoryIncludeOptions;
	start?: string;
	stop?: string;
}

export interface ServerForceUpdateParamaters {}

interface ServerOutageHistoryFilter {
	range: string;
}

type ServerOutageHistoryIncludeOptions = "uptime:7" | "uptime:30" | "uptime:90";

export interface ServerOutageHistoryParameters {
	filter?: Partial<ServerOutageHistoryFilter>;
	include?: ServerOutageHistoryIncludeOptions;
	page?: PageOptions;
}

export interface ServerDowntimeHistoryParameters {
	start: string;
	stop: string;
	resolution?: "60" | "1440";
}
