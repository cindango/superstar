import { client } from '$lib/contentfulClient';

export async function get() {
    const content = await client.getEntries({
        content_type: 'class',
        order: '-sys.createdAt'
    });

    if (content) {
        return {
            status: 200,
            body: {
                content
            }
        };
    }

    return {
        status: 404
    };
}
