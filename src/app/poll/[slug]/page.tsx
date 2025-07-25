import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/app/poll');
  try {
    const filenames = await fs.readdir(postsDirectory);
    const htmlFiles = filenames.filter(file => file.endsWith('.html'));
    
    return htmlFiles.map(file => ({
      slug: file.replace(/\.html$/, ''),
    }));
  } catch (error) {
    console.error("Could not read poll directory:", error);
    return [];
  }
}

async function getPollContent(slug: string) {
  const filePath = path.join(process.cwd(), 'src/app/poll', `${slug}.html`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    // Extract content within <body> tags, or use the whole file if no <body> tag is found.
    const bodyMatch = fileContents.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const content = bodyMatch ? bodyMatch[1] : fileContents;
    return content;
  } catch (error) {
    return null;
  }
}

export default async function PollDetailsPage({ params }: { params: { slug: string } }) {
  const content = await getPollContent(params.slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
} 