/* Line-style tech icons (24 grid, currentColor) used on service pages. */
const ICONS_RAW = {
  react: (<><circle cx="12" cy="12" r="2.1" /><ellipse cx="12" cy="12" rx="10" ry="4.2" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" /></>),
  next: (<><path d="M5 19V5l9 9V5" /><circle cx="12" cy="12" r="10" /></>),
  ts: (<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10h5M9.5 10v7M14 10.5c1.6-1.2 4-1 4 1 0 1.6-1.4 2.2-2.6 2.4 1.3.1 2.8.6 2.8 2.1 0 1.8-2.6 2.4-4.2 1.3" /></>),
  node: (<><path d="M12 2.5 20.5 7.3v9.4L12 21.5 3.5 16.7V7.3L12 2.5Z" /><path d="M9 9v4.5c0 1.4 1 2 2.4 2" /><path d="M14.5 9.2c-.8-.6-2.4-.8-3.2 0-.8.7-.6 1.7.4 2.1 1.2.5 2.6.6 3 1.9.3 1.4-1.5 2.4-3.2 1.7" /></>),
  flutter: (<><path d="M14.4 2 4 12.4l3.2 3.2L20.8 2h-6.4Z" /><path d="M14.4 11.6 8.9 17.1l5.5 5.4h6.4l-5.5-5.4 5.5-5.5h-6.4Z" /></>),
  swift: (<><path d="M13.5 3c4 2.8 5.9 6.3 5.4 10.8-.4 3.6-2.6 5.9-5.2 7.2.6-1.7.4-3.3-.9-4.6-1.6 2.6-3.6 4.4-6 5.3 1.2-2 1.4-3.9.7-5.7C5.9 17.6 4 17.9 2.5 19c.8-4.3 3-7.9 6.7-10.8C9.9 6.4 11.2 4.5 13.5 3Z" /></>),
  kotlin: (<><path d="M4 4h16L12 12l8 8H4V4Z" /><path d="M4 20l8-8" /></>),
  figma: (<><circle cx="12" cy="12" r="3" /><circle cx="12" cy="5.5" r="3" /><circle cx="12" cy="18.5" r="3" /><path d="M15 12h3a3 3 0 1 1 0 6h-3M9 12H6" /></>),
  postgres: (<><ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v13c0 1.6 3.1 2.9 7 2.9s7-1.3 7-2.9v-13M5 12c0 1.6 3.1 2.9 7 2.9s7-1.3 7-2.9" /></>),
  mongo: (<><path d="M12 2.5c3.6 3.4 5.4 6.9 5.4 10.6 0 3.6-2.1 6.6-5.4 8.4-3.3-1.8-5.4-4.8-5.4-8.4 0-3.7 1.8-7.2 5.4-10.6Z" /><path d="M12 7v11" /></>),
  aws: (<><path d="M6.5 17.5a9.7 9.7 0 0 1-2.3-6.3C4.2 6.6 7.6 3 12 3c3 0 5.6 1.6 7 4" /><path d="M17.5 6.5a9.7 9.7 0 0 1 2.3 6.3c0 4.6-3.4 8.2-7.8 8.2-3 0-5.6-1.6-7-4" /><path d="M8.5 13.5c1.8 1.4 4.2 1.6 6.6.5" /></>),
  docker: (<><path d="M3 13.5h3v3H3zM7 13.5h3v3H7zM11 13.5h3v3h-3zM7 9.8h3v3H7zM11 9.8h3v3h-3z" /><path d="M17 12c2.8 0 4.6 1.5 5 3.5-1 2-3 3-5.5 3-3.4 0-6-1.6-7.5-4" /></>),
  k8s: (<><path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2Z" /><circle cx="12" cy="12" r="3.4" /><path d="M12 5v3.6M12 15.4V19M7 9.5l3 1.9M14 12.6l3 1.9M17 9.5l-3 1.9M10 12.6l-3 1.9" /></>),
  terraform: (<><path d="M9 3 3 6v6l6-3V3ZM15 6l6-3v6l-6 3V6ZM9 12l6 3v6l-6-3v-6Z" /></>),
  python: (<><path d="M12 3c-2.5 0-4 1-4 3v2h7v1.5H6.5C4.5 9.5 3 11 3 13s1.5 3.5 3.5 3.5H8V14c0-2 1.5-3 4-3s4-1 4-3V6c0-2-1.5-3-4-3Z" /><path d="M12 21c2.5 0 4-1 4-3v-2H9v-1.5h8.5c2 0 3.5-1.5 3.5-3.5" /></>),
  graphql: (<><circle cx="12" cy="4.5" r="1.8" /><circle cx="5" cy="8.5" r="1.8" /><circle cx="19" cy="8.5" r="1.8" /><circle cx="5" cy="16" r="1.8" /><circle cx="19" cy="16" r="1.8" /><circle cx="12" cy="19.5" r="1.8" /><path d="M12 6.3 6.4 8.2M17.6 8.2 12 6.3M6 10.3l5.5 8M18 10.3l-5.5 8M6.8 16h10.4" /></>),
  redis: (<><path d="M4 7c2.7-1.2 5.4-1.8 8-1.8s5.3.6 8 1.8c-2.7 1.2-5.4 1.8-8 1.8S6.7 8.2 4 7Z" /><path d="M4 12c2.7 1.2 5.4 1.8 8 1.8s5.3-.6 8-1.8M4 17c2.7 1.2 5.4 1.8 8 1.8s5.3-.6 8-1.8" /></>),
  firebase: (<><path d="M4 16.5 8.5 3l3 6L15 6l5 10.5H4Z" /><path d="M11.5 9 8.5 3 15 6" /></>),
  ai: (<><path d="M12 3.5l1.6 4.4 4.4 1.6-4.4 1.6L12 15.5l-1.6-4.4L6 9.5l4.4-1.6L12 3.5Z" /><path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" /></>),
  figmaSimple: (<><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M4 12h16" /></>),
};


export const ICONS: Record<string, () => React.ReactElement> = Object.fromEntries(
  Object.entries(ICONS_RAW).map(([k, node]) => [
    k,
    () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {node}
      </svg>
    ),
  ]),
);
