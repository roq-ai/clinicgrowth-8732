const mapping: Record<string, string> = {
  appointments: 'appointment',
  businesses: 'business',
  leads: 'lead',
  pipelines: 'pipeline',
  users: 'user',
  workflows: 'workflow',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
