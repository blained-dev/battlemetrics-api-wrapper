export interface OrganizationEndpointsFilter {
	range: string;
	game: string;
	group: string;
}

export interface OrganizationEndpointsFields {
	playerStats: string;
}

export interface OrganizationPlayerStatsParameters {
	filter: Pick<OrganizationEndpointsFilter, "range"> &
		Partial<Omit<OrganizationEndpointsFilter, "range">>;
	fields: Partial<OrganizationEndpointsFields>;
}
