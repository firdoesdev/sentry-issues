import { sentryFetcher } from "@/lib/fetcher/sentry-api";

type TProject = {
  id: string;
  name: string;
  slug: string;
};

const parseProjects = (projects: any[]): TProject[] =>
  projects.map((project: TProject) => ({
    id: project?.id,
    name: project?.name,
    slug: project?.slug,
  }));

export async function getProjects(): Promise<TProject[] | undefined> {
  try {
    const response = await sentryFetcher.get("/organizations/sentry/projects/");

    return parseProjects(response.data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}
