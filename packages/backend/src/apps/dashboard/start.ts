import { Dashboard } from "./DashboardApp";

try {
  new Dashboard().start().catch(handleError);
} catch (e) {
  handleError(e);
}

function handleError(e: any) {
  console.log(e);
  process.exit(1);
}
