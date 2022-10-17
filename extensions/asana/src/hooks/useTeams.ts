import { useCachedPromise } from "@raycast/utils";
import { getTeamsForWorkspace } from "../api/teams";
import { handleUseCachedPromiseError } from "../helpers/errors";

export function useTeams(workspace?: string) {
  return useCachedPromise((workspace) => getTeamsForWorkspace(workspace), [workspace], {
    execute: !!workspace,
    onError(error) {
      handleUseCachedPromiseError(error);
    },
  });
}
