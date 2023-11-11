interface CommandsActivityEndpointsFilter {
	commands: string;
	servers: string;
	summary: boolean;
	timestamp: string;
	users: string;
}

export interface CommandsActivityListParameters {
	filter?: Partial<CommandsActivityEndpointsFilter>;
}
