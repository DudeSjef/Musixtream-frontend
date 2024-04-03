/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
    return {
      verbose: true,
      transformIgnorePatterns: [
        '/node_modules/(?!axios/)'
        ],
    };
  };