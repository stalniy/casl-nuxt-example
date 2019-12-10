export default () => ({
  user: null,
  isLoading: false,
  permissions: [
    { action: 'read', subject: 'books' },
    { action: 'read', subject: 'book' },
  ]
})
