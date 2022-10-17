import { useCachedPromise } from "@raycast/utils";
import { getProjects } from "../api/projects";
import { handleUseCachedPromiseError } from "../helpers/errors";

export function useProjects(team?: string) {
  return useCachedPromise((team) => getProjects(team), [team], {
    execute: !!team,
    onError(error) {
      handleUseCachedPromiseError(error);
    },
  });
}
