import { client } from '$lib/contentfulClient';

export async function get() {
    const class_entry = await client.getEntries({
        content_type: 'class',
        include: 10
    });

    if (class_entry) {
        return {
            body: {
                class_entry
            }
        };
    }

    return {
        status: 404
    };
}
