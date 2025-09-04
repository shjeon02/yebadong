import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { JSDOM } from 'jsdom';

// This function can be removed if you're not using it.
// It's used to generate static paths for your links.
export async function generateStaticParams() {
  // We need to list the files in the new directory.
  // For now, I will hardcode them.
  const linkSlugs = ['links', 'all-bands', 'musicshop', 'other-label'];
  return linkSlugs.map((slug) => ({
    slug,
  }));
}

async function getLinkContent(slug: string) {
  // Correctly locate the new HTML files that will be created
  const filePath = path.join(process.cwd(), 'src', 'app', 'link', `${slug}.html`);
  try {
    const htmlContent = await fs.readFile(filePath, 'utf-8');
    
    // Use JSDOM to parse the HTML and extract title and body
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;
    const bodyContent = doc.body.innerHTML;
    const title = doc.title || 'Untitled';
    
    return { content: bodyContent, title };
  } catch (error) {
    // If the file doesn't exist yet, we don't treat it as a 404
    // during the build process, but it will 404 on request.
    console.error(`Could not read file for slug: ${slug}`, error);
    return null;
  }
}

export default async function LinkDetailPage({ params }: { params: { slug: string } }) {
  const linkData = await getLinkContent(params.slug);

  if (!linkData) {
    notFound();
  }

  const { content, title } = linkData;

  return (
    <div className="container mx-auto px-4 py-8">
        <article className="prose prose-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    </div>
  );
} 