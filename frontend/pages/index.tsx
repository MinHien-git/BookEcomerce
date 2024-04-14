import { dehydrate, QueryClient, useQuery } from "react-query";
import LoginPage from "./login";

export default function Page() {
  // Tham khảo https://tanstack.com/query/v4/docs/react/guides/ssr
  const { data } = useQuery({
    queryKey: "challenges",
    queryFn: () => ApiServices.mock.getMockData(),
  });

  return <LoginPage />;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("challenges", () =>
    ApiServices.mock.getMockData()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
