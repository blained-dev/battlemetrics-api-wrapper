import { BattlemetricsClient } from "./BattlemetricsClient";

const client = new BattlemetricsClient("");

console.log(client.bans.info(""));
