import { PageOptions } from "../base/Api";

interface SessionSessionsFields {
	identifier: string;
	player: string;
	server: string;
	session: string;
}

interface SessionSessionsFilter {
	at: string;
	games: string;
	identifiers: string;
	organizations: string;
	players: string;
	range: string;
	servers: string;
}

type SessionSessionsIncludeOptions = "player" | "identifier" | "server";

export interface SessionSessionsParameters {
	fields?: Partial<SessionSessionsFields>;
	filter?: Partial<SessionSessionsFilter>;
	include?: SessionSessionsIncludeOptions;
	page?: PageOptions;
}

interface SessionSessionDetailsFields {
	identifier: string;
	player: string;
	server: string;
	session: string;
}

type SessionSessionDetailsIncludeOptions = "player" | "identifier" | "server";

export interface SessionSessionDetailsParameters {
	fields?: Partial<SessionSessionDetailsFields>;
	include?: SessionSessionDetailsIncludeOptions;
}

interface SessionSessionsCoplayFields {
	identifier: string;
	player: string;
	server: string;
	session: string;
}

type SessionSessionsCoplayIncludeOptions = "player" | "identifier" | "server";

export interface SessionSessionsCoplayParameters {
	fields?: Partial<SessionSessionsCoplayFields>;
	include?: SessionSessionsCoplayIncludeOptions;
	page?: PageOptions;
}
