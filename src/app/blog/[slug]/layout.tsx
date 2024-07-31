export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {

  try {
    return {
      title: `My Post: ${params.slug}`,
      // description: `${params.description},
      // images: []
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not found",
      description: "The page you are looking for does not exist",
    };
  }
}

// export async function generateStaticParams() {
//   try {
//     return {
     
//     };
//   } catch (error) {
//     console.error(error);
//   }
// }

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
