import { request } from "./request";

export type Teams = {
  gid: string;
  name: string;
};

export async function getTeamsForWorkspace(workspace: 1201518352966289) {
  const { data } = await request<{ data: Teams[] }>("/teams", {
    params: {
        workspace,
    },
  });

  return data.data;
}
