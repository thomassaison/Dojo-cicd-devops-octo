export interface SkoolRequest {
  polygramme: string;
  description: string;
  version: string;
}

export const toSkoolRequest = function (body: unknown): SkoolRequest {
  const { polygramme, description, version } = body;
  return { polygramme, description, version };
};
