<script>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  export let content;
  import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => `<strong>${text}</strong>`
    },
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: (node, next) => {
        return `<a href="${node.data.target.fields.file.url}">${next(node.content)}</a>`;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return `<img src="${node.data.target.fields.file.url}" />`;
      },
    }
  };

</script>

<div class="content">
  {@html documentToHtmlString(content, options)}
</div>

<style>

</style>
