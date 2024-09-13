import type { MetaFunction } from "@remix-run/node";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { googleQuery } from "~/GoogleQuery";

const queryClient = new QueryClient();

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const clientLoader = async () => {
  return await queryClient.ensureQueryData(googleQuery());
}

export default function Index() {
  const { data, isLoading } = useQuery({
    ...googleQuery()
  });

  if (isLoading) {
    return (<>Loading</>);
  } else {
    return (<>{data}</>);
  }
}
