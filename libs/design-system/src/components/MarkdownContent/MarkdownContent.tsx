import { observer } from 'mobx-react';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import cn from 'classnames';

import './index.css';
import {
  getDomSanitizedValue,
  getFormattedVariableMarkdownContent,
} from '../../utils/MarkdownContentUtils';

interface Props {
  content: string;
  className?: string;
}

const MarkdownContent = (props: Props): React.ReactElement => {
  const { content, className } = props;

  const formattedMarkdown = getFormattedVariableMarkdownContent(content);
  const sanitizedMarkdown = getDomSanitizedValue(formattedMarkdown);

  return (
    <Markdown
      components={{
        a: ({ href, children, ...props }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        ),
      }}
      remarkPlugins={[remarkGfm]}
      className={cn('markdown-content', className)}
    >
      {sanitizedMarkdown}
    </Markdown>
  );
};

export default observer(MarkdownContent);
