const INIT_STATE = `Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/`;

const HEADERS = `This is an H1
=============

This is an H2
-------------


-----------------------


# This is an H1

## This is an H2

###### This is an H6


-----------------------


# This is an H1 #

## This is an H2 ##

### This is an H3 ######`;

const BLOCK_QUOTES = `> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.


-----------------------


> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.


-----------------------


> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.`;

const LISTS = `#### Unordered lists use asterisks, pluses, and hyphens:

* Black
* Yellow

+ Black
+ Yellow

- Black
- Yellow

#### Ordered lists use numbers followed by periods:

1. One
2. Two
3. Three`;

const CODE = `#### To produce a code block, simply indent every line of the block by at least 4 spaces or 1 tab:

This is a normal paragraph.

    This is a code block.
    
#### Code span:

Use the \`printf()\` function.

To include a literal backtick character within a code span, you can use multiple backticks as the opening and closing delimiters:

\`\`There is a literal backtick (\`) here.\`\``;

const HORIZONTAL = `#### You can produce a horizontal rule tag (<hr />) by placing three or more hyphens, asterisks, or underscores on a line by themselves.

***

* * *

*********

---

- - -

----------`;

const LINKS = `This is [an example](http://example.com/ "Title") inline link.

-----------------------


[This link](http://example.net/) has no title attribute.


-----------------------


This is [an example][id] reference-style link.

[id]: http://example.com/  "Optional Title Here"

-----------------------

<http://example.com/>`;

const EMPHASIS = `*single asterisks*

_single underscores_

**double asterisks**

__double underscores__`;

const IMAGES = `![Alt text](/path/to/img.jpg)


-----------------------


![Alt text](/path/to/img.jpg "Optional title")


-----------------------


![Alt text][id]

[id]: url/to/image  "Optional title attribute"`;

const Samples = {
  'Headers': HEADERS,
  'Quotes': BLOCK_QUOTES,
  'Lists': LISTS, 
  'Code': CODE,
  'Hr': HORIZONTAL,
  'Links': LINKS,
  'Emphasis': EMPHASIS,
  'Images': IMAGES
};

export {INIT_STATE, Samples};
