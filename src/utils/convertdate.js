export const convertToDate = timestamp =>
  new Date(timestamp.seconds * 1000).toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
  });
