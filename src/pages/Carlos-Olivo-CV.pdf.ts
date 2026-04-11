import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const CV_FILENAME = 'Carlos-Olivo-CV.pdf';
const cvFilePath = join(process.cwd(), 'src/assets/resume.pdf');

export async function GET() {
	const fileBuffer = await readFile(cvFilePath);

	return new Response(fileBuffer, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `attachment; filename="${CV_FILENAME}"`,
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
