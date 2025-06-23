import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';

async function getFilePaths() {
  const directory = path.join(process.cwd(), 'src/app/interview');
  try {
    const filenames = await fs.readdir(directory);
    return filenames.filter(file => file.endsWith('.html') || file.endsWith('.htm'));
  } catch (error) {
    console.error("Could not read interview directory:", error);
    return [];
  }
}

export async function generateStaticParams() {
  const files = await getFilePaths();
  return files.map(file => ({
    slug: file.replace(/\.html?$/, ''),
  }));
}

async function getInterviewContent(slug: string) {
  const directory = path.join(process.cwd(), 'src/app/interview');
  const potentialHtmlPath = path.join(directory, `${slug}.html`);
  const potentialHtmPath = path.join(directory, `${slug}.htm`);

  let filePath = '';
  try {
    await fs.access(potentialHtmlPath);
    filePath = potentialHtmlPath;
  } catch (e) {
    try {
      await fs.access(potentialHtmPath);
      filePath = potentialHtmPath;
    } catch (err) {
      return null; // No file found
    }
  }

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const bodyMatch = fileContents.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    return bodyMatch ? bodyMatch[1] : fileContents;
  } catch (error) {
    console.error(`Error reading file for slug ${slug}:`, error);
    return null;
  }
}

export default async function InterviewPage({ params }: { params: { slug: string } }) {
  const content = await getInterviewContent(params.slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      <div className="mt-8 text-center">
        <Link href="/interview" className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 