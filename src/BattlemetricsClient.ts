import axios from "axios";
import { Bans } from "./endpoints/Bans";

export class BattlemetricsClient {
	public bans: Bans;

	constructor(private token: string) {
		//Set Axios Defaults
		axios.defaults.baseURL = "https://api.battlemetrics.com";
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

		this.bans = new Bans();
	}
}
