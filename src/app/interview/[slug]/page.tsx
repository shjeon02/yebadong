import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { JSDOM } from 'jsdom';
// import iconv from 'iconv-lite'; // No longer needed
import Link from 'next/link';

// This is a simplified mapping. A real implementation might use a more robust system.
const slugToHtmlFile: { [key: string]: string } = {
  'iq': 'interview-iq.html',
  'magellan': 'interview-magellan.html',
  'echolyn': 'interview-echolyn.html',
  'anglagard': 'interview-anglagard.html',
  'anekdoten': 'interview-anekdoten.html',
  'fish': 'chattingwithfish.html',
  'roger-waters': 'interview-waters.html',
  'landberk': 'interview-landberk.html',
  'philippe-constantin': 'interview-pc.html',
  'gnidrolog': 'interview-gnidrolog.html',
  'the-flower-kings': 'tfk.html',
  'arrakeen-iris': 'interview_gouvernaire.html',
  'jamie-muir': 'JamieMuir.htm',
  'henry-cow': 'Henrycow.htm',
};

async function getInterviewContent(slug: string) {
  const fileName = slugToHtmlFile[slug];
  if (!fileName) {
    return null;
  }

  const filePath = path.join(process.cwd(), 'src/app/interview', fileName);
  
  try {
    const fileBuffer = await fs.readFile(filePath);
    // All files are now UTF-8, so no conditional decoding is needed.
    const decodedContent = fileBuffer.toString('utf8');
    const dom = new JSDOM(decodedContent);
    const bodyContent = dom.window.document.body.innerHTML;
    const title = dom.window.document.title;
    
    // A simple way to get a title if the <title> tag is not descriptive
    const h1Text = dom.window.document.querySelector('h1')?.textContent || title || 'Interview';

    return {
      title: h1Text,
      content: bodyContent,
    };
  } catch (error) {
    console.error(`Error reading or parsing file for slug ${slug}:`, error);
    return null;
  }
}

export default async function InterviewPage({ params }: { params: { slug: string } }) {
  const interview = await getInterviewContent(params.slug);

  if (!interview) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold mb-8 border-b pb-4">{interview.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: interview.content }} />
      </article>
      <div className="mt-8 text-center">
        <Link href="/interview" className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

// This function tells Next.js which slugs are available and should be pre-rendered at build time.
export async function generateStaticParams() {
  return Object.keys(slugToHtmlFile).map((slug) => ({
    slug,
  }));
} 