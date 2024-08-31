import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h3 className="text-2xl font-bold mb-8">All Posts</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h4 className="text-xl font-semibold mb-4">{post.title}</h4>
            <h3>Author : </h3>
            <p className="text-gray-700">{post.content}</p>
            <Link href={`/posts/${post.slug}`}>View details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
