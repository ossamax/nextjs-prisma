import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {post && (
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold mb-4">{post.title}</h4>
            <h3>Author : </h3>
            <p className="text-gray-700">{post.content}</p>
            <Link href={`/posts`}>Back</Link>
          </div>
        )}
      </div>
    </main>
  );
}
