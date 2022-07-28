<script lang="ts">
	import EditorMarkdown from '$lib/components/molecules/EditorMarkdown.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	let source = `
# H1 heading

## H2 heading

### H3 heading

--------

**bold text**

*italicized text*

--------

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

[Svelte](https://svelte.dev/)
`;
</script>

<Meta title="Molecules/Editor/Markdown" component={EditorMarkdown} argTypes={{}} />

<Template let:args>
	<EditorMarkdown {...args} />
</Template>

<Story name="Default" args={{ value: source }} />
