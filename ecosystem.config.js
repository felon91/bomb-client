module.exports = {
  apps: [
    {
      name: 'next',
      script: 'npm',
      args: 'start',
      watch: true,
      ignore_watch: ['./node_modules'],
    },
  ],
};
