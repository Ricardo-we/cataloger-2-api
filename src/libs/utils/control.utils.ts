<<<<<<< HEAD
import { filterByKey } from "./array.utils";

export const getStrategyExecution = (strategy: any) => {
  const currentYear = new Date().getFullYear();
  const executions = strategy?.executions || [];
  const filter = filterByKey(executions, "year", currentYear);
  return filter.length > 0 && filter[0];
};
=======
import { filterByKey } from "./array.utils"

export const getStrategyExecution = (strategy: any) => {
    const currentYear = new Date().getFullYear()
    const executions = strategy?.executions || []
    const filter = filterByKey(executions, 'year', currentYear)
    return filter.length > 0 && filter[0]
}
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9
